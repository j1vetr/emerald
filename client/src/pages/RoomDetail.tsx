
import { useRoute, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { rooms, hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Check, Ruler, Users, Bed, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import NotFound from "@/pages/not-found";
import Autoplay from "embla-carousel-autoplay";

export default function RoomDetail() {
  const [match, params] = useRoute("/odalar/:slug");
  
  if (!match) return <NotFound />;
  
  const room = rooms.find(r => r.slug === params.slug);
  
  if (!room) return <NotFound />;

  const otherRooms = rooms.filter(r => r.id !== room.id).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px]">
        <img 
          src={room.coverImage} 
          alt={room.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white container px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">{room.name}</h1>
          <div className="flex items-center gap-4 md:gap-8 text-sm md:text-lg font-light tracking-wide">
             <span className="flex items-center gap-2"><Ruler size={18}/> {room.size} m²</span>
             <span className="flex items-center gap-2"><Users size={18}/> Max {room.capacity.adults} Kişi</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-serif text-3xl text-emerald-950 mb-6">Oda Hakkında</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {room.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Özel tasarımı, geniş yaşam alanı ve tarihi atmosferiyle bu oda, İstanbul seyahatinizi unutulmaz kılacak tüm detaylara sahiptir.
              </p>
            </div>

            {/* Amenities Grid */}
            <div>
              <h3 className="font-serif text-2xl text-emerald-950 mb-6">Özellikler & Olanaklar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-off-white rounded-sm border border-transparent hover:border-gold-200 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-gold-600">
                      <Check size={16} />
                    </div>
                    <span className="text-emerald-900">{item}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 p-3 bg-off-white rounded-sm">
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-gold-600">
                      <Bed size={16} />
                    </div>
                    <span className="text-emerald-900">{room.bedType}</span>
                </div>
              </div>
            </div>

            {/* Gallery Slider */}
            <div>
              <h3 className="font-serif text-2xl text-emerald-950 mb-6">Galeri</h3>
              <Carousel className="w-full" opts={{ loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                <CarouselContent>
                  {room.images.map((img, i) => (
                    <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                      <div className="aspect-[4/3] overflow-hidden rounded-sm">
                        <img src={img.url} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div className="bg-emerald-950 text-white p-8 rounded-sm shadow-xl">
                <div className="text-gold-400 text-sm uppercase tracking-widest mb-2">En İyi Fiyat Garantisi</div>
                <h3 className="font-serif text-3xl mb-6">Rezervasyon Yap</h3>
                <div className="space-y-4 mb-8 text-white/80 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Giriş:</span>
                    <span>14:00 sonrası</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Çıkış:</span>
                    <span>12:00 öncesi</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>İptal:</span>
                    <span>Esnek Koşullar</span>
                  </div>
                </div>
                <Button 
                  asChild 
                  className="w-full bg-gold-500 text-emerald-950 hover:bg-gold-400 font-bold h-12 rounded-none text-lg"
                >
                  <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                    Müsaitlik ve Fiyatlar
                  </a>
                </Button>
                <p className="text-xs text-white/40 text-center mt-4">Güvenli rezervasyon sistemi</p>
              </div>

              <div className="bg-off-white p-6 border border-gray-200 rounded-sm">
                <h4 className="font-serif text-lg mb-4 text-emerald-950">Oda Notları</h4>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Tüm odalarımızda sigara içilmemektedir.</li>
                  <li>Ek yatak imkanı bazı odalarda mevcuttur.</li>
                  <li>Evcil hayvan kabul edilmemektedir.</li>
                  <li>0-6 yaş çocuk ücretsizdir.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Rooms */}
      <div className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="font-serif text-3xl text-center mb-12 text-emerald-950">Diğer Odalarımızı İnceleyin</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherRooms.map((r) => (
              <Link key={r.id} href={`/odalar/${r.slug}`} className="group block bg-white shadow-sm hover:shadow-lg transition-all cursor-pointer">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={r.coverImage} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-serif text-xl mb-2 group-hover:text-gold-600 transition-colors">{r.shortName}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                      <ArrowRight size={12} /> Detayları Gör
                    </p>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
