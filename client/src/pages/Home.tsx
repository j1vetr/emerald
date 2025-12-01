
import { Link } from "wouter";
import { ArrowRight, Wifi, UserCheck, Coffee, Car, Instagram } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { BookingWidget } from "@/components/home/BookingWidget";
import { rooms, attractions } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const featuredRooms = rooms.slice(0, 3);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_17-576x1024.jpg.webp" 
            alt="Emerald Mansion Interior" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-black/30" />
        </div>

        <div className="container relative z-10 text-center text-white px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-gold-400 uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-medium">Sultanahmet'in Kalbinde</h2>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 font-medium leading-tight">
              Tarih & Konforun <br />
              <span className="italic text-gold-100">Buluştuğu Yer</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 font-light mb-10 leading-relaxed">
              Osmanlı ve Selçuklu mimarisinin modern lüks ile harmanlandığı, 
              unutulmaz bir İstanbul deneyimi.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 px-4">
          <BookingWidget />
        </div>
      </section>

      {/* Spacing for the widget overlap */}
      <div className="h-24 md:h-16 bg-off-white"></div>

      {/* Why Us / Introduction */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-emerald-900 font-serif text-4xl md:text-5xl mb-6">
                Tarihi Dokuda <br/>
                <span className="italic text-gold-600">Modern Bir Masal</span>
              </h2>
              <div className="w-24 h-1 bg-gold-500 mb-8"></div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Sultanahmet'in büyüleyici atmosferinde, Emerald Mansion size sadece bir konaklama değil, 
                zamanda yolculuk vadediyor. Tarihi yarımadanın tam kalbinde, Ayasofya ve Sultanahmet Camii'ne 
                yürüme mesafesinde yer alan otelimiz, geçmişin ihtişamını günümüzün konforuyla buluşturuyor.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Her detayı özenle düşünülmüş odalarımız, Türk misafirperverliğini en üst düzeyde yaşatmak 
                için tasarlandı.
              </p>
              <Link href="/hakkimizda">
                <Button variant="outline" className="rounded-none border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white px-8 py-6 text-base transition-all duration-300 cursor-pointer">
                  Hikayemizi Keşfedin
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_13-683x1024.jpg.webp" 
                  alt="Hotel Interior" 
                  className="w-full h-[400px] object-cover rounded-sm shadow-xl mt-12"
                />
                <img 
                  src="https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_21-576x1024.jpg.webp" 
                  alt="Hotel Detail" 
                  className="w-full h-[400px] object-cover rounded-sm shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-pattern opacity-10 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-emerald-950 font-serif text-4xl md:text-5xl mb-4">Öne Çıkan Odalar</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Konforunuz için tasarlanmış, her biri kendine has karaktere sahip yaşam alanları.</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredRooms.map((room) => (
              <motion.div key={room.id} variants={item} className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <Link href={`/odalar/${room.slug}`} className="block h-full cursor-pointer">
                    <div className="relative h-[300px] overflow-hidden">
                      <img 
                        src={room.coverImage} 
                        alt={room.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-emerald-950/10 transition-colors"></div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-emerald-950 text-sm font-serif">
                        {room.size} m²
                      </div>
                    </div>
                    <div className="p-8 bg-white border border-t-0 border-gray-100">
                      <h3 className="font-serif text-2xl text-emerald-950 mb-2 group-hover:text-gold-600 transition-colors">{room.shortName}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-6">{room.shortDescription}</p>
                      <div className="flex items-center text-gold-600 font-medium uppercase tracking-wider text-xs group/link">
                        Detayları Gör <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link href="/odalar">
              <Button size="lg" variant="outline" className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white rounded-none px-10 cursor-pointer">
                Tüm Odaları İncele
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-emerald-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Coffee, title: "Kahvaltı", desc: "Geleneksel lezzetler" },
              { icon: Wifi, title: "Ücretsiz Wi-Fi", desc: "Yüksek hızda bağlantı" },
              { icon: UserCheck, title: "Concierge", desc: "7/24 Resepsiyon" },
              { icon: Car, title: "Transfer", desc: "Havalimanı servisi" },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-white/10 hover:border-gold-500/50 transition-colors duration-300 bg-white/5 hover:bg-white/10"
              >
                <service.icon className="w-10 h-10 mx-auto mb-4 text-gold-400" />
                <h3 className="font-serif text-xl mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-off-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center font-serif text-4xl text-emerald-950 mb-16">Misafir Deneyimleri</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
             {[
               { name: "Ahmet Y.", country: "Türkiye", text: "Tarihi yarımadada kalabileceğiniz en nezih otel. Çalışanların ilgisi ve odaların temizliği mükemmeldi." },
               { name: "Anna S.", country: "Almanya", text: "Wunderschönes Hotel! Die Lage ist perfekt, direkt neben der Hagia Sophia. Das Frühstück war sehr lecker." },
               { name: "Maria L.", country: "İspanya", text: "Una experiencia inolvidable. La decoración es exquisita y te hace sentir como en un palacio otomano." }
             ].map((review, i) => (
               <Card key={i} className="max-w-md bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                 <CardContent className="p-8">
                   <div className="flex text-gold-400 mb-4">★★★★★</div>
                   <p className="text-muted-foreground italic mb-6 leading-relaxed">"{review.text}"</p>
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-900 font-serif font-bold">
                       {review.name.charAt(0)}
                     </div>
                     <div>
                       <div className="font-medium text-emerald-950">{review.name}</div>
                       <div className="text-xs text-muted-foreground uppercase tracking-wide">{review.country}</div>
                     </div>
                   </div>
                 </CardContent>
               </Card>
             ))}
          </div>
        </div>
      </section>

      {/* Instagram Teaser */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Sosyal Medya</p>
          <h3 className="font-serif text-3xl text-emerald-950">@emeraldmansion</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-2">
           {/* Placeholders for IG feed */}
           {[1,2,3,4,5,6].map((n) => (
             <div key={n} className="aspect-square bg-gray-200 relative group overflow-hidden cursor-pointer">
               <img 
                  src={`https://source.unsplash.com/random/400x400?hotel,luxury&sig=${n}`} 
                  onError={(e) => e.currentTarget.src = "https://placehold.co/400x400/102520/D4AF37?text=Emerald+Mansion"}
                  alt="Instagram" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-emerald-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                 <Instagram className="w-6 h-6" />
               </div>
             </div>
           ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" className="rounded-none border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white">
            Instagram'da Takip Et
          </Button>
        </div>
      </section>
    </Layout>
  );
}
