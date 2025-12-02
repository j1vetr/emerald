
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { BookingCTA } from "@/components/ui/booking-cta";
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
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans antialiased selection:bg-gold-500/30">
      <SmoothScroll />
      <ScrollToTopWrapper />
      <Header />
      {/* Add bottom padding for mobile to account for fixed booking bar */}
      <main className="flex-grow pt-0 pb-20 lg:pb-0">
        {children}
      </main>
      {/* Replaced StickyBookingBar with new BookingCTA */}
      <BookingCTA />
      <Footer />
    </div>
  );
}
