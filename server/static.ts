import express, { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";
import path from "path";
import { findRedirect } from "../client/src/lib/seo";

const FILE_EXT_RE = /\.[a-zA-Z0-9]+$/;
const CANONICAL_HOST = "emeraldmansion.com";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }
  const notFoundPath = path.resolve(distPath, "404.html");

  const send404 = (res: Response, status = 404) => {
    res.status(status);
    if (fs.existsSync(notFoundPath)) {
      res.sendFile(notFoundPath);
    } else {
      res.type("text/plain").send("404 Not Found");
    }
  };

  // SEO middleware: host and protocol canonicalization, legacy redirects,
  // language root redirect and trailing slash normalization
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();

    const hostNoPort = String(req.headers.host || "")
      .split(":")[0]
      .toLowerCase();
    const proto = (req.headers["x-forwarded-proto"] as string | undefined)
      ?.split(",")[0]
      ?.trim();

    const qIndex = req.originalUrl.indexOf("?");
    const query = qIndex === -1 ? "" : req.originalUrl.slice(qIndex);

    // Single-hop canonicalization: www to non-www and http to https.
    // Only for the known canonical domain, never echoing arbitrary
    // Host header values, so spoofed hosts cannot poison the redirect.
    // Other hosts (dev and preview domains, health checks) pass through.
    if (
      hostNoPort === `www.${CANONICAL_HOST}` ||
      (hostNoPort === CANONICAL_HOST && proto === "http")
    ) {
      return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
    }

    const pathname = req.path;

    // Old image URLs previously indexed by Google are permanently gone
    if (pathname.startsWith("/dacegug/") || pathname === "/dacegug") {
      return send404(res, 410);
    }

    // Collapse duplicate slashes
    if (/\/{2,}/.test(pathname)) {
      return res.redirect(301, pathname.replace(/\/{2,}/g, "/") + query);
    }

    // Root: pick language by Accept-Language, x-default tree is /en/
    if (pathname === "/") {
      const accept = String(req.headers["accept-language"] || "");
      const primary = accept.split(",")[0]?.trim().toLowerCase() || "";
      return res.redirect(302, primary.startsWith("tr") ? "/tr/" : "/en/");
    }

    // 301 map for previously indexed URLs
    const mapped = findRedirect(pathname);
    if (mapped) return res.redirect(301, mapped + query);

    // Canonical page URLs end with a trailing slash
    if (
      !pathname.endsWith("/") &&
      !FILE_EXT_RE.test(pathname) &&
      !pathname.startsWith("/api")
    ) {
      return res.redirect(301, `${pathname}/${query}`);
    }

    next();
  });

  app.use(express.static(distPath, { redirect: false }));

  // Real 404 with proper status code for anything unknown
  app.use((_req: Request, res: Response) => {
    send404(res);
  });
}
