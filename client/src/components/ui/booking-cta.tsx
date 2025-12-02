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
          className="relative group flex flex-col items-center bg-gradient-to-b from-black/95 to-emerald-950/95 border border-l-0 border-white/10 py-8 px-4 hover:px-5 transition-all duration-300 rounded-r-lg shadow-2xl backdrop-blur-md gap-4 overflow-hidden"
        >
          {/* Animated background sheen */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 ease-in-out"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="p-2 rounded-full border border-gold-500/30 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-black text-gold-500 transition-all duration-300">
              <CalendarDays className="w-5 h-5" />
            </div>
            <span className="writing-vertical-rl text-[10px] font-bold tracking-[0.3em] uppercase text-white/80 group-hover:text-white transform rotate-180 border-t border-white/10 pt-4 group-hover:border-white/30 transition-colors">
              {t('nav.bookNowAction') || "REZERVASYON"}
            </span>
          </div>
        </a>
      </motion.div>

      {/* Mobile Bottom Fixed Bar */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.8)] pb-safe"
      >
        <div className="flex h-16">
          {/* Reservation Button (Left) */}
          <a 
            href={hotelInfo.bookingUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-black text-white hover:bg-zinc-900 transition-colors border-r border-white/10 group"
          >
            <CalendarDays className="w-6 h-6 text-gold-500 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">{t('nav.bookNowAction') || "REZERVASYON"}</span>
          </a>

          {/* WhatsApp Button (Right) */}
          <a 
            href={`https://wa.me/${hotelInfo.whatsapp}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-gold-500 text-black hover:bg-white transition-colors group"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-6 h-6 fill-current group-hover:scale-110 transition-transform"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest">WHATSAPP</span>
          </a>
        </div>
        {/* Safe area for iPhone home indicator */}
        <div className="h-safe-bottom bg-black w-full"></div>
      </motion.div>
    </>
  );
}