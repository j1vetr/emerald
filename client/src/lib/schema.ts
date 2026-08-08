// Structured data builders. All values come from the central hotelInfo and
// rooms data in constants.ts so schema output never diverges from the UI.
// Unverified fields (postal code, coordinates) are intentionally omitted.

import { hotelInfo, type Room } from "@/lib/constants";
import {
  SITE_ORIGIN,
  OG_IMAGE_URL,
  absoluteUrl,
  getRoomPath,
  getPagePath,
  findPageByPath,
  type Lang,
} from "@/lib/seo";

export const HOTEL_ID = `${SITE_ORIGIN}/#hotel`;

const hotelAmenities: Record<Lang, string[]> = {
  en: ["Free Wi-Fi", "Air Conditioning", "Concierge", "Airport Transfer"],
  tr: ["Ücretsiz Wi-Fi", "Klima", "Concierge", "Havalimanı Transferi"],
};

function amenityFeatures(names: string[]) {
  return names.map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  }));
}

/** Full Hotel entity. Used on the homepage only to avoid duplicate entities. */
export function buildHotelSchema(lang: Lang) {
  const home = findPageByPath(getPagePath("home", lang));
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": HOTEL_ID,
    name: hotelInfo.fullName,
    url: `${SITE_ORIGIN}/`,
    image: OG_IMAGE_URL,
    logo: absoluteUrl("/assets/logo.svg"),
    telephone: hotelInfo.phoneIntl,
    email: hotelInfo.email,
    description: home ? home.page.description[lang] : undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotelInfo.streetAddress,
      addressLocality: hotelInfo.addressLocality,
      addressRegion: hotelInfo.addressRegion,
      addressCountry: hotelInfo.addressCountry,
    },
    checkinTime: hotelInfo.checkIn,
    checkoutTime: hotelInfo.checkOut,
    numberOfRooms: hotelInfo.numberOfRooms,
    sameAs: hotelInfo.socialProfiles,
    hasMap: hotelInfo.mapsUrl,
    amenityFeature: amenityFeatures(hotelAmenities[lang]),
  };
}

/** HotelRoom entity for a room detail page, linked to the Hotel via @id. */
export function buildRoomSchema(room: Room, lang: Lang) {
  const path = getRoomPath(room.slug, lang);
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "@id": `${absoluteUrl(path)}#room`,
    url: absoluteUrl(path),
    name: lang === "en" ? room.nameEn : room.name,
    description: lang === "en" ? room.descriptionEn : room.description,
    image: absoluteUrl(room.coverImage),
    floorSize: {
      "@type": "QuantitativeValue",
      value: room.size,
      unitCode: "MTK",
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: room.capacity.adults,
    },
    bed: lang === "en" ? room.bedTypeEn : room.bedType,
    amenityFeature: amenityFeatures(
      lang === "en" ? room.amenitiesEn : room.amenities,
    ),
    containedInPlace: {
      "@type": "Hotel",
      "@id": HOTEL_ID,
      name: hotelInfo.fullName,
    },
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

/** FAQPage schema. Only pass items that are visibly rendered on the page. */
export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export interface Crumb {
  label: string;
  href?: string;
}

export function buildBreadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: absoluteUrl(c.href) } : {}),
    })),
  };
}
