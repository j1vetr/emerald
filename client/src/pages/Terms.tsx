import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Terms() {
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
            <h1 className="font-serif text-4xl md:text-5xl text-gold-500 mb-12">{t('terms.title')}</h1>
            
            <div className="space-y-8 text-white/70 font-light leading-relaxed">
              <p>{t('terms.lastUpdated')}</p>
              
              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('terms.acceptance.title')}</h2>
                <p>{t('terms.acceptance.text')}</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('terms.reservation.title')}</h2>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  {(t('terms.reservation.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('terms.payment.title')}</h2>
                <p>{t('terms.payment.text')}</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('terms.rules.title')}</h2>
                <p>{t('terms.rules.text')}</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('terms.disclaimer.title')}</h2>
                <p>{t('terms.disclaimer.text')}</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">{t('terms.changes.title')}</h2>
                <p>{t('terms.changes.text')}</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}