import { useEffect } from "react";
import { useLocation } from "wouter";

export const GA_MEASUREMENT_ID = "G-W9DZFSBWCD";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let gaInitialized = false;
let gaScriptRequested = false;

/**
 * Sets up the dataLayer stub immediately so page views can be queued, but
 * defers downloading gtag.js (~160 KB) until the page is interactive or
 * idle. Queued dataLayer entries are processed once the script loads, so
 * no page view is lost.
 */
function initGaStub() {
  if (gaInitialized || typeof window === "undefined") return;
  gaInitialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

  const loadScript = () => {
    if (gaScriptRequested) return;
    gaScriptRequested = true;
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s);
  };

  const events: (keyof WindowEventMap)[] = ["pointerdown", "touchstart", "keydown", "scroll"];
  const opts: AddEventListenerOptions = { once: true, passive: true };
  const onFirstInput = () => {
    events.forEach((ev) => window.removeEventListener(ev, onFirstInput));
    loadScript();
  };
  events.forEach((ev) => window.addEventListener(ev, onFirstInput, opts));

  const scheduleIdle = () => {
    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, o?: { timeout: number }) => void })
        .requestIdleCallback(loadScript, { timeout: 5000 });
    } else {
      setTimeout(loadScript, 4000);
    }
  };
  if (document.readyState === "complete") {
    scheduleIdle();
  } else {
    window.addEventListener("load", scheduleIdle, { once: true });
  }
}

/**
 * Sends a virtual page view for the current SPA route. GA's automatic page
 * view is disabled so hydration and client-side navigation use the same
 * tracking path. Events fired before gtag.js loads are queued in dataLayer
 * and flushed when the script arrives.
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
    initGaStub();
    trackPageView(location);
  }, [location]);

  return null;
}
