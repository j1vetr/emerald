import { useEffect } from "react";
import { useLocation } from "wouter";

export const GA_MEASUREMENT_ID = "G-W9DZFSBWCD";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a virtual page view for the current SPA route.
 * The initial config in index.html disables GA's automatic page view so
 * hydration and client-side navigation use the same tracking path.
 */
function trackPageView(pathname: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pathname,
  });
}

export function Analytics() {
  const [location] = useLocation();

  useEffect(() => {
    trackPageView(location);
  }, [location]);

  return null;
}