
import { useRoute, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { rooms, hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Check, Ruler, Users, Bed, ArrowRight, Calendar } from "lucide-react";
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
      {/* Editorial Hero */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={room.coverImage} 
            alt={room.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent" />
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24 z-10">
          <div className="container mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="max-w-3xl"
             >
               <span className="text-gold-400 text-sm uppercase tracking-widest mb-4 block font-medium">Emerald Collection</span>
               <h1 className="display-2 text-white mb-6">{room.name}</h1>
               <div className="flex flex-wrap gap-6 text-white/80 font-light tracking-wide text-sm md:text-base border-l-2 border-gold-500 pl-6">
                  <span className="flex items-center gap-2"><Ruler size={18} className="text-gold-400"/> {room.size} m²</span>
                  <span className="flex items-center gap-2"><Users size={18} className="text-gold-400"/> Max {room.capacity.adults} Kişi</span>
                  <span className="flex items-center gap-2"><Bed size={18} className="text-gold-400"/> {room.bedType}</span>
               </div>
             </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Description */}
              <div>
                <h2 className="font-serif text-4xl text-emerald-950 mb-8">Detaylar</h2>
                <div className="prose prose-lg text-muted-foreground font-light leading-relaxed">
                  <p className="text-xl text-emerald-900 mb-6 font-serif italic">{room.shortDescription}</p>
                  <p>{room.description}</p>
                  <p>
                    Özel tasarım mobilyalar, yüksek tavanlar ve tarihi dokuya saygı duyan restorasyon anlayışıyla, 
                    sadece bir odada değil, bir sanat eserinin içinde konaklayacaksınız.
                  </p>
                </div>
              </div>

              {/* Gallery Slider */}
              <div>
                <h3 className="subtitle text-emerald-950 mb-8 block">Görseller</h3>
                <Carousel className="w-full cursor-grab active:cursor-grabbing" opts={{ loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                  <CarouselContent>
                    {room.images.map((img, i) => (
                      <CarouselItem key={i} className="md:basis-2/3 pl-4">
                        <div className="aspect-[16/10] overflow-hidden relative group">
                          <img 
                            src={img.url} 
                            alt={img.alt} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex gap-2 mt-6 justify-end pr-4">
                    <CarouselPrevious className="static translate-y-0 rounded-none border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white" />
                    <CarouselNext className="static translate-y-0 rounded-none border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white" />
                  </div>
                </Carousel>
              </div>

              {/* Amenities */}
              <div className="bg-white p-10 border border-stone-200">
                <h3 className="font-serif text-3xl text-emerald-950 mb-10">Olanaklar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {room.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <span className="w-2 h-2 bg-stone-200 group-hover:bg-gold-500 transition-colors rotate-45"></span>
                      <span className="text-emerald-950/80 font-light group-hover:text-emerald-950 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="bg-emerald-950 text-white p-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Calendar size={120} />
                  </div>
                  
                  <h3 className="font-serif text-3xl mb-2 relative z-10">Bu Odayı Ayırtın</h3>
                  <p className="text-white/60 text-sm mb-8 font-light relative z-10">En iyi fiyat garantisi ile doğrudan rezervasyon yapın.</p>
                  
                  <div className="space-y-6 mb-10 relative z-10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                       <span className="text-sm uppercase tracking-wider text-gold-400">Giriş</span>
                       <span className="font-serif text-lg">14:00</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                       <span className="text-sm uppercase tracking-wider text-gold-400">Çıkış</span>
                       <span className="font-serif text-lg">12:00</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full bg-white text-emerald-950 hover:bg-gold-500 hover:text-white font-medium h-16 rounded-none text-lg uppercase tracking-widest transition-all duration-300 relative z-10"
                  >
                    <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                      Müsaitlik Ara
                    </a>
                  </Button>
                </div>
                
                <div className="mt-8 text-center">
                   <a href={`tel:+902121234567`} className="text-emerald-950/60 hover:text-emerald-950 text-sm border-b border-emerald-950/20 hover:border-emerald-950 transition-all pb-1">
                     Yardıma mı ihtiyacınız var? Bizi Arayın.
                   </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Suggestion Section */}
      <div className="bg-white py-32 border-t border-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
             <h3 className="font-serif text-4xl text-emerald-950">Diğer Seçenekler</h3>
             <Link href="/odalar" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-emerald-950 border-b border-transparent hover:border-emerald-950 transition-all pb-1 cursor-pointer">
               Tüm Odalar
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {otherRooms.map((r) => (
              <Link key={r.id} href={`/odalar/${r.slug}`} className="group block cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden relative mb-6">
                   <img src={r.coverImage} alt={r.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <h4 className="font-serif text-2xl text-emerald-950 mb-2 group-hover:text-gold-600 transition-colors">{r.shortName}</h4>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
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
