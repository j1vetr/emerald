import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getPagePath, type Lang } from "@/lib/seo";

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const lang: Lang = i18n.language === 'tr' ? 'tr' : 'en';

  return (
    <Layout>
      <div className="min-h-[80vh] w-full flex items-center justify-center bg-black relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('/assets/textures/stardust.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div aria-hidden="true" className="font-serif text-[12rem] leading-none text-white/5 font-bold select-none">
              404
            </div>
            <div className="-mt-12 space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl text-white">
                {t('notFound.title')}
              </h1>
              <p className="text-white/60 font-light max-w-lg mx-auto leading-relaxed">
                {t('notFound.text')}
              </p>

              <div className="pt-8">
                <Link href={getPagePath('home', lang)}>
                  <Button className="bg-gold-500 text-black hover:bg-white hover:text-black px-8 py-6 rounded-none text-xs uppercase tracking-widest font-bold transition-all duration-300 gap-2">
                    <ArrowLeft size={16} />
                    {t('notFound.backHome')}
                  </Button>
                </Link>
              </div>

              <div className="pt-6 text-sm text-white/40">
                <span className="block mb-3 text-xs uppercase tracking-widest">{t('notFound.explore')}</span>
                <div className="flex items-center justify-center gap-6">
                  <Link href={getPagePath('rooms', lang)} className="hover:text-gold-500 transition-colors underline underline-offset-4">
                    {t('nav.rooms')}
                  </Link>
                  <Link href={getPagePath('contact', lang)} className="hover:text-gold-500 transition-colors underline underline-offset-4">
                    {t('nav.contact')}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
