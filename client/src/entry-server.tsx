import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "node:stream";
import { Router } from "wouter";
import App from "./App";
import i18n from "./lib/i18n";
import type { Lang } from "./lib/seo";

/**
 * Build-time prerender entry. Renders the app for a given URL and language
 * and returns the HTML string to be injected into the page template.
 *
 * Uses renderToPipeableStream with onAllReady so React.lazy route chunks
 * are fully resolved before the HTML is captured. This keeps route level
 * code splitting compatible with prerendering.
 */
export async function render(url: string, lang: Lang): Promise<string> {
  if (i18n.language !== lang) {
    await i18n.changeLanguage(lang);
  }
  return new Promise<string>((resolve, reject) => {
    const stream = renderToPipeableStream(
      <Router ssrPath={url}>
        <App />
      </Router>,
      {
        onAllReady() {
          const sink = new PassThrough();
          let html = "";
          sink.on("data", (chunk) => {
            html += chunk.toString();
          });
          sink.on("end", () => resolve(html));
          stream.pipe(sink);
        },
        onError(error) {
          reject(error);
        },
      },
    );
  });
}
