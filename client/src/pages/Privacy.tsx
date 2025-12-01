
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <Layout>
      <div className="bg-black text-white pt-32 pb-12 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl text-gold-500 mb-12">Gizlilik Politikası</h1>
            
            <div className="space-y-8 text-white/70 font-light leading-relaxed">
              <p>Son Güncelleme: 1 Aralık 2025</p>
              
              <section>
                <h2 className="font-serif text-2xl text-white mb-4">1. Veri Toplama</h2>
                <p>Emerald Mansion olarak, web sitemizi ziyaret ettiğinizde veya rezervasyon yaptığınızda kişisel bilgilerinizi (isim, iletişim bilgileri, ödeme detayları vb.) toplayabiliriz. Bu bilgiler, hizmetlerimizi size en iyi şekilde sunmak için kullanılır.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">2. Bilgilerin Kullanımı</h2>
                <p>Toplanan bilgiler şu amaçlarla kullanılır:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Rezervasyon işlemlerini gerçekleştirmek ve yönetmek.</li>
                  <li>Size özel teklifler ve güncellemeler sunmak (izniniz dahilinde).</li>
                  <li>Müşteri hizmetleri desteği sağlamak.</li>
                  <li>Yasal yükümlülükleri yerine getirmek.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">3. Veri Güvenliği</h2>
                <p>Kişisel verilerinizin güvenliği bizim için en büyük önceliktir. Verilerinizi yetkisiz erişime, değiştirmeye veya ifşaya karşı korumak için endüstri standardı güvenlik önlemleri kullanıyoruz.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">4. Çerezler (Cookies)</h2>
                <p>Web sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için çerezler kullanır. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">5. Üçüncü Taraf Paylaşımı</h2>
                <p>Bilgileriniz, yasal zorunluluklar dışında veya hizmetin gerektirdiği durumlar (örneğin, ödeme işlemleri) haricinde üçüncü taraflarla paylaşılmaz.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-white mb-4">6. İletişim</h2>
                <p>Gizlilik politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz: info@emeraldmansion.com</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
