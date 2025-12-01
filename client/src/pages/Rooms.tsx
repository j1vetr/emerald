
import { Layout } from "@/components/layout/Layout";
import { rooms } from "@/lib/constants";
import { Link } from "wouter";
import { ArrowRight, Ruler, Users, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Rooms() {
  return (
    <Layout>
      <div className="bg-emerald-950 text-white pt-32 pb-16 md:pt-40 md:pb-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Odalar & Süitler</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
            Tarihi dokunun modern konforla buluştuğu, her biri özenle tasarlanmış 
            16 özel yaşam alanı.
          </p>
        </div>
      </div>

      <div className="bg-off-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:gap-20">
            {rooms.map((room, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                key={room.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white shadow-xl overflow-hidden group`}
              >
                <div className="lg:w-3/5 relative overflow-hidden h-[300px] lg:h-[500px]">
                  <img 
                    src={room.coverImage} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-2 text-gold-600 text-sm font-bold uppercase tracking-widest">Emerald Mansion</div>
                  <h2 className="font-serif text-3xl md:text-4xl text-emerald-950 mb-4">{room.name}</h2>
                  <div className="flex items-center gap-6 mb-6 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2"><Ruler size={16}/> {room.size} m²</div>
                    <div className="flex items-center gap-2"><Users size={16}/> {room.capacity.adults} Kişi</div>
                    <div className="flex items-center gap-2"><Bed size={16}/> {room.bedType}</div>
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {room.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-8 text-sm text-emerald-800/80">
                    {room.amenities.slice(0, 4).map((amenity, i) => (
                       <div key={i} className="flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                         {amenity}
                       </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4">
                    <Link href={`/odalar/${room.slug}`}>
                      <Button className="bg-emerald-900 text-white hover:bg-emerald-800 rounded-none w-full md:w-auto px-8 h-12 text-base cursor-pointer">
                        Detayları İncele
                      </Button>
                    </Link>
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
