import { Layout } from "@/components/layout/Layout";
import { attractions } from "@/lib/constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ConciergeCard } from "@/components/ui/concierge-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getGuidePath, getPagePath, type GuideKey, type Lang } from "@/lib/seo";

// Attractions that have a dedicated guide page, keyed by their English name
const guideKeyByName: Record<string, GuideKey> = {
  "Hagia Sophia": "hagia-sophia",
  "Blue Mosque": "blue-mosque",
  "Grand Bazaar": "grand-bazaar",
  "Basilica Cistern": "basilica-cistern",
  "Topkapi Palace": "topkapi-palace",
  "Spice Bazaar": "spice-bazaar",
  "Galata Tower": "galata-tower",
  "Dolmabahce Palace": "dolmabahce-palace",
};

export default function Attractions() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const lang: Lang = isEn ? 'en' : 'tr';

  return (
    <Layout>
      <div className="bg-black text-white pt-40 pb-24 text-center relative">
        <div className="absolute inset-0 bg-[url('/assets/textures/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">{t('attractions.subtitle')}</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">{t('attractions.title')}</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            {t('attractions.desc')}
          </p>
          <div className="mt-8 flex justify-center">
            <Breadcrumbs
              items={[
                { label: t('nav.home'), href: getPagePath('home', lang) },
                { label: t('attractions.title') },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="bg-black py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((place, i) => {
              const guideKey = guideKeyByName[place.nameEn];
              return (
                <ConciergeCard
                  key={i}
                  title={isEn ? place.nameEn : place.name}
                  description={isEn ? place.descriptionEn : place.description}
                  image={place.image}
                  imageAlt={isEn ? `${place.nameEn} in Istanbul` : `İstanbul'da ${place.name}`}
                  distance={place.distance}
                  time={isEn ? place.timeEn : place.time}
                  delay={i * 0.1}
                  href={guideKey ? getGuidePath(guideKey, lang) : undefined}
                  linkLabel={guideKey ? (isEn ? "Read the Guide" : "Rehberi Okuyun") : undefined}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}