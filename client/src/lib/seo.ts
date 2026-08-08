// Central SEO route and metadata registry.
// Single source of truth for URLs, titles, descriptions, canonical and hreflang
// used by: client head manager, build-time prerender, server redirects and sitemap.
// IMPORTANT: keep this module dependency-free (no vite aliases, no asset imports)
// because it is imported by script/build.ts and server code as well.

export type Lang = "en" | "tr";

export const SITE_ORIGIN = "https://emeraldmansion.com";
export const OG_IMAGE_URL = `${SITE_ORIGIN}/opengraph.jpg`;

export const ROOM_SLUGS = [
  "superior-king",
  "junior-suite-king",
  "junior-suite-twin",
  "comfort-single",
  "comfort-double",
  "family-suite",
] as const;

export type RoomSlug = (typeof ROOM_SLUGS)[number];

export interface PageDef {
  key: string;
  /** Canonical path per language, always with trailing slash */
  paths: Record<Lang, string>;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  /** Included in sitemap and indexable (default true) */
  indexable?: boolean;
}

const roomTitles: Record<RoomSlug, Record<Lang, string>> = {
  "superior-king": {
    en: "Superior King Room in Sultanahmet | Emerald Mansion",
    tr: "Superior King Oda | Sultanahmet Otel | Emerald Mansion",
  },
  "junior-suite-king": {
    en: "Junior Suite King in Sultanahmet | Emerald Mansion",
    tr: "Junior Suite King | Sultanahmet Otel | Emerald Mansion",
  },
  "junior-suite-twin": {
    en: "Junior Suite Twin in Sultanahmet | Emerald Mansion",
    tr: "Junior Suite Twin | Sultanahmet Otel | Emerald Mansion",
  },
  "comfort-single": {
    en: "Comfort Single Room in Sultanahmet | Emerald Mansion",
    tr: "Comfort Single Oda | Sultanahmet Otel | Emerald Mansion",
  },
  "comfort-double": {
    en: "Comfort Double Room in Sultanahmet | Emerald Mansion",
    tr: "Comfort Double Oda | Sultanahmet Otel | Emerald Mansion",
  },
  "family-suite": {
    en: "Family Suite in Sultanahmet Istanbul | Emerald Mansion",
    tr: "Family Suite | Sultanahmet İstanbul | Emerald Mansion",
  },
};

const roomDescriptions: Record<RoomSlug, Record<Lang, string>> = {
  "superior-king": {
    en: "Spacious Superior King room with a king size bed at Emerald Mansion in Sultanahmet. 20 m2 of comfort with a sitting area near Hagia Sophia and Blue Mosque.",
    tr: "Sultanahmet'teki Emerald Mansion'da king size yataklı 20 m2 Superior King oda. Oturma alanı, modern olanaklar ve tarihi yarımadada konforlu konaklama.",
  },
  "junior-suite-king": {
    en: "Junior Suite King at Emerald Mansion in Sultanahmet Istanbul. A 25 m2 suite with king bed, sofa and sitting area, steps from the Old City landmarks.",
    tr: "Sultanahmet'teki Emerald Mansion'da king yataklı 25 m2 Junior Suite. Oturma grubu ve geniş banyosuyla tarihi yarımadada ferah bir süit deneyimi.",
  },
  "junior-suite-twin": {
    en: "Junior Suite Twin at Emerald Mansion in Sultanahmet. Two single beds and a sofa bed in a 25 m2 suite for up to three guests in Istanbul's Old City.",
    tr: "Sultanahmet'teki Emerald Mansion'da iki ayrı yataklı 25 m2 Junior Suite Twin. Sofasıyla üç kişiye kadar konaklama ve tarihi yarımadada ferah konfor.",
  },
  "comfort-single": {
    en: "Comfort Single room at Emerald Mansion in Sultanahmet Istanbul. A cozy 15 m2 room for solo travelers within walking distance of Hagia Sophia.",
    tr: "Sultanahmet'teki Emerald Mansion'da tek kişilik 15 m2 Comfort Single oda. Yalnız seyahat edenler için Ayasofya'ya yürüme mesafesinde huzurlu konaklama.",
  },
  "comfort-double": {
    en: "Comfort Double room at Emerald Mansion in Sultanahmet. A 15 m2 double room for couples with high ceilings in the heart of Istanbul's Old City.",
    tr: "Sultanahmet'teki Emerald Mansion'da çift kişilik 15 m2 Comfort Double oda. Çiftler için yüksek tavanlı, tarihi dokuda şık ve konforlu bir konaklama.",
  },
  "family-suite": {
    en: "Family Suite with connected rooms at Emerald Mansion in Sultanahmet Istanbul. 35 m2 for up to four adults with a double bed and two sofa beds.",
    tr: "Sultanahmet'teki Emerald Mansion'da bağlantılı odalı 35 m2 Family Suite. Aileler için çift kişilik yatak ve iki sofa ile ev konforunda konaklama.",
  },
};

export const pages: PageDef[] = [
  {
    key: "home",
    paths: { en: "/en/", tr: "/tr/" },
    title: {
      en: "Sultanahmet Hotel in Istanbul | Emerald Mansion Boutique Hotel",
      tr: "Sultanahmet Otel | İstanbul Butik Otel | Emerald Mansion",
    },
    description: {
      en: "Stay at Emerald Mansion, a boutique hotel in the heart of Sultanahmet, Istanbul. Walk to Hagia Sophia, Blue Mosque, Grand Bazaar and the historic Old City.",
      tr: "Sultanahmet'in kalbinde yer alan Emerald Mansion'da konaklayın. Ayasofya, Sultanahmet Camii, Kapalıçarşı ve İstanbul'un tarihi merkezine yürüme mesafesinde butik otel.",
    },
  },
  {
    key: "rooms",
    paths: { en: "/en/rooms/", tr: "/tr/odalar/" },
    title: {
      en: "Rooms & Suites in Sultanahmet | Emerald Mansion Hotel",
      tr: "Odalar ve Süitler | Sultanahmet Otel | Emerald Mansion",
    },
    description: {
      en: "Discover rooms and suites at Emerald Mansion, a boutique hotel in Sultanahmet Istanbul near Hagia Sophia, Blue Mosque and Grand Bazaar.",
      tr: "Emerald Mansion'ın Sultanahmet'teki oda ve süitlerini keşfedin. Ayasofya ve Sultanahmet Camii'ne yürüme mesafesinde butik otel konforu ve modern olanaklar.",
    },
  },
  ...ROOM_SLUGS.map((slug) => ({
    key: `room:${slug}`,
    paths: {
      en: `/en/rooms/${slug}/`,
      tr: `/tr/odalar/${slug}/`,
    } as Record<Lang, string>,
    title: roomTitles[slug],
    description: roomDescriptions[slug],
  })),
  {
    key: "about",
    paths: { en: "/en/about/", tr: "/tr/hakkimizda/" },
    title: {
      en: "About Emerald Mansion | Boutique Hotel in Sultanahmet",
      tr: "Hakkımızda | Sultanahmet Butik Otel | Emerald Mansion",
    },
    description: {
      en: "Learn the story of Emerald Mansion, a restored boutique hotel with 16 rooms in Sultanahmet, Istanbul, blending Ottoman heritage with modern luxury.",
      tr: "Sultanahmet'in tarihi dokusunda restore edilen Emerald Mansion'ın hikayesi. 16 özel odasıyla Osmanlı mirasını modern lüksle buluşturan butik otel.",
    },
  },
  {
    key: "guide",
    paths: { en: "/en/istanbul-guide/", tr: "/tr/istanbul-rehberi/" },
    title: {
      en: "Istanbul Guide | Sultanahmet Attractions | Emerald Mansion",
      tr: "İstanbul Rehberi | Sultanahmet Gezilecek Yerler | Emerald Mansion",
    },
    description: {
      en: "Discover Hagia Sophia, Blue Mosque, Basilica Cistern, Grand Bazaar and more, all within easy reach of Emerald Mansion in Sultanahmet, Istanbul.",
      tr: "Ayasofya, Sultanahmet Camii, Yerebatan Sarnıcı ve Kapalıçarşı gibi tarihi yerleri keşfedin. Emerald Mansion'dan yürüme mesafesinde İstanbul rehberi.",
    },
  },
  {
    key: "gallery",
    paths: { en: "/en/gallery/", tr: "/tr/galeri/" },
    title: {
      en: "Emerald Mansion Hotel Gallery | Sultanahmet Istanbul",
      tr: "Galeri | Emerald Mansion Otel | Sultanahmet İstanbul",
    },
    description: {
      en: "Explore photos of Emerald Mansion in Sultanahmet, Istanbul. Rooms, suites and interiors of our boutique hotel in the heart of the historic Old City.",
      tr: "Sultanahmet'teki Emerald Mansion'ın fotoğraflarını inceleyin. Butik otelimizin odaları, süitleri ve tarihi yarımadadaki iç mekanları.",
    },
  },
  {
    key: "contact",
    paths: { en: "/en/contact/", tr: "/tr/iletisim/" },
    title: {
      en: "Contact Emerald Mansion Hotel | Sultanahmet Istanbul",
      tr: "İletişim | Emerald Mansion Otel | Sultanahmet İstanbul",
    },
    description: {
      en: "Contact Emerald Mansion in Sultanahmet, Istanbul. Reach us by phone, email or WhatsApp for reservations, directions and special requests.",
      tr: "Sultanahmet'teki Emerald Mansion ile iletişime geçin. Rezervasyon, yol tarifi ve özel istekleriniz için telefon, e-posta veya WhatsApp ile ulaşın.",
    },
  },
  {
    key: "privacy",
    paths: { en: "/en/privacy-policy/", tr: "/tr/gizlilik-politikasi/" },
    title: {
      en: "Privacy Policy | Emerald Mansion Hotel Istanbul",
      tr: "Gizlilik Politikası | Emerald Mansion Otel İstanbul",
    },
    description: {
      en: "Read the privacy policy of Emerald Mansion in Sultanahmet, Istanbul, covering how we collect, use and protect your personal information.",
      tr: "Emerald Mansion gizlilik politikası. Kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu bu sayfada bulabilirsiniz.",
    },
  },
  {
    key: "terms",
    paths: { en: "/en/terms-of-service/", tr: "/tr/hizmet-kosullari/" },
    title: {
      en: "Terms of Service | Emerald Mansion Hotel Istanbul",
      tr: "Hizmet Koşulları | Emerald Mansion Otel İstanbul",
    },
    description: {
      en: "Review the terms of service for Emerald Mansion in Sultanahmet, Istanbul, including reservation rules, payment terms and hotel policies.",
      tr: "Emerald Mansion hizmet koşulları. Rezervasyon kuralları, ödeme koşulları ve otel politikaları hakkında bilgi alın.",
    },
  },
];

export const notFoundMeta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "Page Not Found | Emerald Mansion",
    description: "The page you are looking for does not exist or may have been moved.",
  },
  tr: {
    title: "Sayfa Bulunamadı | Emerald Mansion",
    description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
  },
};

/** Normalize a pathname for lookups: ensure single leading slash and trailing slash */
export function normalizePath(pathname: string): string {
  let p = pathname.split("?")[0].split("#")[0];
  p = p.replace(/\/{2,}/g, "/");
  if (!p.startsWith("/")) p = "/" + p;
  if (!p.endsWith("/")) p = p + "/";
  return p;
}

/** Resolve which language a URL path belongs to. Defaults to en (x-default). */
export function langFromPath(pathname: string): Lang {
  const p = normalizePath(pathname);
  if (p === "/tr/" || p.startsWith("/tr/")) return "tr";
  if (p === "/en/" || p.startsWith("/en/")) return "en";
  return "en";
}

export interface ResolvedPage {
  page: PageDef;
  lang: Lang;
}

/** Find the page definition matching a URL path, if any */
export function findPageByPath(pathname: string): ResolvedPage | null {
  const p = normalizePath(pathname);
  for (const page of pages) {
    if (page.paths.en === p) return { page, lang: "en" };
    if (page.paths.tr === p) return { page, lang: "tr" };
  }
  return null;
}

export function getPagePath(key: string, lang: Lang): string {
  const page = pages.find((pg) => pg.key === key);
  if (!page) return lang === "tr" ? "/tr/" : "/en/";
  return page.paths[lang];
}

export function getRoomPath(slug: string, lang: Lang): string {
  return lang === "tr" ? `/tr/odalar/${slug}/` : `/en/rooms/${slug}/`;
}

/** Path of the same page in the other language. Falls back to language home. */
export function getAlternatePath(pathname: string, targetLang: Lang): string {
  const resolved = findPageByPath(pathname);
  if (resolved) return resolved.page.paths[targetLang];
  return targetLang === "tr" ? "/tr/" : "/en/";
}

export function absoluteUrl(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

export interface HeadMeta {
  lang: Lang;
  title: string;
  description: string;
  canonical: string;
  alternates: { hreflang: string; href: string }[];
  ogImage: string;
  noindex: boolean;
}

/** Build the full head metadata for a URL path */
export function getHeadMeta(pathname: string): HeadMeta {
  const resolved = findPageByPath(pathname);
  if (resolved) {
    const { page, lang } = resolved;
    return {
      lang,
      title: page.title[lang],
      description: page.description[lang],
      canonical: absoluteUrl(page.paths[lang]),
      alternates: [
        { hreflang: "en", href: absoluteUrl(page.paths.en) },
        { hreflang: "tr", href: absoluteUrl(page.paths.tr) },
        { hreflang: "x-default", href: absoluteUrl(page.paths.en) },
      ],
      ogImage: OG_IMAGE_URL,
      noindex: page.indexable === false,
    };
  }
  const lang = langFromPath(pathname);
  return {
    lang,
    title: notFoundMeta[lang].title,
    description: notFoundMeta[lang].description,
    canonical: "",
    alternates: [],
    ogImage: OG_IMAGE_URL,
    noindex: true,
  };
}

/** Serialize head metadata into HTML tags for build-time prerendering */
export function renderHeadTags(meta: HeadMeta): string {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const tags: string[] = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
  ];
  if (meta.noindex) {
    tags.push(`<meta name="robots" content="noindex, nofollow" />`);
  }
  if (meta.canonical) {
    tags.push(`<link rel="canonical" href="${meta.canonical}" />`);
  }
  for (const alt of meta.alternates) {
    tags.push(
      `<link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`,
    );
  }
  tags.push(
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:type" content="website" />`,
  );
  if (meta.canonical) {
    tags.push(`<meta property="og:url" content="${meta.canonical}" />`);
  }
  tags.push(
    `<meta property="og:image" content="${meta.ogImage}" />`,
    `<meta property="og:site_name" content="Emerald Mansion" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${meta.ogImage}" />`,
  );
  return tags.join("\n    ");
}

/**
 * 301 redirect map from previously indexed URLs to the new canonical URLs.
 * Keys are normalized (no trailing slash). Old TR slugged routes existed
 * at the root, so they map into the /tr/ tree.
 */
export const redirectMap: Record<string, string> = {
  "/odalar": "/tr/odalar/",
  "/hakkimizda": "/tr/hakkimizda/",
  "/gezilecek-yerler": "/tr/istanbul-rehberi/",
  "/galeri": "/tr/galeri/",
  "/iletisim": "/tr/iletisim/",
  "/gizlilik-politikasi": "/tr/gizlilik-politikasi/",
  "/hizmet-kosullari": "/tr/hizmet-kosullari/",
  // Old room slugs
  "/odalar/superior-king-bed": "/tr/odalar/superior-king/",
  "/odalar/junior-suite-king-bed": "/tr/odalar/junior-suite-king/",
  "/odalar/junior-suite-twin-bed": "/tr/odalar/junior-suite-twin/",
  "/odalar/family-suite-connected": "/tr/odalar/family-suite/",
  // Old room routes that already used the new short slugs
  ...Object.fromEntries(
    ROOM_SLUGS.map((slug) => [`/odalar/${slug}`, `/tr/odalar/${slug}/`]),
  ),
};

/** Lookup a redirect target for a raw pathname. Returns null when none. */
export function findRedirect(pathname: string): string | null {
  const p = normalizePath(pathname).replace(/\/$/, "") || "/";
  if (p === "/") return null;
  return redirectMap[p] ?? null;
}

/** All canonical indexable URLs for the sitemap */
export function sitemapPaths(): string[] {
  const out: string[] = [];
  for (const page of pages) {
    if (page.indexable === false) continue;
    out.push(page.paths.en, page.paths.tr);
  }
  return out;
}
