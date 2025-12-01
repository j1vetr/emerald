
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
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
      <ScrollToTopWrapper />
      <Header />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
