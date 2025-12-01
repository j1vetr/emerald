import { Layout } from "@/components/layout/Layout";
import { rooms, hotelInfo } from "@/lib/constants";
import { Link } from "wouter";
import { Ruler, Users, Bed, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Rooms() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <Layout>
      {/* Header Section */}
      <div className="bg-black text-white pt-40 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">{t('nav.rooms')}</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 text-white">{t('footer.roomsAndSuites')}</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-12">
            {isEn 
              ? "Specially designed living spaces where historical texture meets modern comfort." 
              : "Tarihi dokunun modern konforla buluştuğu, her biri özenle tasarlanmış özel yaşam alanları."}
          </p>

          {/* Quick Room Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => document.getElementById(room.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="group w-full flex items-center justify-between bg-white/5 hover:bg-gold-500 border border-white/10 hover:border-gold-500 px-6 py-4 transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm font-serif text-white group-hover:text-black transition-colors text-left">
                  {isEn ? room.shortNameEn : room.shortName}
                </span>
                <span className="text-[10px] uppercase tracking-wider bg-black/30 text-white/70 px-2 py-1 rounded group-hover:text-white group-hover:bg-black/20 transition-colors whitespace-nowrap">
                  {room.capacity.adults} {t('rooms.person')}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black pb-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="space-y-24 pt-20">
            {rooms.map((room, index) => (
              <motion.div 
                id={room.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                key={room.id} 
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 items-center mb-24 last:mb-0"
              >
                {/* Background/Image Area - Always on Left */}
                <div className="lg:col-span-7 relative h-[500px] overflow-hidden">
                   <Link href={`/odalar/${room.slug}`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10 cursor-pointer" />
                      <img 
                        src={room.coverImage} 
                        alt={isEn ? room.nameEn : room.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                   </Link>
                   
                   {/* Floating Price/Size Badge */}
                   <div className="absolute top-0 left-0 bg-gold-500 text-black px-6 py-4 z-20">
                      <span className="block text-xs font-bold uppercase tracking-widest">{room.size} m²</span>
                   </div>
                </div>

                {/* Content Card - Always on Right overlapping Left */}
                <div className="lg:col-span-5 relative z-20 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-10 md:p-12 flex flex-col gap-8 lg:-ml-24 lg:mt-12 lg:shadow-2xl shadow-black/50 min-h-[400px] justify-center">
                  <div>
                    <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Emerald Collection</span>
                    <Link href={`/odalar/${room.slug}`}>
                      <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 hover:text-gold-500 transition-colors cursor-pointer leading-tight">
                        {isEn ? room.nameEn : room.name}
                      </h2>
                    </Link>
                    
                    {/* Icons */}
                    <div className="flex gap-6 text-white/50 text-xs uppercase tracking-wider border-b border-white/10 pb-6 mb-6">
                      <div className="flex items-center gap-2"><Users size={14}/> {room.capacity.adults} {t('rooms.person')}</div>
                      <div className="flex items-center gap-2"><Bed size={14}/> {isEn ? room.bedTypeEn : room.bedType}</div>
                    </div>

                    <p className="text-white/70 font-light leading-relaxed mb-8 line-clamp-3">
                      {isEn ? room.descriptionEn : room.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={`/odalar/${room.slug}`} className="flex-1">
                        <Button className="w-full bg-transparent border border-white/30 text-white hover:bg-white hover:text-black rounded-none h-14 uppercase tracking-widest text-xs font-bold transition-all">
                          {t('rooms.details')}
                        </Button>
                      </Link>
                      <Button asChild className="flex-1 bg-gold-500 text-black hover:bg-white hover:text-black rounded-none h-14 uppercase tracking-widest text-xs font-bold transition-all">
                        <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                          {t('nav.bookNow')} <ArrowRight className="ml-2 w-4 h-4"/>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}