import { motion } from "framer-motion";
import { MapPin, Clock, Footprints } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

interface ConciergeCardProps {
  title: string;
  description: string;
  distance: string;
  time: string;
  image: string;
  delay?: number;
}

export function ConciergeCard({ title, description, distance, time, image, delay = 0 }: ConciergeCardProps) {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="group relative overflow-hidden border border-white/10 bg-zinc-900/50"
    >
      {/* Image Section */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
        />
        
        {/* Floating Info Badge */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
          <div className="bg-black/80 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2 border border-white/10">
            <Footprints size={12} className="text-gold-500" />
            <span className="text-[10px] text-white uppercase tracking-wider">{distance}</span>
          </div>
          <div className="bg-black/80 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2 border border-white/10">
            <Clock size={12} className="text-gold-500" />
            <span className="text-[10px] text-white uppercase tracking-wider">{time}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold-500 transition-colors">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed font-light mb-6 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
            Emerald Concierge
          </span>
          <span className="w-8 h-[1px] bg-white/20 group-hover:bg-gold-500 transition-colors"></span>
        </div>
      </div>
    </motion.div>
  );
}