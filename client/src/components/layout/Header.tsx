
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hotelInfo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-700 border-b",
          isScrolled
            ? "bg-black/80 backdrop-blur-md py-4 border-white/10"
            : "bg-transparent py-8 border-transparent"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="relative z-50 group cursor-pointer flex items-center justify-center">
            <div className="relative flex items-center justify-center p-[2px] rounded-full overflow-hidden">
               {/* Rotating Border Effect - Conic Gradient */}
               <div className="absolute inset-0 z-0">
                   <motion.div 
                     className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2"
                     style={{
                       background: "conic-gradient(from 0deg, transparent 0%, transparent 70%, #D4AF37 100%)"
                     }}
                     animate={{ rotate: 360 }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   />
               </div>

               {/* Logo Container with Background */}
               <div className="relative z-10 p-3 rounded-full bg-black/40 backdrop-blur-md">
                 <img 
                   src="/assets/logo.svg" 
                   alt="Emerald Mansion" 
                   className="h-16 w-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                 />
               </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={cn(
                    "text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 relative group cursor-pointer py-2",
                    location === link.href
                      ? "text-gold-500"
                      : "text-white/70 hover:text-white"
                  )}>
                  {link.label}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full",
                    location === link.href ? "w-full" : "w-0"
                  )} />
              </Link>
            ))}
            
            <div className="pl-8 border-l border-white/10">
              <Button 
                asChild 
                variant="outline"
                className="bg-transparent border-gold-500/50 text-gold-400 hover:bg-gold-500 hover:text-black hover:border-gold-500 rounded-none px-8 py-6 text-xs uppercase tracking-widest transition-all duration-500"
              >
                <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Rezervasyon
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 text-white p-2 hover:text-gold-500 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center lg:hidden"
          >
             {/* Background texture or image could go here */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

             <nav className="flex flex-col items-center gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                >
                  <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={cn(
                        "text-4xl font-serif transition-all duration-300 cursor-pointer hover:text-gold-500 hover:italic block",
                        location === link.href ? "text-gold-500 italic" : "text-white"
                      )}>
                      {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gold-500 text-black hover:bg-white hover:text-black rounded-none px-12 py-8 text-lg font-serif"
                >
                  <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                    Rezervasyon Yap
                  </a>
                </Button>
              </motion.div>
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-12 text-white/30 text-xs tracking-[0.3em] uppercase"
            >
              Emerald Mansion Istanbul
            </motion.div>

             <button
              className="absolute top-8 right-6 z-50 text-white hover:text-gold-500 transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
