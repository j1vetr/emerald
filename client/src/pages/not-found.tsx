import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[80vh] w-full flex items-center justify-center bg-black relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-[12rem] leading-none text-white/5 font-bold select-none">
              404
            </h1>
            <div className="-mt-12 space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl text-white">
                Sayfa Bulunamadı
                <span className="block text-2xl text-gold-500 mt-2 italic">Page Not Found</span>
              </h2>
              <p className="text-white/60 font-light max-w-lg mx-auto leading-relaxed">
                Aradığınız sayfa mevcut değil veya taşınmış olabilir.
                <br />
                <span className="text-xs opacity-70">The page you are looking for does not exist or may have been moved.</span>
              </p>
              
              <div className="pt-8">
                <Link href="/">
                  <Button className="bg-gold-500 text-black hover:bg-white hover:text-black px-8 py-6 rounded-none text-xs uppercase tracking-widest font-bold transition-all duration-300 gap-2">
                    <ArrowLeft size={16} />
                    Anasayfaya Dön / Return Home
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
