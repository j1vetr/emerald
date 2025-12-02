import { Layout } from "@/components/layout/Layout";
import { attractions } from "@/lib/constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ConciergeCard } from "@/components/ui/concierge-card";

export default function Attractions() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <Layout>
      <div className="bg-black text-white pt-40 pb-24 text-center relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">{t('attractions.subtitle')}</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">{t('attractions.title')}</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            {t('attractions.desc')}
          </p>
        </div>
      </div>

      <div className="bg-black py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((place, i) => (
              <ConciergeCard
                key={i}
                title={isEn ? place.nameEn : place.name}
                description={isEn ? place.descriptionEn : place.description}
                image={place.image}
                distance={place.distance}
                time={isEn ? place.timeEn : place.time}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}