import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hotelInfo, rooms } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { WeatherWidget } from "@/components/ui/weather-widget";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { 
      href: "/odalar", 
      label: t('nav.rooms'),
      hasSubmenu: true,
      submenuItems: rooms.map(room => ({
        href: `/odalar/${room.slug}`,
        label: i18n.language === 'en' ? room.shortNameEn : room.shortName
      }))
    },
    { href: "/hakkimizda", label: t('nav.about') },
    { href: "/gezilecek-yerler", label: t('nav.attractions') },
    { href: "/galeri", label: t('nav.gallery') },
    { href: "/iletisim", label: t('nav.contact') },
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
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between pl-8">
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
               <div className="relative z-10 p-3 rounded-full bg-black border border-white/5">
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
              <div 
                key={link.href} 
                className="relative group"
                onMouseEnter={() => setHoveredMenu(link.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link href={link.href} className={cn(
                      "text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 relative cursor-pointer py-4 flex items-center gap-1",
                      location === link.href
                        ? "text-gold-500"
                        : "text-white/70 hover:text-white"
                    )}>
                    {link.label}
                    {link.hasSubmenu && <ChevronDown size={12} className="opacity-50" />}
                    <span className={cn(
                      "absolute bottom-2 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full",
                      location === link.href ? "w-full" : "w-0"
                    )} />
                </Link>

                {/* Submenu */}
                {link.hasSubmenu && (
                  <AnimatePresence>
                    {hoveredMenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2"
                      >
                        <div className="bg-black/95 backdrop-blur-xl border border-white/10 p-2 shadow-2xl rounded-sm">
                          {link.submenuItems?.map((subItem) => (
                            <Link key={subItem.href} href={subItem.href} className="block">
                              <div className="px-4 py-3 text-xs uppercase tracking-widest text-white/70 hover:text-gold-500 hover:bg-white/5 transition-colors cursor-pointer">
                                {subItem.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <div className="pl-6 border-l border-white/10 flex items-center gap-6">
              <WeatherWidget />
              
              <button 
                onClick={toggleLanguage}
                className="text-xs font-medium tracking-widest text-white/70 hover:text-gold-500 transition-colors uppercase flex items-center gap-2"
              >
                <Globe size={14} />
                {i18n.language === 'tr' ? 'EN' : 'TR'}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-6">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-bold tracking-widest text-white hover:text-gold-500 transition-colors uppercase"
            >
              {i18n.language === 'tr' ? 'EN' : 'TR'}
            </button>
            
            <button
              className="z-50 text-white p-2 hover:text-gold-500 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
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
            style={{ top: 0, minHeight: "100vh" }} 
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
                className="mt-8 flex flex-col items-center gap-6"
              >
                {/* Mobile Weather Widget - Styled to fit */}
                <div className="scale-125 origin-center">
                  <WeatherWidget />
                </div>
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