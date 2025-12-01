
import { useRoute, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { rooms, hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Check, Ruler, Users, Bed, ArrowRight, Calendar, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import NotFound from "@/pages/not-found";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

export default function RoomDetail() {
  const [match, params] = useRoute("/odalar/:slug");
  
  if (!match) return <NotFound />;
  
  const room = rooms.find(r => r.slug === params.slug);
  
  if (!room) return <NotFound />;

  const otherRooms = rooms.filter(r => r.id !== room.id).slice(0, 3);

  return (
    <Layout>
      {/* Immersive Hero */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
           <motion.img 
             initial={{ scale: 1.2 }}
             animate={{ scale: 1 }}
             transition={{ duration: 2, ease: "easeOut" }}
             src={room.coverImage} 
             alt={room.name} 
             className="w-full h-full object-cover opacity-80"
           />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24 z-20">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.5 }}
             >
               <div className="flex items-center gap-4 mb-6">
                 <span className="h-[1px] w-12 bg-gold-500"></span>
                 <span className="text-gold-500 text-sm uppercase tracking-[0.3em]">Emerald Collection</span>
               </div>
               <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">{room.name}</h1>
               <div className="flex flex-wrap gap-8 text-white/80 font-light tracking-wider text-sm border-t border-white/10 pt-8">
                  <div className="flex flex-col gap-1">
                     <span className="text-xs text-white/40 uppercase">Boyut</span>
                     <span className="flex items-center gap-2"><Ruler size={14} className="text-gold-500"/> {room.size} m²</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-xs text-white/40 uppercase">Kapasite</span>
                     <span className="flex items-center gap-2"><Users size={14} className="text-gold-500"/> Max {room.capacity.adults} Kişi</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-xs text-white/40 uppercase">Yatak</span>
                     <span className="flex items-center gap-2"><Bed size={14} className="text-gold-500"/> {room.bedType}</span>
                  </div>
               </div>
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="hidden lg:flex justify-end pb-8"
             >
                <Button 
                  asChild 
                  className="bg-gold-500 text-black hover:bg-white hover:text-black h-16 px-10 rounded-none text-sm uppercase tracking-widest font-bold"
                >
                  <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                    Rezervasyon Yap
                  </a>
                </Button>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="bg-black text-white py-24 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Description & Gallery */}
            <div className="lg:col-span-8 space-y-20">
              
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="font-serif text-4xl text-white mb-8">Deneyim</h2>
                <p className="text-2xl font-serif text-gold-500/80 italic leading-relaxed mb-8">"{room.shortDescription}"</p>
                <p className="text-white/60 font-light leading-loose">{room.description}</p>
                <p className="text-white/60 font-light leading-loose">
                  Yüksek tavanlar, el işçiliği ahşap detaylar ve lüks kumaşlar... 
                  Her anınızda kaliteyi hissetmeniz için tasarlandı. Modern dünyanın gereklilikleri ile 
                  tarihin büyüleyici dokusu burada birleşiyor.
                </p>
              </div>

              {/* Gallery */}
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                   <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">Görseller</h3>
                   <div className="h-[1px] flex-grow bg-white/10 ml-6"></div>
                </div>
                
                <Carousel className="w-full" opts={{ loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                  <CarouselContent>
                    {room.images.map((img, i) => (
                      <CarouselItem key={i} className="md:basis-2/3 pl-6">
                        <div className="aspect-[16/10] overflow-hidden relative border border-white/10 group">
                          <img 
                            src={img.url} 
                            alt={img.alt} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex gap-4 mt-8 justify-end">
                    <CarouselPrevious className="static translate-y-0 rounded-none border-white/20 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 w-12 h-12" />
                    <CarouselNext className="static translate-y-0 rounded-none border-white/20 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 w-12 h-12" />
                  </div>
                </Carousel>
              </div>

              {/* Amenities List - Redesigned */}
              <div className="space-y-8">
                 <div className="flex items-center justify-between">
                   <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">Olanaklar</h3>
                   <div className="h-[1px] flex-grow bg-white/10 ml-6"></div>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {room.amenities.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                        <div className="w-10 h-10 flex items-center justify-center bg-black border border-gold-500/30 text-gold-500 group-hover:scale-110 transition-transform">
                           <Star size={16} strokeWidth={1.5} />
                        </div>
                        <span className="text-white/80 font-light tracking-wide text-sm group-hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Sticky Reservation Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-emerald-950/30 border border-white/10 backdrop-blur-md p-8 md:p-10">
                  <h3 className="font-serif text-3xl text-white mb-2">Rezervasyon</h3>
                  <p className="text-white/50 text-sm font-light mb-8">Doğrudan rezervasyonlarda en iyi fiyat garantisi.</p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                       <span className="text-xs uppercase tracking-wider text-gold-500">Giriş</span>
                       <span className="font-serif text-lg text-white">14:00</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                       <span className="text-xs uppercase tracking-wider text-gold-500">Çıkış</span>
                       <span className="font-serif text-lg text-white">12:00</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                       <span className="text-xs uppercase tracking-wider text-gold-500">İptal</span>
                       <span className="font-serif text-lg text-white text-right text-sm">Esnek Koşullar</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full bg-gold-500 text-black hover:bg-white hover:text-black font-bold h-16 rounded-none text-sm uppercase tracking-widest transition-all duration-300"
                  >
                    <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                      Müsaitlik Kontrolü
                    </a>
                  </Button>
                </div>

                {/* Need Help */}
                <div className="text-center p-8 border border-white/5 bg-white/5">
                   <p className="text-white/50 text-sm mb-4">Özel istekleriniz mi var?</p>
                   <a href="tel:+902121234567" className="font-serif text-xl text-white hover:text-gold-500 transition-colors block mb-2">+90 212 123 45 67</a>
                   <a href={`mailto:${hotelInfo.email}`} className="text-sm text-white/40 hover:text-white transition-colors block">{hotelInfo.email}</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Next Rooms Suggestion */}
      <div className="bg-black py-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
             <h3 className="font-serif text-4xl text-white">Diğer Seçenekler</h3>
             <Link href="/odalar" className="text-xs uppercase tracking-widest text-white/50 hover:text-gold-500 border-b border-transparent hover:border-gold-500 transition-all pb-1 cursor-pointer">
               Tüm Odalar
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherRooms.map((r) => (
              <Link key={r.id} href={`/odalar/${r.slug}`} className="group block cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden relative mb-6 border border-white/10">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                   <img src={r.coverImage} alt={r.name} className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <h4 className="font-serif text-2xl text-white mb-2 group-hover:text-gold-500 transition-colors">{r.shortName}</h4>
                <p className="text-xs uppercase tracking-widest text-white/40">
                   {r.size} m² • {r.capacity.adults} Kişi
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
