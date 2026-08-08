// Bilingual content for the Sultanahmet guide hub page. Structured after the
// content outline in the SEO brief. Walking distances match the attractions
// data used across the site.

import type { Lang } from "@/lib/seo";
import type { FaqItem } from "@/lib/schema";

export interface GuideSection {
  title: string;
  paragraphs: string[];
}

export interface ThingToDo {
  /** nameEn key into the attractions data for image and distance */
  attractionKey: string;
  title: string;
  text: string;
}

export interface ItineraryStep {
  time: string;
  title: string;
  text: string;
}

export interface SultanahmetContent {
  eyebrow: string;
  h1: string;
  lead: string;
  what: GuideSection;
  why: GuideSection;
  thingsTitle: string;
  things: ThingToDo[];
  gettingAround: GuideSection;
  whereToStayTitle: string;
  whereToStayText1: string;
  whereToStayAnchorHome: string;
  whereToStayText2: string;
  whereToStayAnchorRooms: string;
  whereToStayText3: string;
  itineraryTitle: string;
  itineraryIntro: string;
  itinerary: ItineraryStep[];
  faqTitle: string;
  faq: FaqItem[];
}

export const sultanahmetContent: Record<Lang, SultanahmetContent> = {
  en: {
    eyebrow: "Istanbul Old City",
    h1: "Sultanahmet Istanbul Guide",
    lead: "Everything you need to plan a stay in Sultanahmet, the historic heart of Istanbul, from the must see monuments to the tram, a one day route and where to stay.",
    what: {
      title: "What is Sultanahmet?",
      paragraphs: [
        "Sultanahmet is the historic core of Istanbul, set on the peninsula where the city was founded. It served as the center of the Byzantine Empire as Constantinople and later as the heart of the Ottoman capital. Today it belongs to the Fatih district and holds the densest collection of world heritage monuments in the city.",
        "Unlike the modern business districts, Sultanahmet is compact and walkable. Hagia Sophia, the Blue Mosque, Topkapi Palace, the Basilica Cistern and the Grand Bazaar all sit within a short walk of each other.",
      ],
    },
    why: {
      title: "Why stay in Sultanahmet?",
      paragraphs: [
        "Staying in Sultanahmet puts the Old City at your doorstep. You can be at the gates of Hagia Sophia before the crowds arrive, walk back to your room for a rest at midday and enjoy the quiet streets in the evening when the day visitors have gone.",
        "The neighborhood is also well connected. The T1 tram and the Marmaray rail line link Sultanahmet to the rest of the city, so day trips to Galata, Karakoy or the Asian side are easy without a car.",
      ],
    },
    thingsTitle: "Things to do in Sultanahmet",
    things: [
      {
        attractionKey: "Blue Mosque",
        title: "Blue Mosque",
        text: "Built in the early 17th century for Sultan Ahmed I, the mosque takes its popular name from the blue Iznik tiles that cover its interior. It is an active place of worship, so plan your visit outside prayer times and dress modestly. It is about 250 meters from Emerald Mansion, around a 3 minute walk.",
      },
      {
        attractionKey: "Hagia Sophia",
        title: "Hagia Sophia",
        text: "For nearly 1500 years Hagia Sophia has dominated the skyline of the Old City, first as a Byzantine cathedral, then as an Ottoman mosque. Its vast dome remains one of the great achievements of world architecture. It is about 400 meters from the hotel, roughly a 5 minute walk.",
      },
      {
        attractionKey: "Basilica Cistern",
        title: "Basilica Cistern",
        text: "This atmospheric underground reservoir was built by Emperor Justinian in the 6th century. Walkways lead between 336 marble columns, including the famous Medusa head bases. It is about 350 meters from the hotel, around a 4 minute walk.",
      },
      {
        attractionKey: "Topkapi Palace",
        title: "Topkapi Palace",
        text: "The residence and seat of government of the Ottoman sultans for around 400 years. Allow at least half a day for the courtyards, the imperial collections and the views over the Bosphorus. The palace gate is about 800 meters away, a 10 minute walk.",
      },
      {
        attractionKey: "Grand Bazaar",
        title: "Grand Bazaar",
        text: "One of the oldest and largest covered markets in the world, with thousands of shops along its lanes. Come for carpets, ceramics, jewelry and the pleasure of getting lost. It is about 700 meters from the hotel, around a 10 minute walk.",
      },
    ],
    gettingAround: {
      title: "Getting around Sultanahmet",
      paragraphs: [
        "The historic center is best explored on foot. Streets are short and most monuments are minutes apart, so comfortable shoes matter more than any transport card.",
        "For longer trips use the T1 tram from the Sultanahmet stop, a short walk from the hotel. It runs through Eminonu and across the Galata Bridge to Karakoy and Kabatas. Sirkeci station on the Marmaray line connects the European and Asian sides in minutes.",
      ],
    },
    whereToStayTitle: "Where to stay in Sultanahmet",
    whereToStayText1:
      "The best location is within walking distance of the main square, close enough to walk everywhere yet on a quiet side street. Emerald Mansion is a",
    whereToStayAnchorHome: "boutique hotel in Sultanahmet",
    whereToStayText2:
      "in the Binbirdirek quarter, a few minutes on foot from the Blue Mosque and Hagia Sophia. You can",
    whereToStayAnchorRooms: "browse our rooms and suites",
    whereToStayText3:
      "from cozy single rooms to a connected family suite.",
    itineraryTitle: "One Day in Sultanahmet",
    itineraryIntro:
      "A relaxed route that covers the highlights on foot. Opening days and hours change through the year, so check official websites before you set out.",
    itinerary: [
      {
        time: "09:00",
        title: "Blue Mosque",
        text: "Start early at the Blue Mosque before the tour groups arrive, then cross the old Hippodrome square with its Egyptian obelisk.",
      },
      {
        time: "10:30",
        title: "Hagia Sophia",
        text: "Walk over to Hagia Sophia and take your time under the great dome.",
      },
      {
        time: "12:30",
        title: "Lunch & Basilica Cistern",
        text: "Have lunch near Sultanahmet Square, then cool off underground in the Basilica Cistern.",
      },
      {
        time: "14:30",
        title: "Topkapi Palace",
        text: "Spend the afternoon in the courtyards and collections of Topkapi Palace and Gulhane Park next door.",
      },
      {
        time: "17:30",
        title: "Grand Bazaar",
        text: "Finish with the Grand Bazaar before closing time, then wander back through the Old City streets for dinner.",
      },
    ],
    faqTitle: "Sultanahmet FAQ",
    faq: [
      {
        q: "Is Sultanahmet a good area to stay in Istanbul?",
        a: "Yes, especially for a first visit. The major monuments, the tram and countless restaurants are all within walking distance, and the area is quiet in the evenings.",
      },
      {
        q: "How many days do you need for Sultanahmet?",
        a: "The main monuments can be seen in one full day. Two days give you time for the museums, the bazaars and a more relaxed pace.",
      },
      {
        q: "How do I get to Sultanahmet from the airports?",
        a: "From Istanbul Airport allow about an hour by car depending on traffic. From Sabiha Gokcen allow roughly an hour and a half. Emerald Mansion can arrange a private transfer for both.",
      },
      {
        q: "Is Sultanahmet walkable?",
        a: "Very. The whole historic core is compact, and sights like the Blue Mosque, Hagia Sophia and the Basilica Cistern are only a few minutes apart on foot.",
      },
    ],
  },
  tr: {
    eyebrow: "Tarihi Yarımada",
    h1: "Sultanahmet Rehberi",
    lead: "İstanbul'un tarihi kalbi Sultanahmet'te bir konaklama planlamak için gereken her şey. Görülmesi gereken eserler, tramvay, bir günlük rota ve konaklama önerileri.",
    what: {
      title: "Sultanahmet Nedir?",
      paragraphs: [
        "Sultanahmet, şehrin kurulduğu yarımadanın üzerinde yer alan İstanbul'un tarihi çekirdeğidir. Konstantinopolis adıyla Bizans İmparatorluğu'nun, ardından Osmanlı başkentinin merkezi olmuştur. Bugün Fatih ilçesine bağlıdır ve şehirdeki dünya mirası eserlerin en yoğun olduğu bölgedir.",
        "Modern iş bölgelerinin aksine Sultanahmet derli toplu ve yürünebilir bir semttir. Ayasofya, Sultanahmet Camii, Topkapı Sarayı, Yerebatan Sarnıcı ve Kapalıçarşı birbirine kısa yürüyüş mesafesindedir.",
      ],
    },
    why: {
      title: "Neden Sultanahmet'te Konaklamalı?",
      paragraphs: [
        "Sultanahmet'te konaklamak tarihi yarımadayı kapınızın önüne getirir. Kalabalıklar gelmeden Ayasofya'nın kapısında olabilir, öğlen dinlenmek için odanıza yürüyebilir ve günübirlik ziyaretçiler ayrıldığında akşamın sakin sokaklarının tadını çıkarabilirsiniz.",
        "Semtin ulaşım bağlantıları da güçlüdür. T1 tramvayı ve Marmaray, Sultanahmet'i şehrin geri kalanına bağlar. Galata, Karaköy veya Anadolu yakasına araç olmadan kolayca günübirlik gidebilirsiniz.",
      ],
    },
    thingsTitle: "Sultanahmet'te Gezilecek Yerler",
    things: [
      {
        attractionKey: "Blue Mosque",
        title: "Sultanahmet Camii",
        text: "17. yüzyılın başında Sultan I. Ahmed için inşa edilen cami, iç mekanını kaplayan mavi İznik çinileri nedeniyle dünyada Blue Mosque adıyla bilinir. İbadete açık olduğu için ziyaretinizi namaz vakitleri dışında planlayın. Emerald Mansion'a yaklaşık 250 metre, yürüyerek 3 dakika mesafededir.",
      },
      {
        attractionKey: "Hagia Sophia",
        title: "Ayasofya",
        text: "Ayasofya yaklaşık 1500 yıldır tarihi yarımadanın siluetine hakimdir. Önce Bizans katedrali, sonra Osmanlı camisi olan yapının devasa kubbesi dünya mimarlığının en büyük başarılarından biridir. Otele yaklaşık 400 metre, yürüyerek 5 dakika uzaklıktadır.",
      },
      {
        attractionKey: "Basilica Cistern",
        title: "Yerebatan Sarnıcı",
        text: "Bu büyüleyici yeraltı su deposu 6. yüzyılda İmparator Justinianus tarafından yaptırılmıştır. Yürüyüş yolları, ünlü Medusa başlı kaideler dahil 336 mermer sütunun arasından geçer. Otele yaklaşık 350 metre, yürüyerek 4 dakika mesafededir.",
      },
      {
        attractionKey: "Topkapi Palace",
        title: "Topkapı Sarayı",
        text: "Yaklaşık 400 yıl boyunca Osmanlı padişahlarının hem evi hem yönetim merkezi olan saray için en az yarım gün ayırın. Avlular, koleksiyonlar ve Boğaz manzarası sizi bekliyor. Saray kapısı yaklaşık 800 metre, yürüyerek 10 dakika uzaklıktadır.",
      },
      {
        attractionKey: "Grand Bazaar",
        title: "Kapalıçarşı",
        text: "Dünyanın en eski ve en büyük kapalı çarşılarından biri olan Kapalıçarşı'da binlerce dükkan sıralanır. Halı, seramik ve mücevher için gelin, labirent gibi sokaklarında kaybolmanın keyfini yaşayın. Otele yaklaşık 700 metre, yürüyerek 10 dakika mesafededir.",
      },
    ],
    gettingAround: {
      title: "Sultanahmet'te Ulaşım",
      paragraphs: [
        "Tarihi merkezi keşfetmenin en iyi yolu yürümektir. Sokaklar kısadır ve eserlerin çoğu birbirine birkaç dakika uzaklıktadır. Rahat bir ayakkabı her ulaşım kartından daha değerlidir.",
        "Daha uzun yolculuklar için otele kısa yürüyüş mesafesindeki Sultanahmet durağından T1 tramvayını kullanın. Hat Eminönü üzerinden Galata Köprüsü'nü geçerek Karaköy ve Kabataş'a ulaşır. Marmaray'ın Sirkeci istasyonu ise Avrupa ve Anadolu yakalarını dakikalar içinde bağlar.",
      ],
    },
    whereToStayTitle: "Sultanahmet'te Nerede Kalınır?",
    whereToStayText1:
      "En iyi konum, ana meydana yürüme mesafesinde ama sakin bir ara sokakta olandır. Emerald Mansion, Binbirdirek Mahallesi'nde yer alan bir",
    whereToStayAnchorHome: "Sultanahmet butik oteldir",
    whereToStayText2:
      "ve Sultanahmet Camii ile Ayasofya'ya yürüyerek birkaç dakika uzaklıktadır. Tek kişilik odalardan bağlantılı aile süitine kadar",
    whereToStayAnchorRooms: "oda ve süitlerimizi inceleyebilirsiniz",
    whereToStayText3: ".",
    itineraryTitle: "Sultanahmet'te Bir Gün",
    itineraryIntro:
      "Öne çıkan noktaları yürüyerek gezen rahat bir rota. Açılış gün ve saatleri yıl içinde değişebilir, yola çıkmadan önce resmi web sitelerini kontrol edin.",
    itinerary: [
      {
        time: "09:00",
        title: "Sultanahmet Camii",
        text: "Güne tur grupları gelmeden Sultanahmet Camii ile başlayın, ardından Dikilitaş'ın bulunduğu tarihi Hipodrom meydanını geçin.",
      },
      {
        time: "10:30",
        title: "Ayasofya",
        text: "Ayasofya'ya yürüyün ve büyük kubbenin altında zamanınızı ayırın.",
      },
      {
        time: "12:30",
        title: "Öğle Yemeği ve Yerebatan",
        text: "Sultanahmet Meydanı yakınında öğle yemeği yiyin, sonra Yerebatan Sarnıcı'nın serinliğine inin.",
      },
      {
        time: "14:30",
        title: "Topkapı Sarayı",
        text: "Öğleden sonrayı Topkapı Sarayı'nın avlularında ve hemen yanındaki Gülhane Parkı'nda geçirin.",
      },
      {
        time: "17:30",
        title: "Kapalıçarşı",
        text: "Günü kapanış saatinden önce Kapalıçarşı ile bitirin, ardından akşam yemeği için tarihi sokaklardan geri dönün.",
      },
    ],
    faqTitle: "Sultanahmet Hakkında Sorular",
    faq: [
      {
        q: "Sultanahmet İstanbul'da konaklamak için iyi bir bölge mi?",
        a: "Evet, özellikle ilk ziyaret için. Ana eserler, tramvay ve sayısız restoran yürüme mesafesindedir ve bölge akşamları sakindir.",
      },
      {
        q: "Sultanahmet için kaç gün ayırmak gerekir?",
        a: "Ana eserler dolu bir günde gezilebilir. İki gün, müzeler ve çarşılar için daha rahat bir tempo sağlar.",
      },
      {
        q: "Havalimanlarından Sultanahmet'e nasıl gidilir?",
        a: "İstanbul Havalimanı'ndan araçla trafiğe bağlı olarak yaklaşık bir saat sürer. Sabiha Gökçen'den yaklaşık bir buçuk saat ayırın. Emerald Mansion her ikisi için özel transfer ayarlayabilir.",
      },
      {
        q: "Sultanahmet yürüyerek gezilebilir mi?",
        a: "Kesinlikle. Tarihi çekirdek oldukça derli topludur. Sultanahmet Camii, Ayasofya ve Yerebatan Sarnıcı gibi noktalar birbirine yürüyerek birkaç dakika uzaklıktadır.",
      },
    ],
  },
};
