
import { Layout } from "@/components/layout/Layout";
import { rooms, hotelInfo } from "@/lib/constants";
import { Link } from "wouter";
import { Ruler, Users, Bed, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Rooms() {
  return (
    <Layout>
      {/* Header Section */}
      <div className="bg-black text-white pt-40 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">Konaklama</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 text-white">Süitler & Odalar</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Tarihi dokunun modern konforla buluştuğu, her biri özenle tasarlanmış 
            özel yaşam alanları.
          </p>
        </div>
      </div>

      <div className="bg-black pb-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="space-y-24 pt-20">
            {rooms.map((room, index) => (
              <motion.div 
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
                        alt={room.name} 
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
                        {room.name}
                      </h2>
                    </Link>
                    
                    {/* Icons */}
                    <div className="flex gap-6 text-white/50 text-xs uppercase tracking-wider border-b border-white/10 pb-6 mb-6">
                      <div className="flex items-center gap-2"><Users size={14}/> {room.capacity.adults} Kişi</div>
                      <div className="flex items-center gap-2"><Bed size={14}/> {room.bedType}</div>
                    </div>

                    <p className="text-white/70 font-light leading-relaxed mb-8 line-clamp-3">
                      {room.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={`/odalar/${room.slug}`} className="flex-1">
                        <Button className="w-full bg-transparent border border-white/30 text-white hover:bg-white hover:text-black rounded-none h-14 uppercase tracking-widest text-xs font-bold transition-all">
                          İncele
                        </Button>
                      </Link>
                      <Button asChild className="flex-1 bg-gold-500 text-black hover:bg-white hover:text-black rounded-none h-14 uppercase tracking-widest text-xs font-bold transition-all">
                        <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                          Rezervasyon <ArrowRight className="ml-2 w-4 h-4"/>
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
