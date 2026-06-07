import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useLocation } from "wouter";

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Force scroll to top when location changes
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    };
    
    // Execute immediately
    scrollToTop();
    
    // And also after a short delay to ensure DOM has updated
    const timer = setTimeout(scrollToTop, 50);
    return () => clearTimeout(timer);
  }, [location]);

  return null;
}