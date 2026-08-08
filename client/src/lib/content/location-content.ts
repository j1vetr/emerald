// Bilingual content for the Location page. Distances and walking times come
// from the same attractions data used across the site. Airport figures are
// deliberately hedged because travel times vary with traffic.

import type { Lang } from "@/lib/seo";
import type { FaqItem } from "@/lib/schema";

export interface LocationContent {
  eyebrow: string;
  h1: string;
  lead: string;
  addressTitle: string;
  directionsLabel: string;
  phoneLabel: string;
  emailLabel: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  aboutGuideAnchor: string;
  attractionsTitle: string;
  attractionsText: string;
  tramTitle: string;
  tramText1: string;
  tramText2: string;
  airportsTitle: string;
  airportIstTitle: string;
  airportIstText: string;
  airportSawTitle: string;
  airportSawText: string;
  transferTitle: string;
  transferText: string;
  faqTitle: string;
  faq: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaRoomsAnchor: string;
  ctaGuideAnchor: string;
}

export const locationContent: Record<Lang, LocationContent> = {
  en: {
    eyebrow: "Location",
    h1: "Hotel in the Heart of Sultanahmet",
    lead: "Emerald Mansion stands in the Binbirdirek quarter of Sultanahmet, the historic Old City of Istanbul. The most famous landmarks of the city are a short walk from our door.",
    addressTitle: "Address & Map",
    directionsLabel: "Get Directions",
    phoneLabel: "Phone",
    emailLabel: "Email",
    aboutTitle: "About Sultanahmet",
    aboutText1:
      "Sultanahmet is the oldest part of Istanbul, built on the historic peninsula where the Byzantine and Ottoman empires had their capitals. Within a few hundred meters you will find Hagia Sophia, the Blue Mosque, the Basilica Cistern and Topkapi Palace.",
    aboutText2:
      "Staying in Sultanahmet means you can explore the Old City on foot, return to your room to rest during the day and watch the neighborhood grow quiet after the day visitors leave. Read more in our",
    aboutGuideAnchor: "Sultanahmet guide",
    attractionsTitle: "Walking to the Main Attractions",
    attractionsText:
      "These distances start at the hotel entrance. Everything on this list except Galata Tower, Dolmabahce Palace and Istiklal Street can be reached comfortably on foot.",
    tramTitle: "Sultanahmet Tram Stop",
    tramText1:
      "The closest tram stop is Sultanahmet on the T1 line, a short walk from the hotel. The T1 line connects the Old City with Eminonu, Karakoy and Kabatas, so you can reach the Galata side and the Bosphorus shore without a taxi.",
    tramText2:
      "Sirkeci station on the Marmaray line is also within walking distance and offers a fast rail link between the European and Asian sides.",
    airportsTitle: "Getting Here from the Airports",
    airportIstTitle: "Istanbul Airport (IST)",
    airportIstText:
      "Istanbul Airport is on the European side. By car or private transfer the trip usually takes about an hour depending on traffic. Havaist shuttle buses also run from the airport toward the Old City.",
    airportSawTitle: "Sabiha Gokcen Airport (SAW)",
    airportSawText:
      "Sabiha Gokcen is on the Asian side of the city. Plan for roughly an hour and a half by car depending on traffic. A private transfer is the most comfortable option after a long flight.",
    transferTitle: "Airport Transfer Service",
    transferText:
      "We can arrange a private airport transfer for your arrival and departure. A one way private transfer is included for bookings of 500 euro and above made through our website. Contact us before your trip and we will organize the rest.",
    faqTitle: "Frequently Asked Questions",
    faq: [
      {
        q: "Is Emerald Mansion located in Sultanahmet?",
        a: "Yes. The hotel is in the Binbirdirek quarter of Sultanahmet in the Fatih district, at the center of Istanbul's historic Old City.",
      },
      {
        q: "How far is Emerald Mansion from Hagia Sophia?",
        a: "Hagia Sophia is about 400 meters away, roughly a 5 minute walk from the hotel.",
      },
      {
        q: "Is the Blue Mosque within walking distance?",
        a: "Yes. The Blue Mosque is about 250 meters away, around a 3 minute walk.",
      },
      {
        q: "Is Emerald Mansion near the Grand Bazaar?",
        a: "Yes. The Grand Bazaar is about 700 meters away, around a 10 minute walk through the Old City.",
      },
      {
        q: "Does Emerald Mansion offer airport transfer?",
        a: "Yes. We arrange private airport transfers on request, and a one way private transfer is included for website bookings of 500 euro and above.",
      },
      {
        q: "What are the check-in and check-out times?",
        a: "Check-in starts at 14:00 and check-out is until 12:00.",
      },
      {
        q: "Which tram station is closest to Emerald Mansion?",
        a: "The Sultanahmet stop on the T1 tram line is the closest station, a short walk from the hotel.",
      },
      {
        q: "Does the hotel provide Wi-Fi?",
        a: "Yes. Free Wi-Fi is available in all rooms and throughout the hotel.",
      },
    ],
    ctaTitle: "Stay in the Old City",
    ctaText:
      "Make Sultanahmet your base for exploring Istanbul.",
    ctaRoomsAnchor: "Explore our rooms and suites",
    ctaGuideAnchor: "Plan your days with the Istanbul guide",
  },
  tr: {
    eyebrow: "Konum",
    h1: "Sultanahmet'in Kalbinde Otel",
    lead: "Emerald Mansion, İstanbul'un tarihi merkezi Sultanahmet'in Binbirdirek Mahallesi'nde yer alır. Şehrin en ünlü eserleri kapımızdan kısa bir yürüyüş mesafesindedir.",
    addressTitle: "Adres ve Harita",
    directionsLabel: "Yol Tarifi Al",
    phoneLabel: "Telefon",
    emailLabel: "E-Posta",
    aboutTitle: "Sultanahmet Hakkında",
    aboutText1:
      "Sultanahmet, Bizans ve Osmanlı imparatorluklarına başkentlik yapmış tarihi yarımadanın üzerinde kurulu, İstanbul'un en eski bölgesidir. Birkaç yüz metre içinde Ayasofya, Sultanahmet Camii, Yerebatan Sarnıcı ve Topkapı Sarayı bulunur.",
    aboutText2:
      "Sultanahmet'te konaklamak, tarihi yarımadayı yürüyerek keşfetmek, gün içinde odanıza dönüp dinlenmek ve günübirlik ziyaretçiler ayrıldıktan sonra semtin sakinliğini yaşamak demektir. Daha fazlası için",
    aboutGuideAnchor: "Sultanahmet rehberimize göz atın",
    attractionsTitle: "Ana Cazibe Noktalarına Yürüyüş",
    attractionsText:
      "Mesafeler otel girişinden başlar. Galata Kulesi, Dolmabahçe Sarayı ve İstiklal Caddesi dışındaki tüm noktalara rahatça yürüyerek ulaşabilirsiniz.",
    tramTitle: "Sultanahmet Tramvay Durağı",
    tramText1:
      "Otele en yakın tramvay durağı, kısa bir yürüyüş mesafesindeki T1 hattı Sultanahmet durağıdır. T1 hattı tarihi yarımadayı Eminönü, Karaköy ve Kabataş ile bağlar. Böylece Galata tarafına ve Boğaz kıyısına taksiye binmeden ulaşabilirsiniz.",
    tramText2:
      "Marmaray hattındaki Sirkeci istasyonu da yürüme mesafesindedir ve Avrupa ile Anadolu yakası arasında hızlı bir raylı bağlantı sunar.",
    airportsTitle: "Havalimanlarından Ulaşım",
    airportIstTitle: "İstanbul Havalimanı (IST)",
    airportIstText:
      "İstanbul Havalimanı Avrupa yakasındadır. Araç veya özel transferle yolculuk trafiğe bağlı olarak genellikle bir saat sürer. Havaist otobüsleri de havalimanından tarihi yarımada yönüne çalışır.",
    airportSawTitle: "Sabiha Gökçen Havalimanı (SAW)",
    airportSawText:
      "Sabiha Gökçen şehrin Anadolu yakasındadır. Araçla trafiğe bağlı olarak yaklaşık bir buçuk saat ayırmanızı öneririz. Uzun bir uçuşun ardından en konforlu seçenek özel transferdir.",
    transferTitle: "Havalimanı Transfer Hizmeti",
    transferText:
      "Geliş ve dönüşünüz için özel havalimanı transferi ayarlayabiliriz. Web sitemizden yapılan 500 euro ve üzeri rezervasyonlarda tek yön özel transfer dahildir. Seyahatinizden önce bizimle iletişime geçin, gerisini biz organize edelim.",
    faqTitle: "Sıkça Sorulan Sorular",
    faq: [
      {
        q: "Emerald Mansion Sultanahmet'te mi yer alıyor?",
        a: "Evet. Otelimiz Fatih ilçesine bağlı Sultanahmet'in Binbirdirek Mahallesi'nde, İstanbul'un tarihi merkezindedir.",
      },
      {
        q: "Emerald Mansion Ayasofya'ya ne kadar uzaklıkta?",
        a: "Ayasofya otele yaklaşık 400 metre uzaklıktadır ve yürüyerek yaklaşık 5 dakika sürer.",
      },
      {
        q: "Sultanahmet Camii yürüme mesafesinde mi?",
        a: "Evet. Sultanahmet Camii yaklaşık 250 metre uzaklıktadır ve yürüyerek yaklaşık 3 dakika sürer.",
      },
      {
        q: "Emerald Mansion Kapalıçarşı'ya yakın mı?",
        a: "Evet. Kapalıçarşı yaklaşık 700 metre uzaklıktadır ve tarihi sokaklardan yaklaşık 10 dakikalık bir yürüyüşle ulaşılır.",
      },
      {
        q: "Emerald Mansion havalimanı transferi sunuyor mu?",
        a: "Evet. Talep üzerine özel havalimanı transferi ayarlıyoruz. Web sitemizden yapılan 500 euro ve üzeri rezervasyonlarda tek yön özel transfer dahildir.",
      },
      {
        q: "Giriş ve çıkış saatleri nedir?",
        a: "Giriş saati 14:00, çıkış saati 12:00'dir.",
      },
      {
        q: "Emerald Mansion'a en yakın tramvay durağı hangisi?",
        a: "En yakın durak, otelden kısa bir yürüyüş mesafesindeki T1 hattı Sultanahmet durağıdır.",
      },
      {
        q: "Otelde Wi-Fi var mı?",
        a: "Evet. Tüm odalarda ve otel genelinde ücretsiz Wi-Fi bulunur.",
      },
    ],
    ctaTitle: "Tarihi Yarımadada Konaklayın",
    ctaText: "İstanbul'u keşfederken Sultanahmet'i eviniz yapın.",
    ctaRoomsAnchor: "Oda ve süitlerimizi inceleyin",
    ctaGuideAnchor: "Günlerinizi İstanbul rehberiyle planlayın",
  },
};
