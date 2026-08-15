import { Layout } from "@/components/layout/Layout";
import { hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getPagePath, type Lang } from "@/lib/seo";

export default function About() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const lang: Lang = isEn ? 'en' : 'tr';

  return (
    <Layout>
       <div className="bg-black text-white pt-40 pb-24 text-center relative">
        <div className="absolute inset-0 bg-[url('/assets/textures/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
           <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">{t('about.story')}</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">{t('about.title')}</h1>
          <div className="flex justify-center">
            <Breadcrumbs
              items={[
                { label: t('nav.home'), href: getPagePath('home', lang) },
                { label: t('nav.about') },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="bg-black py-20 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative"
             >
                <div className="aspect-[4/5] border border-white/10 p-4">
                   <img 
                     src="/assets/images/general/otel_genel_17.webp" 
                     alt={isEn ? "Historic interior of Emerald Mansion, a restored boutique hotel in Sultanahmet" : "Sultanahmet'te restore edilmiş butik otel Emerald Mansion'ın tarihi iç mekanı"}
                     width={576}
                     height={1024}
                     loading="lazy"
                     className="w-full h-full object-cover grayscale-[30%]" 
                   />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-950/50 backdrop-blur-lg border border-gold-500/30 flex items-center justify-center">
                   <span className="font-serif text-4xl text-gold-500">2024</span>
                </div>
             </motion.div>

             <div className="space-y-10">
                <h2 className="font-serif text-4xl text-white leading-tight">
                   {t('about.heroTitle')} <br/> <span className="text-gold-500 italic">{t('about.heroSubtitle')}</span>
                </h2>
                
                <div className="space-y-6 text-white/60 font-light leading-loose text-lg">
                  <p>
                    {t('about.text1')}
                  </p>
                  <p>
                    {t('about.text2')}
                  </p>
                </div>

                <div className="pt-8">
                   <img src="/assets/logo.svg" alt="Signature" width={444} height={177} className="h-16 w-auto opacity-50 invert brightness-0" />
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="bg-emerald-950 py-20 border-y border-white/10">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
               <div className="py-4">
                  <span className="block font-serif text-5xl text-gold-500 mb-4">16</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/60">{t('about.suites')}</span>
               </div>
               <div className="py-4">
                  <span className="block font-serif text-5xl text-gold-500 mb-4">7/24</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/60">{t('about.concierge')}</span>
               </div>
               <div className="py-4">
                  <span className="block font-serif text-5xl text-gold-500 mb-4">∞</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/60">{t('about.satisfaction')}</span>
               </div>
            </div>
         </div>
      </div>
    </Layout>
  );
}