import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import i18n from "./lib/i18n";
import type { Lang } from "./lib/seo";

/**
 * Build-time prerender entry. Renders the app for a given URL and language
 * and returns the HTML string to be injected into the page template.
 */
export async function render(url: string, lang: Lang): Promise<string> {
  if (i18n.language !== lang) {
    await i18n.changeLanguage(lang);
  }
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );
}
