import { Layout } from "@/components/layout/Layout";
import { rooms } from "@/lib/constants";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getPagePath, type Lang } from "@/lib/seo";

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const lang: Lang = isEn ? 'en' : 'tr';
  // Collect all unique images
  const allImages = [
    ...rooms.flatMap(r => r.images),
    { url: "/assets/images/general/otel_genel_17.webp", alt: "Historic interior details of Emerald Mansion in Istanbul's Old City", altTr: "Tarihi yarımadadaki Emerald Mansion'ın iç mekan detayları", width: 576, height: 1024 },
    { url: "/assets/images/general/otel_genel_13.webp", alt: "Restored Ottoman era interior of Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'in restore edilmiş Osmanlı dönemi iç mekanı", width: 683, height: 1024 },
    { url: "/assets/images/general/otel_genel_21.webp", alt: "Warm lighting in the corridors of Emerald Mansion boutique hotel", altTr: "Emerald Mansion butik otelin koridorlarında sıcak aydınlatma", width: 576, height: 1024 },
  ];
  const uniqueImages = Array.from(new Map(allImages.map(item => [item.url, item])).values());

  return (
    <Layout>
      <div className="bg-black text-white pt-40 pb-24 text-center relative">
        <div className="absolute inset-0 bg-[url('/assets/textures/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">{t('gallery.portfolio')}</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">{t('gallery.title')}</h1>
          <div className="flex justify-center">
            <Breadcrumbs
              items={[
                { label: t('nav.home'), href: getPagePath('home', lang) },
                { label: t('nav.gallery') },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="bg-black py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {uniqueImages.map((img, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="break-inside-avoid overflow-hidden border border-white/10 cursor-pointer group relative"
                  >
                    <img 
                      src={img.url} 
                      alt={isEn ? img.alt : img.altTr} 
                      width={img.width}
                      height={img.height}
                      className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <span className="text-white font-serif italic text-lg border-b border-gold-500 pb-1">{t('gallery.view')}</span>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl w-full bg-transparent border-none p-0 shadow-none text-white">
                   <div className="relative flex flex-col items-center">
                     <img src={img.url} alt={isEn ? img.alt : img.altTr} className="w-auto max-h-[85vh] object-contain shadow-2xl border border-white/10" />
                     <p className="text-center mt-4 text-white/60 font-serif text-lg italic tracking-wide">{isEn ? img.alt : img.altTr}</p>
                   </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}