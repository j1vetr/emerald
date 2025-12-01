
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Preloader } from "@/components/ui/preloader";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { StickyBookingBar } from "@/components/ui/sticky-booking-bar";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTopWrapper() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  // Only show preloader on initial load (root path) or full refresh
  // For mockup, we'll show it once per session or always on home
  const [location] = useLocation();
  const showPreloader = location === "/";

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans antialiased selection:bg-gold-500/30 cursor-none">
      <Preloader />
      <CustomCursor />
      <SmoothScroll />
      <ScrollToTopWrapper />
      <Header />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <WhatsAppButton />
      <StickyBookingBar />
      <Footer />
    </div>
  );
}
