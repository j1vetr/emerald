
import { Layout } from "@/components/layout/Layout";
import { hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
       <div className="bg-emerald-950 text-white pt-32 pb-16 md:pt-40 md:pb-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Hakkımızda</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
            Emerald Mansion'ın hikayesi, İstanbul'un kalbinde bir rüyayla başladı.
          </p>
        </div>
      </div>

      <div className="py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p className="drop-cap first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-gold-500">
            İstanbul'un tarihi yarımadası Sultanahmet'te yer alan Emerald Mansion, 
            köklü geçmişi modern bir lüks anlayışıyla harmanlayan, şehrin en özel butik otellerinden biridir.
            Tarihi dokuya sadık kalınarak restore edilen binamız, Osmanlı ve Selçuklu mimarisinin 
            zarif izlerini taşımaktadır.
          </p>
          <p>
            2024 yılında kapılarını açan otelimiz, toplamda 16 özel odasıyla misafirlerine butik bir 
            konaklama deneyimi sunar. Her bir odamız, misafirlerimizin konforu düşünülerek 
            akıllı TV, klima, minibar, yüksek hızlı Wi-Fi gibi modern olanaklarla donatılmıştır. 
            Ancak teknolojinin ötesinde, size sunduğumuz asıl şey; tarihin içinde uyanmanın verdiği o eşsiz huzurdur.
          </p>
          <p>
            Emerald Mansion, sadece bir konaklama mekanı değil, aynı zamanda Türk misafirperverliğinin 
            yaşatıldığı bir evdir. Sultanahmet Meydanı, Ayasofya, Topkapı Sarayı gibi dünya mirası 
            eserlere sadece birkaç dakikalık yürüme mesafesinde olmanın ayrıcalığını bizimle yaşayın.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-gray-100 my-12">
            <div className="text-center">
              <div className="text-5xl font-serif text-emerald-900 mb-2">2024</div>
              <div className="text-sm uppercase tracking-widest">Kuruluş Yılı</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-emerald-900 mb-2">16</div>
              <div className="text-sm uppercase tracking-widest">Özel Oda</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-emerald-900 mb-2">∞</div>
              <div className="text-sm uppercase tracking-widest">Sınırsız Konfor</div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-2xl text-emerald-950 mb-6">Bizimle Tanışın</h3>
            <div className="flex gap-4 justify-center">
              <Link href="/odalar">
                <Button variant="outline" size="lg" className="rounded-none border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white cursor-pointer">
                  Odalarımızı Görün
                </Button>
              </Link>
              <Button asChild size="lg" className="rounded-none bg-gold-500 text-emerald-950 hover:bg-gold-400">
                <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">Rezervasyon Yap</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
