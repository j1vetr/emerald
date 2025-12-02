import { Link } from "wouter";
import { ArrowRight, Wifi, Coffee, Car, Star, ChevronDown, Play } from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { rooms, hotelInfo } from "@/lib/constants";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const featuredRooms = rooms.slice(0, 3);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const isEn = i18n.language === 'en';

  return (
    <Layout>
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden bg-black flex items-center justify-center">
        {/* Background Video with Parallax */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
          
          <div className="absolute inset-0 overflow-hidden">
             <iframe 
               className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60"
               src="https://www.youtube.com/embed/K6hfpqiGyOg?autoplay=1&mute=1&controls=0&loop=1&playlist=K6hfpqiGyOg&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1"
               allow="autoplay; encrypted-media"
               title="Hero Video"
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
                  {t('home.heroSubtitle')}
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
               {t('home.heroDesc')}
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
          <span className="text-[10px] uppercase tracking-widest">{t('home.exploreRooms')}</span>
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
                   src="/assets/images/general/otel_genel_13.webp" 
                   alt="Interior Detail"
                   className="w-full h-full object-cover"
                 />
                 {/* Decorative Overlay Frame */}
                 <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-500/30 pointer-events-none"></div>
               </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-12">
              <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight">
                <RevealText text={t('home.welcomeTitle')} /> <br />
                <span className="text-gold-500 italic"><RevealText text={t('home.welcomeSubtitle')} /></span>
              </h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-white/60 text-lg font-light leading-relaxed border-l border-gold-500 pl-8"
              >
                {t('home.welcomeText1')}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white/60 font-light leading-relaxed"
              >
                {t('home.welcomeText2')}
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
                   <span className="text-xs uppercase tracking-widest text-white/50">{t('home.featuredRooms')}</span>
                 </div>
                 <div>
                   <span className="block text-3xl font-serif text-gold-500 mb-2">∞</span>
                   <span className="text-xs uppercase tracking-widest text-white/50">{t('home.experience')}</span>
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
             <span className="text-gold-500 text-xs uppercase tracking-[0.3em]">{t('nav.rooms')}</span>
             <h2 className="font-serif text-5xl md:text-6xl">{t('footer.roomsAndSuites')}</h2>
           </div>
           <Link href="/odalar">
             <Button variant="outline" className="hidden md:flex border-white/20 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 rounded-none px-8 py-6 text-xs uppercase tracking-widest transition-all">
               {t('home.viewAllRooms')}
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
                      alt={isEn ? room.nameEn : room.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-gold-500 text-xs uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{room.size} m²</span>
                      <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 group-hover:text-gold-200 transition-colors">{isEn ? room.shortNameEn : room.shortName}</h3>
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
                {t('home.viewAllRooms')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES - Minimal & Iconographic */}
      <section className="py-32 bg-emerald-950 relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-6 block">{t('home.experience')}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              {t('home.diningTitle')} & <span className="italic text-white/50">{t('home.conciergeTitle')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
                { title: t('home.diningTitle'), desc: t('home.diningDesc'), icon: Coffee },
                { title: "Wi-Fi", desc: isEn ? "High speed internet." : "Yüksek Hızda İnternet.", icon: Wifi },
                { title: t('home.transferTitle'), desc: t('home.transferDesc'), icon: Car },
                { title: t('home.conciergeTitle'), desc: t('home.conciergeDesc'), icon: Star },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="p-8 border border-white/5 bg-white/5 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-serif text-xl text-white mb-3">{item.title}</h4>
                  <p className="text-white/50 text-sm font-light">{item.desc}</p>
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
             {t('home.locationSubtitle')}
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
               <a href={hotelInfo.bookingUrl} target="_blank">
                 {t('nav.bookNowAction')}
               </a>
             </Button>
           </motion.div>
         </div>
      </section>
    </Layout>
  );
}