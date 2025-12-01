
import { Link } from "wouter";
import { ArrowRight, Wifi, Coffee, Car, Star, ChevronDown, Play, MapPin, ShieldCheck, Clock, Utensils } from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { rooms } from "@/lib/constants";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

import breakfastImg from '@assets/stock_images/luxury_hotel_breakfa_ff9bf9f5.jpg';
import transferImg from '@assets/stock_images/black_luxury_car_vip_8b65c7c6.jpg';
import conciergeImg from '@assets/stock_images/luxury_hotel_concier_082cb4bf.jpg';
import wifiImg from '@assets/stock_images/elegant_workspace_in_d5024015.jpg';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const RevealText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <span className={cn("overflow-hidden inline-block align-bottom", className)}>
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
};

export default function Home() {
  const featuredRooms = rooms.slice(0, 3);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        {/* Background Video with Parallax */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
          
          <div className="absolute inset-0 overflow-hidden">
            <iframe 
              className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 opacity-80 pointer-events-none"
              src="https://www.youtube.com/embed/eV6lTEY95yY?autoplay=1&mute=1&controls=0&loop=1&playlist=eV6lTEY95yY&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1"
              allow="autoplay; encrypted-media"
              title="Hero Background"
            />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
           <motion.div
             initial="hidden"
             animate="visible"
             variants={staggerContainer}
             className="space-y-8"
           >
             <motion.div variants={fadeInUp}>
                <span className="border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
                  The Historic Peninsula
                </span>
             </motion.div>
             
             <div className="overflow-hidden">
               <motion.h1 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                 className="display-huge text-white mix-blend-difference"
               >
                 EMERALD
               </motion.h1>
             </div>
             
             <div className="overflow-hidden -mt-4 md:-mt-8">
                <motion.h1 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                 className="font-serif text-4xl md:text-6xl lg:text-8xl italic text-gold-500"
               >
                 Mansion
               </motion.h1>
             </div>

             <motion.p 
               variants={fadeInUp}
               className="max-w-md mx-auto text-white/70 font-light leading-relaxed pt-8 border-t border-white/10 mt-8"
             >
               İstanbul'un tarihi kalbinde, Osmanlı zarafeti ve modern lüksün kusursuz uyumu.
             </motion.p>
           </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-widest">Keşfet</span>
          <ChevronDown className="animate-bounce w-4 h-4" />
        </motion.div>
      </section>

      {/* INTRO SECTION - Dark Luxury */}
      <section className="py-32 bg-black relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 className="aspect-[4/5] overflow-hidden relative border border-white/10"
               >
                 <img 
                   src="https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_13-683x1024.jpg.webp" 
                   alt="Interior Detail"
                   className="w-full h-full object-cover"
                 />
                 {/* Decorative Overlay Frame */}
                 <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-500/30 pointer-events-none"></div>
               </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-12">
              <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight">
                <RevealText text="Zamanın" /> <br />
                <span className="text-gold-500 italic"><RevealText text="Ötesinde" /></span> <br />
                <RevealText text="Bir Deneyim." />
              </h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-white/60 text-lg font-light leading-relaxed border-l border-gold-500 pl-8"
              >
                Sultanahmet'in gölgesinde, tarihin fısıltılarını dinleyin. Emerald Mansion, 
                sadece bir konaklama değil, İstanbul'un ruhuna yapılan bir yolculuktur. 
                Her detayında sanat, her köşesinde huzur bulacaksınız.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10"
              >
                 <div>
                   <span className="block text-3xl font-serif text-gold-500 mb-2">16</span>
                   <span className="text-xs uppercase tracking-widest text-white/50">Özel Süit</span>
                 </div>
                 <div>
                   <span className="block text-3xl font-serif text-gold-500 mb-2">∞</span>
                   <span className="text-xs uppercase tracking-widest text-white/50">Anı</span>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS SHOWCASE - Horizontal Scroll Style Grid */}
      <section className="py-32 bg-black text-white relative border-t border-white/10">
        <div className="container mx-auto px-6 mb-20 flex items-end justify-between">
           <div className="space-y-4">
             <span className="text-gold-500 text-xs uppercase tracking-[0.3em]">Konaklama</span>
             <h2 className="font-serif text-5xl md:text-6xl">Süitler & Odalar</h2>
           </div>
           <Link href="/odalar">
             <Button variant="outline" className="hidden md:flex border-white/20 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 rounded-none px-8 py-6 text-xs uppercase tracking-widest transition-all">
               Tümünü İncele
             </Button>
           </Link>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room, i) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <Link href={`/odalar/${room.slug}`}>
                  <div className="aspect-[3/4] overflow-hidden relative border border-white/5 bg-white/5">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700 z-10" />
                    <img 
                      src={room.coverImage} 
                      alt={room.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-gold-500 text-xs uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{room.size} m²</span>
                      <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 group-hover:text-gold-200 transition-colors">{room.shortName}</h3>
                      <div className="w-full h-[1px] bg-white/20 group-hover:bg-gold-500 transition-colors duration-500 origin-left scale-x-0 group-hover:scale-x-100"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 md:hidden text-center">
             <Link href="/odalar">
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 rounded-none px-8 py-6 text-xs uppercase tracking-widest transition-all">
                Tümünü İncele
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES - Redesigned: Expandable Luxury Cards */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-6 block">Hizmetler</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Konforunuz İçin <span className="italic text-white/50">Tasarlanmış</span> <br/> Ayrıcalıklar
            </h2>
          </div>

          <div className="hidden lg:flex h-[600px] gap-4">
            {[
              { 
                id: "01", 
                title: "Gurme Kahvaltı", 
                subtitle: "Güne Mükemmel Başlangıç",
                desc: "Taze, organik ve yerel lezzetlerle hazırlanan, şefimizin özel sunumuyla zengin serpme kahvaltı deneyimi.", 
                icon: Coffee,
                image: breakfastImg 
              },
              { 
                id: "02", 
                title: "Business Lounge", 
                subtitle: "Kesintisiz Bağlantı",
                desc: "Yüksek hızlı fiber internet, sessiz çalışma alanları ve modern ofis imkanlarıyla iş dünyasından kopmayın.", 
                icon: Wifi,
                image: wifiImg
              },
              { 
                id: "03", 
                title: "VIP Transfer", 
                subtitle: "Lüks Ulaşım",
                desc: "Havalimanı ve şehir içi transferlerinizde son model lüks araçlarımızla konforlu ve güvenli seyahat.", 
                icon: Car,
                image: transferImg
              },
              { 
                id: "04", 
                title: "Concierge", 
                subtitle: "Size Özel Asistan",
                desc: "Restoran rezervasyonları, etkinlik biletleri ve özel turlar... İstanbul'u bir yerli gibi keşfetmeniz için yanınızdayız.", 
                icon: Star,
                image: conciergeImg
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="relative flex-1 h-full overflow-hidden border border-white/10 group transition-all duration-700 ease-out hover:flex-[2.5]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                   <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-700 z-10" />
                   <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                   />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-3xl font-serif text-white/20 group-hover:text-gold-500 transition-colors duration-500">{item.id}</span>
                    <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-black transition-all duration-500">
                      <item.icon size={20} />
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <h3 className="font-serif text-2xl text-white mb-2 whitespace-nowrap group-hover:text-3xl transition-all duration-500 origin-left">{item.title}</h3>
                    <p className="text-gold-500 text-sm uppercase tracking-widest mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">{item.subtitle}</p>
                    <p className="text-white/80 font-light leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200 max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
                
                {/* Active Border */}
                <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/50 transition-colors duration-700 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Version (Vertical Stack) */}
          <div className="flex flex-col gap-4 lg:hidden">
             {[
              { 
                id: "01", 
                title: "Gurme Kahvaltı", 
                desc: "Organik ve yerel lezzetler.", 
                icon: Coffee,
                image: breakfastImg 
              },
              { 
                id: "02", 
                title: "Business Lounge", 
                desc: "Yüksek hızlı fiber internet.", 
                icon: Wifi,
                image: wifiImg
              },
              { 
                id: "03", 
                title: "VIP Transfer", 
                desc: "Lüks araçlarla ulaşım.", 
                icon: Car,
                image: transferImg
              },
              { 
                id: "04", 
                title: "Concierge", 
                desc: "Size özel şehir rehberliği.", 
                icon: Star,
                image: conciergeImg
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-64 overflow-hidden border border-white/10"
              >
                 <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                 <div className="absolute bottom-0 left-0 p-6 z-10">
                    <div className="flex items-center gap-3 mb-2">
                       <item.icon size={18} className="text-gold-500" />
                       <span className="text-gold-500 text-xs uppercase tracking-widest">Hizmetler {item.id}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                 </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA / FOOTER PRELUDE */}
      <section className="h-[80vh] relative flex items-center justify-center bg-black overflow-hidden">
         <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
           <iframe 
              className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              src="https://www.youtube.com/embed/K6hfpqiGyOg?autoplay=1&mute=1&controls=0&loop=1&playlist=K6hfpqiGyOg&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1"
              allow="autoplay; encrypted-media"
              title="Istanbul Video"
            />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/80" />
         
         <div className="relative z-10 text-center px-6 max-w-4xl">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="font-serif text-5xl md:text-7xl text-white mb-8"
           >
             İstanbul Sizi Bekliyor
           </motion.h2>
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.8 }}
           >
             <Button 
               asChild 
               className="bg-gold-500 text-black hover:bg-white hover:text-black h-20 px-12 rounded-none text-lg uppercase tracking-[0.2em] font-bold transition-all duration-500"
             >
               <a href="https://emerald-mansion.rezervasyonal.com" target="_blank">
                 Rezervasyon Yap
               </a>
             </Button>
           </motion.div>
         </div>
      </section>
    </Layout>
  );
}
