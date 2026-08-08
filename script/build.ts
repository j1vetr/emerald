import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";
import {
  pages,
  sitemapPaths,
  getHeadMeta,
  renderHeadTags,
  notFoundMeta,
  SITE_ORIGIN,
  type Lang,
} from "../client/src/lib/seo";

// Ensure dev-only vite plugins stay out of the build output
process.env.NODE_ENV = "production";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "@neondatabase/serverless",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

const PUBLIC_DIR = "dist/public";
const SSR_DIR = path.resolve("dist/ssr");

async function prerender() {
  console.log("prerendering pages...");
  const template = await readFile(path.join(PUBLIC_DIR, "index.html"), "utf-8");
  if (!template.includes("<!--head-tags-->") || !template.includes("<!--app-html-->")) {
    throw new Error("index.html is missing the prerender placeholders");
  }
  const ssrEntry = pathToFileURL(path.resolve(SSR_DIR, "entry-server.js")).href;
  const { render } = await import(ssrEntry);

  const writePage = async (
    urlPath: string,
    lang: Lang,
    headTags: string,
    outFile: string,
  ) => {
    const appHtml: string = await render(urlPath, lang);
    const html = template
      .replace("<!--head-tags-->", headTags)
      .replace("<!--app-html-->", appHtml)
      .replace('<html lang="en">', `<html lang="${lang}">`);
    const outPath = path.join(PUBLIC_DIR, outFile);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html);
  };

  let count = 0;
  for (const page of pages) {
    for (const lang of ["en", "tr"] as Lang[]) {
      const urlPath = page.paths[lang];
      const meta = getHeadMeta(urlPath);
      await writePage(
        urlPath,
        lang,
        renderHeadTags(meta),
        path.join(urlPath, "index.html"),
      );
      count++;
    }
  }
  console.log(`prerendered ${count} pages`);

  // Standalone 404 page, served with a 404 or 410 status by the server
  const nf = notFoundMeta.en;
  const notFoundHead = [
    `<title>${nf.title}</title>`,
    `<meta name="description" content="${nf.description}" />`,
    `<meta name="robots" content="noindex, nofollow" />`,
  ].join("\n    ");
  await writePage("/this-page-does-not-exist/", "en", notFoundHead, "404.html");

  // Remove the raw SPA template so it cannot be served as a duplicate page
  await rm(path.join(PUBLIC_DIR, "index.html"), { force: true });
}

async function generateSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const paths = sitemapPaths();
  const urls = paths
    .map(
      (p) =>
        `  <url>\n    <loc>${SITE_ORIGIN}${p}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(PUBLIC_DIR, "sitemap.xml"), xml);
  console.log(`sitemap.xml written with ${paths.length} URLs`);
}

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("building ssr entry...");
  await viteBuild({
    build: {
      ssr: "src/entry-server.tsx",
      outDir: SSR_DIR,
      emptyOutDir: true,
    },
  });

  await prerender();
  await generateSitemap();

  // SSR bundle is only needed at build time
  await rm(SSR_DIR, { recursive: true, force: true });

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
