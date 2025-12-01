import { hotelInfo } from "@/lib/constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function CustomMap() {
  const { t } = useTranslation();
  
  // We'll use a custom styled Google Map embed
  // Using a dark mode style via parameters
  return (
    <div className="relative w-full h-[600px] bg-black border-y border-white/10 overflow-hidden group">
      {/* Overlay to ensure map matches theme until interaction */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-10 mix-blend-overlay"></div>
      
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.766668638832!2d28.975424876685497!3d41.00823767135048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be92011c27%3A0x236e6f6f37444fae!2sSultanahmet%2C%20Fatih%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1708540000000!5m2!1sen!2str&maptype=satellite" 
        width="100%" 
        height="100%" 
        style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Emerald Mansion Location"
        className="opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0"
      ></iframe>

      {/* Location Card Overlay */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute top-12 right-12 max-w-xs bg-black/90 backdrop-blur-md border border-white/10 p-8 z-20 hidden md:block"
      >
        <h3 className="font-serif text-2xl text-white mb-2">Emerald Mansion</h3>
        <p className="text-gold-500 text-xs uppercase tracking-widest mb-6">Sultanahmet, Istanbul</p>
        <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
          {hotelInfo.address}
        </p>
        <a 
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(hotelInfo.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs uppercase tracking-widest text-white hover:text-gold-500 transition-colors border-b border-white/20 pb-1 hover:border-gold-500"
        >
          {t('home.getDirections') || "Yol Tarifi Al"}
        </a>
      </motion.div>
    </div>
  );
}