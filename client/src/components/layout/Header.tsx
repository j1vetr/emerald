
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
    { href: "/galeri", label: "Galeri" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-emerald-950/90 backdrop-blur-md py-4 border-b border-white/5"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 block group cursor-pointer">
           <div className="flex items-center gap-3">
             <img 
               src="/assets/logo.svg" 
               alt="Emerald Mansion Logo" 
               className="h-10 md:h-12 w-auto brightness-0 invert transition-opacity duration-300" 
             />
             {/* Optional: Add Text Logo if image fails or for style 
             <span className={cn("font-serif text-xl text-white tracking-widest", isScrolled ? "opacity-100" : "opacity-0 lg:opacity-100")}>
               EMERALD
             </span>
             */}
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn(
                  "text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 relative group cursor-pointer",
                  location === link.href
                    ? "text-gold-400"
                    : "text-white/80 hover:text-white"
                )}>
                {link.label}
                <span className={cn(
                  "absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400 transition-opacity duration-300",
                  location === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )} />
            </Link>
          ))}
          
          <div className="pl-6 border-l border-white/20">
            <Button 
              asChild 
              className="bg-transparent border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-emerald-950 hover:border-gold-500 rounded-none px-6 py-5 text-xs uppercase tracking-widest transition-all duration-300"
            >
              <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                Rezervasyon
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 text-white p-2 hover:text-gold-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay - Full Screen Luxury */}
        <div
          className={cn(
            "fixed inset-0 bg-emerald-950 z-40 flex flex-col items-center justify-center transition-all duration-700 cubic-bezier(0.7, 0, 0.3, 1) lg:hidden",
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={cn(
                    "text-3xl md:text-4xl font-serif transition-all duration-300 cursor-pointer hover:text-gold-400 hover:italic",
                    location === link.href ? "text-gold-400 italic" : "text-white/90"
                  )}
                  style={{ transitionDelay: `${i * 50}ms` }}
                  >
                  {link.label}
              </Link>
            ))}
            
            <div className="w-12 h-[1px] bg-white/20 my-4"></div>
            
            <Button 
              asChild 
              size="lg"
              className="bg-gold-500 text-emerald-950 hover:bg-white hover:text-emerald-950 rounded-none px-10 py-6 text-lg font-serif"
            >
              <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                Rezervasyon Yap
              </a>
            </Button>
          </nav>
          
          <div className="absolute bottom-10 text-white/40 text-xs tracking-widest uppercase">
            Emerald Mansion Istanbul
          </div>
        </div>
      </div>
    </header>
  );
}
