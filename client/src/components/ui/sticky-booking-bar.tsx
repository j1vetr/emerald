import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { hotelInfo } from "@/lib/constants";
import { Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-t border-white/10 py-4 px-6 md:hidden"
        >
           <div className="flex items-center justify-between gap-4">
             <div className="flex flex-col">
               <span className="text-gold-500 text-[10px] uppercase tracking-widest">{t('rooms.bestRate')}</span>
               <span className="text-white font-serif text-lg">{t('nav.bookNow')}</span>
             </div>
             <Button asChild className="bg-gold-500 text-black hover:bg-white hover:text-black rounded-none h-12 px-6 text-xs uppercase tracking-widest font-bold">
                <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  {t('nav.bookNow')}
                </a>
             </Button>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}