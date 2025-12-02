import { useRoute, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { rooms, hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Check, Ruler, Users, Bed, ArrowRight, Calendar, Star, X, ChevronLeft, ChevronRight, Wifi, Wind, Wine, Lock, Tv, Sparkles, Coffee, Armchair, Shirt, Laptop, Waves } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import NotFound from "@/pages/not-found";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function RoomDetail() {
  const [match, params] = useRoute("/odalar/:slug");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  
  if (!match) return <NotFound />;
  
  const room = rooms.find(r => r.slug === params.slug);
  
  if (!room) return <NotFound />;

  const otherRooms = rooms.filter(r => r.id !== room.id).slice(0, 3);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const getAmenityIcon = (amenity: string) => {
    const lower = amenity.toLowerCase();
    if (lower.includes("wifi")) return <Wifi size={32} strokeWidth={1} />;
    if (lower.includes("klima") || lower.includes("air")) return <Wind size={32} strokeWidth={1} />;
    if (lower.includes("minibar")) return <Wine size={32} strokeWidth={1} />;
    if (lower.includes("kasa") || lower.includes("safe")) return <Lock size={32} strokeWidth={1} />;
    if (lower.includes("tv")) return <Tv size={32} strokeWidth={1} />;
    if (lower.includes("banyo") || lower.includes("kurutma") || lower.includes("hair") || lower.includes("toiletries")) return <Sparkles size={32} strokeWidth={1} />;
    if (lower.includes("kahve") || lower.includes("espresso") || lower.includes("coffee")) return <Coffee size={32} strokeWidth={1} />;
    if (lower.includes("oturma") || lower.includes("koltuk") || lower.includes("sitting")) return <Armchair size={32} strokeWidth={1} />;
    if (lower.includes("bornoz") || lower.includes("terlik") || lower.includes("robes")) return <Shirt size={32} strokeWidth={1} />;
    if (lower.includes("çalışma") || lower.includes("masa") || lower.includes("work")) return <Laptop size={32} strokeWidth={1} />;
    return <Star size={32} strokeWidth={1} />;
  };

  const displayAmenities = isEn ? room.amenitiesEn : room.amenities;
  const roomImages = room.images.map(img => img.url);

  return (
    <Layout>
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-50"
            >
              <X size={40} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-2 z-50"
            >
              <ChevronLeft size={48} />
            </button>

            <motion.div 
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={room.images[currentImageIndex].url} 
                alt={room.images[currentImageIndex].alt} 
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
                {currentImageIndex + 1} / {room.images.length}
              </div>
            </motion.div>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-2 z-50"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive Hero */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
           <motion.img 
             initial={{ scale: 1.2 }}
             animate={{ scale: 1 }}
             transition={{ duration: 2, ease: "easeOut" }}
             src={room.coverImage} 
             alt={isEn ? room.nameEn : room.name} 
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
               <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">{isEn ? room.nameEn : room.name}</h1>
               <div className="flex flex-wrap gap-8 text-white/80 font-light tracking-wider text-sm border-t border-white/10 pt-8">
                  <div className="flex flex-col gap-1">
                     <span className="text-xs text-white/40 uppercase">{t('rooms.size')}</span>
                     <span className="flex items-center gap-2"><Ruler size={14} className="text-gold-500"/> {room.size} m²</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-xs text-white/40 uppercase">{t('rooms.capacity')}</span>
                     <span className="flex items-center gap-2"><Users size={14} className="text-gold-500"/> Max {room.capacity.adults} {t('rooms.person')}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-xs text-white/40 uppercase">{t('rooms.bed')}</span>
                     <span className="flex items-center gap-2"><Bed size={14} className="text-gold-500"/> {isEn ? room.bedTypeEn : room.bedType}</span>
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
                    {t('nav.bookNowAction')}
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
                <h2 className="font-serif text-4xl text-white mb-8">{t('roomDetail.experience')}</h2>
                <p className="text-2xl font-serif text-gold-500/80 italic leading-relaxed mb-8">"{isEn ? room.shortDescriptionEn : room.shortDescription}"</p>
                <p className="text-white/60 font-light leading-loose">{isEn ? room.descriptionEn : room.description}</p>
                <p className="text-white/60 font-light leading-loose">
                  {isEn 
                    ? "High ceilings, handcrafted wooden details and luxurious fabrics... Designed for you to feel quality in every moment. The requirements of the modern world and the fascinating texture of history come together here."
                    : "Yüksek tavanlar, el işçiliği ahşap detaylar ve lüks kumaşlar... Her anınızda kaliteyi hissetmeniz için tasarlandı. Modern dünyanın gereklilikleri ile tarihin büyüleyici dokusu burada birleşiyor."}
                </p>
              </div>

              {/* Gallery */}
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                   <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">{t('roomDetail.gallery')}</h3>
                   <div className="h-[1px] flex-grow bg-white/10 ml-6"></div>
                </div>
                
                <Carousel className="w-full" opts={{ loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                  <CarouselContent>
                    {room.images.map((img, i) => (
                      <CarouselItem key={i} className="md:basis-2/3 pl-6">
                        <div 
                          className="aspect-[16/10] overflow-hidden relative border border-white/10 group cursor-zoom-in"
                          onClick={() => openLightbox(i)}
                        >
                          <img 
                            src={img.url} 
                            alt={img.alt} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                            <span className="text-white/80 text-xs uppercase tracking-widest bg-black/50 px-4 py-2 backdrop-blur-sm border border-white/20">{t('roomDetail.zoom')}</span>
                          </div>
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
                   <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">{t('rooms.amenities')}</h3>
                   <div className="h-[1px] flex-grow bg-white/10 ml-6"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {displayAmenities.map((item, i) => (
                    <div key={i} className="group relative bg-white/[0.02] border border-white/10 hover:border-gold-500/50 p-6 flex flex-col items-center justify-center gap-4 aspect-square transition-all duration-500 hover:bg-white/[0.04] overflow-hidden">
                      
                      {/* Background Glow Effect */}
                      <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                      <div className="relative z-10 text-gold-500/80 group-hover:text-gold-500 transition-colors duration-500 transform group-hover:scale-110 group-hover:-translate-y-1">
                         {getAmenityIcon(item)}
                      </div>
                      <span className="relative z-10 text-white/60 text-[10px] uppercase tracking-widest text-center font-light group-hover:text-white transition-colors duration-500">
                        {item}
                      </span>
                      
                      {/* Corner accents */}
                      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/0 group-hover:border-gold-500/40 transition-all duration-500 group-hover:w-4 group-hover:h-4"></div>
                      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/0 group-hover:border-gold-500/40 transition-all duration-500 group-hover:w-4 group-hover:h-4"></div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Sticky Reservation Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-emerald-950/30 border border-white/10 backdrop-blur-md p-8 md:p-10">
                  <h3 className="font-serif text-3xl text-white mb-2">{t('rooms.reservation')}</h3>
                  <p className="text-white/50 text-sm font-light mb-8">{t('rooms.bestRate')}</p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                       <span className="text-xs uppercase tracking-wider text-gold-500">{t('rooms.checkIn')}</span>
                       <span className="font-serif text-lg text-white">14:00</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                       <span className="text-xs uppercase tracking-wider text-gold-500">{t('rooms.checkOut')}</span>
                       <span className="font-serif text-lg text-white">12:00</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                       <span className="text-xs uppercase tracking-wider text-gold-500">{t('rooms.cancellation')}</span>
                       <span className="font-serif text-lg text-white text-right text-sm">{t('rooms.flexible')}</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full bg-gold-500 text-black hover:bg-white hover:text-black font-bold h-16 rounded-none text-sm uppercase tracking-widest transition-all duration-300"
                  >
                    <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                      {t('roomDetail.checkAvailability')}
                    </a>
                  </Button>
                </div>

                {/* Need Help */}
                <div className="text-center p-8 border border-white/5 bg-white/5">
                   <p className="text-white/50 text-sm mb-4">{t('rooms.needHelp')}</p>
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
             <h3 className="font-serif text-4xl text-white">{t('rooms.otherOptions')}</h3>
             <Link href="/odalar" className="text-xs uppercase tracking-widest text-white/50 hover:text-gold-500 border-b border-transparent hover:border-gold-500 transition-all pb-1 cursor-pointer">
               {t('rooms.allRooms')}
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherRooms.map((r) => (
              <Link key={r.id} href={`/odalar/${r.slug}`} className="group block cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden relative mb-6 border border-white/10">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                   <img src={r.coverImage} alt={isEn ? r.nameEn : r.name} className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <h4 className="font-serif text-2xl text-white mb-2 group-hover:text-gold-500 transition-colors">{isEn ? r.shortNameEn : r.shortName}</h4>
                <p className="text-xs uppercase tracking-widest text-white/40">
                   {r.size} m² • {r.capacity.adults} {t('rooms.person')}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}