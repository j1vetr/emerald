
import { Layout } from "@/components/layout/Layout";
import { rooms } from "@/lib/constants";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function Gallery() {
  // Collect all unique images from all rooms plus some generic ones
  const allImages = [
    ...rooms.flatMap(r => r.images),
    { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_17-576x1024.jpg.webp", alt: "Hotel General" },
    { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_13-683x1024.jpg.webp", alt: "Hotel Interior" },
    { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_21-576x1024.jpg.webp", alt: "Details" },
  ];

  // Deduplicate by URL
  const uniqueImages = Array.from(new Map(allImages.map(item => [item.url, item])).values());

  return (
    <Layout>
      <div className="bg-emerald-950 text-white pt-32 pb-16 md:pt-40 md:pb-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Galeri</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
            Emerald Mansion'ın büyüleyici atmosferinden kareler.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {uniqueImages.map((img, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <div className="break-inside-avoid overflow-hidden rounded-sm cursor-pointer group relative">
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full bg-transparent border-none p-0 shadow-none text-white">
                   <div className="relative">
                     <img src={img.url} alt={img.alt} className="w-full max-h-[85vh] object-contain rounded-sm shadow-2xl" />
                     <p className="text-center mt-4 text-white/80 font-serif text-lg">{img.alt}</p>
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
