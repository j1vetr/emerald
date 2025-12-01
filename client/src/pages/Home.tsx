
import { Link } from "wouter";
import { ArrowRight, Wifi, Coffee, Car, Star, MapPin, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { rooms } from "@/lib/constants";
import { useRef } from "react";

// Reusable Reveal Component
const Reveal = ({ children, delay = 0, width = "100%" }: { children: React.ReactNode, delay?: number, width?: string }) => {
  return (
    <div style={{ width, position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const featuredRooms = rooms.slice(0, 3);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* Cinematic Hero Section */}
      <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-emerald-950">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-emerald-950/90 z-10" />
          <img 
            src="https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_17-576x1024.jpg.webp" 
            alt="Emerald Mansion Atmosphere" 
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>

        <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="space-y-8"
           >
             <p className="subtitle tracking-[0.3em] text-white/80 border-b border-white/20 pb-4 inline-block mx-auto">
               Sultanahmet, İstanbul
             </p>
             <h1 className="display-1 font-medium">
               Emerald <br /> <span className="italic font-light text-gold-400">Mansion</span>
             </h1>
             <div className="pt-8">
               <a 
                 href="#kesfet"
                 className="group inline-flex items-center gap-4 text-sm uppercase tracking-widest hover:text-gold-400 transition-colors cursor-pointer"
               >
                 <span className="w-12 h-[1px] bg-white group-hover:bg-gold-400 transition-colors"></span>
                 Keşfetmeye Başla
               </a>
             </div>
           </motion.div>
        </div>
      </div>

      {/* Editorial Intro */}
      <section id="kesfet" className="py-32 bg-stone-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
               <Reveal>
                 <div className="aspect-[3/4] w-full relative overflow-hidden">
                   <img 
                     src="https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_13-683x1024.jpg.webp" 
                     alt="Interior Detail"
                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                   />
                 </div>
               </Reveal>
            </div>
            <div className="lg:col-span-1 hidden lg:block"></div>
            <div className="lg:col-span-6 space-y-8">
              <Reveal delay={0.2}>
                <h2 className="display-2 text-emerald-950">
                  Tarihin <span className="italic text-gold-600">İçinde</span> <br/>
                  Modern Bir Rüya
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Emerald Mansion, sıradan bir otel değil; İstanbul'un kalbinde, tarihin dokusuna 
                  saygıyla işlenmiş bir yaşam alanı. Osmanlı ve Selçuklu mimarisinin zarif detayları, 
                  modern lüksün konforuyla buluşuyor. Burada her köşe, her detay size özel bir hikaye anlatıyor.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex gap-8 pt-4">
                   <div className="space-y-2">
                     <span className="block text-4xl font-serif text-gold-600">16</span>
                     <span className="text-xs uppercase tracking-widest text-emerald-950">Özel Oda</span>
                   </div>
                   <div className="space-y-2">
                     <span className="block text-4xl font-serif text-gold-600">∞</span>
                     <span className="text-xs uppercase tracking-widest text-emerald-950">Huzur</span>
                   </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-200/50 -z-0" />
      </section>

      {/* Immersive Rooms Showcase */}
      <section className="py-32 bg-emerald-950 text-white overflow-hidden">
        <div className="container mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <Reveal>
            <h2 className="display-2">Özel <span className="italic text-gold-400">Odalar</span></h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/odalar">
              <Button variant="link" className="text-white hover:text-gold-400 p-0 h-auto text-base uppercase tracking-widest group cursor-pointer">
                Tümünü İncele <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </Reveal>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featuredRooms.map((room, i) => (
              <Reveal key={room.id} delay={i * 0.1}>
                <Link href={`/odalar/${room.slug}`} className="group block cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden relative mb-6">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={room.coverImage} 
                      alt={room.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <div className="bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-serif text-white inline-block">
                        {room.size} m²
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 border-t border-white/10 pt-6 group-hover:border-gold-500/50 transition-colors">
                    <h3 className="font-serif text-2xl group-hover:text-gold-400 transition-colors">{room.shortName}</h3>
                    <p className="text-white/50 text-sm line-clamp-2 font-light">{room.shortDescription}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Minimalist */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
               <Reveal>
                 <span className="subtitle mb-4 block">Ayrıcalıklar</span>
                 <h2 className="display-2 text-emerald-950 mb-8">Sizin İçin <br/> Düşünüldü.</h2>
                 <p className="text-muted-foreground font-light text-lg max-w-md">
                   Konaklamanız boyunca ihtiyacınız olabilecek her detay, en ince ayrıntısına kadar planlandı.
                 </p>
                 <div className="mt-12">
                   <a href="https://emerald-mansion.rezervasyonal.com" target="_blank" className="inline-flex items-center justify-center h-16 px-10 bg-emerald-950 text-white hover:bg-gold-600 transition-colors duration-300 uppercase tracking-widest text-sm font-medium">
                     Rezervasyon Yap
                   </a>
                 </div>
               </Reveal>
            </div>
            <div className="grid grid-cols-1 gap-12">
              {[
                { title: "Premium Kahvaltı", desc: "Güne taze, yerel ve organik lezzetlerle başlayın.", icon: Coffee },
                { title: "Hızlı Wi-Fi & Workspace", desc: "Tarihi atmosferde, modern dünyanın hızından kopmayın.", icon: Wifi },
                { title: "VIP Transfer", desc: "Havalimanından otelimize konforlu ulaşım.", icon: Car },
                { title: "Concierge Hizmeti", desc: "Şehri bir lokal gibi keşfetmeniz için 7/24 destek.", icon: Star },
              ].map((item, i) => (
                <Reveal key={i} delay={0.2 + (i * 0.1)}>
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 flex items-center justify-center border border-emerald-900/10 rounded-full group-hover:border-gold-500 group-hover:text-gold-500 transition-all shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-emerald-950 mb-2">{item.title}</h4>
                      <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Full Width CTA */}
      <section className="relative py-40 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0">
           <img 
             src="https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_21-576x1024.jpg.webp" 
             alt="Atmosphere"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-emerald-950/80" />
         </div>
         <div className="relative z-10 text-center space-y-8 px-4">
           <Reveal>
             <h2 className="display-2 text-white">İstanbul Sizi Bekliyor</h2>
           </Reveal>
           <Reveal delay={0.2}>
             <p className="text-white/70 text-lg max-w-xl mx-auto font-light">
               Emerald Mansion ayrıcalığı ile unutulmaz bir konaklama deneyimi için yerinizi ayırtın.
             </p>
           </Reveal>
           <Reveal delay={0.4}>
             <Button 
               asChild
               className="bg-gold-500 text-emerald-950 hover:bg-white hover:text-emerald-950 h-16 px-12 rounded-none text-lg uppercase tracking-widest font-semibold transition-all duration-300"
             >
               <a href="https://emerald-mansion.rezervasyonal.com" target="_blank">Müsaitlik Kontrolü</a>
             </Button>
           </Reveal>
         </div>
      </section>

    </Layout>
  );
}
