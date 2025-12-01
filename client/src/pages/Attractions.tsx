
import { Layout } from "@/components/layout/Layout";
import { attractions } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Attractions() {
  return (
    <Layout>
      <div className="bg-black text-white pt-40 pb-24 text-center relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">Rehber</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">İstanbul'u Keşfet</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            Otelimize yürüme mesafesinde olan, binlerce yıllık tarihe tanıklık etmiş eşsiz mekanlar.
          </p>
        </div>
      </div>

      <div className="bg-black py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((place, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden mb-6 border border-white/10 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-white group-hover:text-gold-500 transition-colors">{place.name}</h3>
                  <div className="w-8 h-[1px] bg-gold-500"></div>
                  <p className="text-white/50 text-sm leading-relaxed font-light">
                    {place.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
