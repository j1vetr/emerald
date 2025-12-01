
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <Layout>
      <div className="bg-black text-white pt-32 pb-12 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl text-gold-500 mb-12">Hizmet Koşulları</h1>
            
            <div className="space-y-8 text-white/70 font-light leading-relaxed">
              <p>Son Güncelleme: 1 Aralık 2025</p>
              
              <section>
                <h2 className="font-serif text-2xl text-white mb-4">1. Kabul Edilme</h2>
                <p>Emerald Mansion web sitesini kullanarak, bu hizmet koşullarını okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan edersiniz. Koşulları kabul etmiyorsanız, lütfen sitemizi kullanmayınız.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">2. Rezervasyon Kuralları</h2>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Rezervasyon yapmak için en az 18 yaşında olmalısınız.</li>
                  <li>Giriş saati 14:00, çıkış saati 12:00'dir.</li>
                  <li>Rezervasyon iptalleri, seçilen fiyat tarifesinin koşullarına tabidir.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">3. Ödeme</h2>
                <p>Tüm ödemeler, rezervasyon sırasında belirtilen para birimi üzerinden tahsil edilir. Geçerli kredi kartları ve diğer ödeme yöntemleri kabul edilir. Ekstra harcamalar çıkış sırasında tahsil edilir.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">4. Otel Kuralları</h2>
                <p>Misafirlerimizden, diğer misafirlerin huzurunu bozacak davranışlardan kaçınmaları beklenir. Otel içerisinde sigara içilmesi (belirlenen alanlar dışında) yasaktır. Evcil hayvan politikası için lütfen iletişime geçiniz.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">5. Sorumluluk Reddi</h2>
                <p>Emerald Mansion, web sitesindeki olası hatalar, kesintiler veya veri kayıplarından sorumlu tutulamaz. Hizmetler "olduğu gibi" sunulmaktadır.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">6. Değişiklikler</h2>
                <p>Hizmet koşullarını dilediğimiz zaman güncelleme hakkımız saklıdır. Değişiklikler web sitemizde yayınlandığı andan itibaren geçerli olur.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
