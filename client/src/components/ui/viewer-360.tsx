import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Maximize2, RotateCw, RotateCcw } from "lucide-react";

interface Viewer360Props {
  images: string[];
  poster?: string;
}

export function Viewer360({ images, poster }: Viewer360Props) {
  const [isInteracting, setIsInteracting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // Auto rotation effect when not interacting
  useEffect(() => {
    if (isInteracting || !isLoaded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 100); // Speed of auto-rotation

    return () => clearInterval(interval);
  }, [isInteracting, isLoaded, images.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsInteracting(true);

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    // Calculate index based on mouse position
    // 0 to 100% width maps to 0 to images.length
    const percentage = x / width;
    const index = Math.floor(percentage * images.length);
    
    setCurrentIndex(Math.min(Math.max(0, index), images.length - 1));
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
  };

  return (
    <div className="relative group w-full aspect-[16/9] overflow-hidden bg-black border border-white/10 select-none cursor-ew-resize">
      <div 
        ref={containerRef}
        className="w-full h-full relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
      >
        {/* Images Stack */}
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="360 View"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-75 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            onLoad={() => index === 0 && setIsLoaded(true)}
            draggable={false}
          />
        ))}

        {/* Overlay UI */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none z-20">
          <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 flex items-center gap-3 text-white/70 text-[10px] uppercase tracking-widest">
            <RotateCw size={14} className="animate-spin-slow" />
            <span>{t('roomDetail.dragToRotate') || "Çevirmek için sürükleyin"}</span>
          </div>
        </div>
        
        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center z-30">
            <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
}