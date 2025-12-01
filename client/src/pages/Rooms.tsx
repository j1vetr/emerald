
import { Layout } from "@/components/layout/Layout";
import { rooms } from "@/lib/constants";
import { Link } from "wouter";
import { Ruler, Users, Bed, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Rooms() {
  return (
    <Layout>
      <div className="bg-black text-white pt-40 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">Konaklama</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 text-white">Süitler & Odalar</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Tarihi dokunun modern konforla buluştuğu, her biri özenle tasarlanmış 
            16 özel yaşam alanı.
          </p>
        </div>
      </div>

      <div className="bg-black pb-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="space-y-32 pt-20">
            {rooms.map((room, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                key={room.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                  <Link href={`/odalar/${room.slug}`}>
                    <div className="aspect-[4/3] overflow-hidden border border-white/10 relative cursor-pointer">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={room.coverImage} 
                        alt={room.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" 
                      />
                      {/* Frame Effect */}
                      <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/10 z-20 pointer-events-none group-hover:border-gold-500/50 transition-colors duration-500"></div>
                    </div>
                  </Link>
                </div>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="mb-4 text-gold-500 text-xs font-bold uppercase tracking-[0.3em] opacity-0 lg:translate-x-[-20px] lg:group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">Emerald Collection</div>
                  
                  <Link href={`/odalar/${room.slug}`} className="cursor-pointer">
                     <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 group-hover:text-gold-200 transition-colors">{room.name}</h2>
                  </Link>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-8 mb-8 text-white/40 text-sm font-light tracking-wider">
                    <div className="flex items-center gap-2"><Ruler size={14}/> {room.size} m²</div>
                    <div className="flex items-center gap-2"><Users size={14}/> {room.capacity.adults} Kişi</div>
                    <div className="flex items-center gap-2"><Bed size={14}/> {room.bedType}</div>
                  </div>
                  
                  <p className="text-white/60 mb-10 leading-loose font-light max-w-md mx-auto lg:mx-0">
                    {room.description}
                  </p>
                  
                  <Link href={`/odalar/${room.slug}`}>
                    <Button variant="link" className="text-white hover:text-gold-500 p-0 h-auto text-sm uppercase tracking-[0.2em] group/btn">
                      Detayları İncele <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
