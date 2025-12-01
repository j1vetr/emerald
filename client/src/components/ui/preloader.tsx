import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Border */}
            <motion.div
              initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 360, scale: 1 }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                opacity: { duration: 1 },
                scale: { duration: 1.5, ease: "easeOut" }
              }}
              className="w-48 h-48 rounded-full border-t-2 border-b-2 border-gold-500/30 absolute"
            />
            
            <motion.div
              initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -180, scale: 1 }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                opacity: { duration: 1, delay: 0.2 },
                scale: { duration: 1.5, ease: "easeOut" }
              }}
              className="w-40 h-40 rounded-full border-r-2 border-l-2 border-gold-500/50 absolute"
            />

            {/* Logo Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="relative z-10 text-center"
            >
               <img 
                 src="https://emeraldmansion.com/wp-content/uploads/2025/02/Emerald-Logo_3.svg" 
                 alt="Emerald Mansion" 
                 className="w-24 h-auto mx-auto mb-4 invert brightness-0 opacity-90"
               />
               <motion.div
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.5, delay: 1 }}
                 className="h-[1px] bg-gold-500 mx-auto mb-2"
               />
               <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1.2 }}
                 className="text-gold-500 text-[10px] uppercase tracking-[0.5em]"
               >
                 Loading
               </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}