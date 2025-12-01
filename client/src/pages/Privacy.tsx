import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="bg-black text-white pt-32 pb-12 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl text-gold-500 mb-12">{t('privacy.title')}</h1>
            
            <div className="space-y-8 text-white/70 font-light leading-relaxed">
              <p>{t('privacy.lastUpdated')}</p>
              
              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('privacy.collection.title')}</h2>
                <p>{t('privacy.collection.text')}</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('privacy.usage.title')}</h2>
                <p>{t('privacy.usage.text')}</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  {(t('privacy.usage.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('privacy.security.title')}</h2>
                <p>{t('privacy.security.text')}</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('privacy.cookies.title')}</h2>
                <p>{t('privacy.cookies.text')}</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('privacy.sharing.title')}</h2>
                <p>{t('privacy.sharing.text')}</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('privacy.contact.title')}</h2>
                <p>{t('privacy.contact.text')}</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}