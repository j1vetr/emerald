
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hotelInfo } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/odalar", label: "Odalar" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/gezilecek-yerler", label: "Gezilecek Yerler" },
    { href: "/galeri", label: "Galeri" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-primary/95 backdrop-blur-md py-3 shadow-lg border-white/10"
          : "bg-gradient-to-b from-black/60 to-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 block group">
            <img 
              src="/assets/logo.svg" 
              alt="Emerald Mansion Logo" 
              className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-2xl font-serif font-bold text-gold-400">Emerald Mansion</span>`;
              }}
            />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn(
                  "text-sm font-medium tracking-wider uppercase transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full cursor-pointer",
                  location === link.href
                    ? "text-gold-400 after:w-full"
                    : "text-white/90 hover:text-gold-400"
                )}>
                {link.label}
            </Link>
          ))}
          
          <Button 
            asChild 
            className="bg-gold-500 text-emerald-950 hover:bg-gold-400 font-semibold px-6 rounded-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
              Rezervasyon Yap
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-emerald-950/98 z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={cn(
                    "text-2xl font-serif transition-colors cursor-pointer",
                    location === link.href ? "text-gold-400" : "text-white hover:text-gold-400"
                  )}>
                  {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              size="lg"
              className="mt-8 bg-gold-500 text-emerald-950 hover:bg-gold-400 rounded-none w-full max-w-xs"
            >
              <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                Rezervasyon Yap
              </a>
            </Button>
            
            <div className="flex gap-6 mt-8 text-white/60">
               <a href={`tel:+902121234567`} className="hover:text-gold-400 transition-colors"><Phone size={24} /></a>
               <a href={`mailto:${hotelInfo.email}`} className="hover:text-gold-400 transition-colors"><Mail size={24} /></a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
