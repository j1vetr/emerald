import { useEffect } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { getHeadMeta, langFromPath } from "@/lib/seo";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!content) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function replaceAlternates(alternates: { hreflang: string; href: string }[]) {
  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((el) => el.remove());
  for (const alt of alternates) {
    const el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", alt.hreflang);
    el.setAttribute("href", alt.href);
    document.head.appendChild(el);
  }
}

/**
 * Keeps document head metadata in sync with the current route during
 * client-side navigation. Initial HTML metadata is produced at build time
 * by the prerender step, this component takes over after hydration.
 */
export function SeoHead() {
  const [location] = useLocation();

  useEffect(() => {
    const meta = getHeadMeta(location);
    document.documentElement.lang = meta.lang;
    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("name", "robots", meta.noindex ? "noindex, nofollow" : "");
    upsertCanonical(meta.canonical);
    replaceAlternates(meta.alternates);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", meta.canonical);
    upsertMeta("property", "og:image", meta.ogImage);
    upsertMeta("property", "og:site_name", "Emerald Mansion");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", meta.ogImage);
  }, [location]);

  return null;
}

/** Derives the i18n language from the URL path on every navigation */
export function LanguageSync() {
  const [location] = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = langFromPath(location);
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [location, i18n]);

  return null;
}
