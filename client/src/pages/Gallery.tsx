
import { Layout } from "@/components/layout/Layout";
import { rooms } from "@/lib/constants";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

export default function Gallery() {
  // Collect all unique images
  const allImages = [
    ...rooms.flatMap(r => r.images),
    { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_17-576x1024.jpg.webp", alt: "Hotel General" },
    { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_13-683x1024.jpg.webp", alt: "Hotel Interior" },
    { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_21-576x1024.jpg.webp", alt: "Details" },
  ];
  const uniqueImages = Array.from(new Map(allImages.map(item => [item.url, item])).values());

  return (
    <Layout>
      <div className="bg-black text-white pt-40 pb-24 text-center relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">Portfolyo</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Galeri</h1>
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
                      alt={img.alt} 
                      className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <span className="text-white font-serif italic text-lg border-b border-gold-500 pb-1">Görüntüle</span>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl w-full bg-transparent border-none p-0 shadow-none text-white">
                   <div className="relative flex flex-col items-center">
                     <img src={img.url} alt={img.alt} className="w-auto max-h-[85vh] object-contain shadow-2xl border border-white/10" />
                     <p className="text-center mt-4 text-white/60 font-serif text-lg italic tracking-wide">{img.alt}</p>
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
