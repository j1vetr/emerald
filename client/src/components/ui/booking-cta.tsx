import { hotelInfo } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export function BookingCTA() {
  const { t } = useTranslation();

  return (
    <>
      {/* Desktop Left Sidebar Booking Button */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 items-center"
      >
        <a 
          href={hotelInfo.bookingUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center bg-black border border-l-0 border-white/20 py-6 px-2 hover:bg-gold-500 transition-all duration-300 rounded-r-sm shadow-2xl hover:pl-4"
        >
          <span className="writing-vertical-rl text-xs font-bold tracking-[0.3em] uppercase text-white group-hover:text-black rotate-180 transform">
            {t('nav.bookNowAction') || "REZERVASYON"}
          </span>
          <CalendarDays className="w-4 h-4 text-gold-500 group-hover:text-black mt-4" />
        </a>
      </motion.div>

      {/* Mobile Bottom Fixed Bar */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center justify-between p-4 px-6">
          <div className="flex flex-col">
             <span className="text-[10px] text-gold-500 uppercase tracking-widest">{t('rooms.bestRate') || "En İyi Fiyat Garantisi"}</span>
             <span className="text-sm text-white font-serif">Emerald Mansion</span>
          </div>
          
          <a 
            href={hotelInfo.bookingUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gold-500 text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            {t('nav.bookNowAction') || "REZERVASYON"}
          </a>
        </div>
        {/* Safe area for iPhone home indicator */}
        <div className="h-safe-bottom bg-black w-full"></div>
      </motion.div>
    </>
  );
}