
// Room Types Data
export interface RoomImage {
  url: string;
  /** Descriptive English alt text */
  alt: string;
  /** Descriptive Turkish alt text */
  altTr: string;
  /** Intrinsic pixel dimensions, used for width/height attributes */
  width: number;
  height: number;
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  shortName: string;
  shortNameEn: string;
  description: string;
  descriptionEn: string;
  shortDescription: string;
  shortDescriptionEn: string;
  priceStart?: number;
  size: number; // m2
  capacity: {
    adults: number;
    children: number;
  };
  bedType: string;
  bedTypeEn: string;
  amenities: string[];
  amenitiesEn: string[];
  /** Unique second paragraph for the room detail page, Turkish */
  experience: string;
  /** Unique second paragraph for the room detail page, English */
  experienceEn: string;
  images: RoomImage[];
  coverImage: string;
}

// Central hotel entity data. Schema builders, footer, contact page and
// metadata all read from this single source. Only verified values that are
// already published on the site belong here. Do not add postal code or
// coordinates unless they are verified.
export const hotelInfo = {
  name: "Emerald Mansion",
  fullName: "Emerald Mansion Hotel",
  location: "Sultanahmet, İstanbul",
  address: "Binbirdirek Mah. Boyacı Ahmet Sk. No: 8, Sultanahmet / Fatih / İstanbul",
  streetAddress: "Binbirdirek Mah. Boyacı Ahmet Sk. No: 8",
  addressLocality: "Fatih",
  addressRegion: "İstanbul",
  addressCountry: "TR",
  email: "info@emeraldmansion.com",
  phone: "(0212) 830 13 13",
  phoneIntl: "+90 212 830 13 13",
  whatsapp: "905541451413",
  bookingUrl: "https://emerald-mansion.rezervasyonal.com",
  logoUrl: "/assets/images/logo/logo.svg",
  instagramUrl: "https://www.instagram.com/emeraldmansionhotel",
  socialProfiles: ["https://www.instagram.com/emeraldmansionhotel"],
  // Shown on room detail pages and in the terms of service
  checkIn: "14:00",
  checkOut: "12:00",
  // Published on the About page
  numberOfRooms: 16,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Emerald%20Mansion%20Hotel%20-%20Sultanahmet",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7947200566664!2d28.969653112549302!3d41.00786607123109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab917a4d5843f%3A0x573afc0178ff5218!2sEmerald%20Mansion%20Hotel%20-%20Sultanahmet!5e0!3m2!1str!2str!4v1764695817518!5m2!1str!2str"
};

export const rooms: Room[] = [
  {
    id: "comfort-single",
    slug: "comfort-single",
    name: "Comfort Single Room",
    nameEn: "Comfort Single Room",
    shortName: "Comfort Single",
    shortNameEn: "Comfort Single",
    description: "Yalnız seyahat edenler için tasarlanan Comfort Single odalarımız, Sultanahmet'in tarihi dokusunu modern bir konforla birleştiriyor. Osmanlı motiflerinin zarif dokunuşlarıyla bezenmiş bu odada, günün yorgunluğunu atabileceğiniz huzurlu bir atmosfer sizi bekliyor.",
    descriptionEn: "Designed for solo travelers, our Comfort Single rooms combine the historical texture of Sultanahmet with modern comfort. Adorned with elegant touches of Ottoman motifs, a peaceful atmosphere awaits you in this room where you can relieve the tiredness of the day.",
    shortDescription: "Tarihi yarımadada huzurlu ve konforlu bir tek kişilik konaklama deneyimi.",
    shortDescriptionEn: "A peaceful and comfortable single accommodation experience in the historical peninsula.",
    size: 15,
    capacity: { adults: 1, children: 0 },
    bedType: "1 Tek Kişilik Yatak",
    bedTypeEn: "1 Single Bed",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Saç Kurutma Makinesi"],
    amenitiesEn: ["Free Wi-Fi", "Air Conditioning", "Minibar", "Safe", "Smart TV", "Premium Toiletries", "Hair Dryer"],
    experience: "15 metrekarelik plan, tek başına seyahat edenin ritmine göre düzenlendi. Boy dolabı, sakin bir köşe ve karartma perdeleri, tarihi yarımadayı yürüyerek keşfettiğiniz uzun bir günün ardından dinlenmenizi kolaylaştırır.",
    experienceEn: "The 15 m2 layout is planned around a solo traveler's rhythm. A full wardrobe, a quiet corner and blackout curtains make it easy to rest after a long day of exploring the Old City on foot.",
    coverImage: "/assets/images/rooms/2.kat_4.webp",
    images: [
      { url: "/assets/images/rooms/2.kat_4.webp", alt: "Comfort Single Room with single bed at Emerald Mansion Hotel in Sultanahmet", altTr: "Sultanahmet'teki Emerald Mansion Hotel'de tek kişilik yataklı Comfort Single Oda", width: 1024, height: 683 },
      { url: "/assets/images/rooms/2.kat_3.webp", alt: "Ottoman inspired decor in the Comfort Single Room at Emerald Mansion", altTr: "Emerald Mansion Comfort Single Oda'da Osmanlı esintili dekorasyon", width: 1024, height: 683 },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Marble bathroom with walk-in shower at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de duşlu mermer banyo", width: 1024, height: 683 },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Premium bathroom amenities offered at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de sunulan premium banyo ürünleri", width: 1024, height: 683 },
      { url: "/assets/images/general/otel_genel_17.webp", alt: "Historic interior details of Emerald Mansion in Istanbul's Old City", altTr: "Tarihi yarımadadaki Emerald Mansion'ın iç mekan detayları", width: 576, height: 1024 }
    ]
  },
  {
    id: "comfort-double",
    slug: "comfort-double",
    name: "Comfort Double Room",
    nameEn: "Comfort Double Room",
    shortName: "Comfort Double",
    shortNameEn: "Comfort Double",
    description: "Çiftler için ideal olan Comfort Double odalarımız, geniş yaşam alanı ve şık dekorasyonuyla dikkat çekiyor. Yüksek tavanlar ve tarihi mimari detaylar, konaklamanızı unutulmaz bir İstanbul masalına dönüştürüyor.",
    descriptionEn: "Ideal for couples, our Comfort Double rooms stand out with their spacious living area and stylish decoration. High ceilings and historical architectural details turn your stay into an unforgettable Istanbul tale.",
    shortDescription: "Çiftler için şık, ferah ve tarihi dokuya sahip konforlu bir oda.",
    shortDescriptionEn: "A stylish, spacious and comfortable room with historical texture for couples.",
    size: 15,
    capacity: { adults: 2, children: 1 },
    bedType: "1 Çift Kişilik Yatak",
    bedTypeEn: "1 Double Bed",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Çay/Kahve Seti"],
    amenitiesEn: ["Free Wi-Fi", "Air Conditioning", "Minibar", "Safe", "Smart TV", "Premium Toiletries", "Tea/Coffee Set"],
    experience: "Çiftler bu odanın oranlarını çok sever. Çift kişilik yatak yüksek tavanların altında yer alır, sabah ışığı uzun pencerelerden süzülür ve çay setinden akıllı televizyona kadar tüm gereksinimler 15 metrekarelik alanı daraltmadan elinizin altındadır.",
    experienceEn: "Couples appreciate this room's proportions. The double bed sits beneath high ceilings, morning light arrives through tall windows and everything from the tea set to the smart TV stays within reach without crowding the 15 m2 space.",
    coverImage: "/assets/images/rooms/301_oda_2.webp",
    images: [
      { url: "/assets/images/rooms/301_oda_2.webp", alt: "Comfort Double Room with double bed at Emerald Mansion Hotel in Sultanahmet", altTr: "Sultanahmet'teki Emerald Mansion Hotel'de çift kişilik yataklı Comfort Double Oda", width: 1024, height: 683 },
      { url: "/assets/images/rooms/301_oda_1_3.webp", alt: "High ceilings and seating corner in the Comfort Double Room at Emerald Mansion", altTr: "Emerald Mansion Comfort Double Oda'da yüksek tavanlar ve oturma köşesi", width: 1024, height: 683 },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Marble bathroom with walk-in shower at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de duşlu mermer banyo", width: 1024, height: 683 },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Premium bathroom amenities offered at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de sunulan premium banyo ürünleri", width: 1024, height: 683 },
      { url: "/assets/images/general/otel_genel_17.webp", alt: "Historic interior details of Emerald Mansion in Istanbul's Old City", altTr: "Tarihi yarımadadaki Emerald Mansion'ın iç mekan detayları", width: 576, height: 1024 }
    ]
  },
  {
    id: "superior-king",
    slug: "superior-king",
    name: "Superior King Bed Room",
    nameEn: "Superior King Bed Room",
    shortName: "Superior King",
    shortNameEn: "Superior King",
    description: "Geniş King yatak ve lüks detaylarla donatılmış Superior odamızda konforu en üst düzeyde yaşayın. Şehrin tarihine tanıklık eden pencerelerden süzülen ışıkla güne uyanın.",
    descriptionEn: "Experience comfort at the highest level in our Superior room equipped with a large King bed and luxurious details. Wake up to the day with the light filtering through the windows witnessing the history of the city.",
    shortDescription: "Ekstra geniş yatak ve premium detaylarla üst düzey konfor.",
    shortDescriptionEn: "Top level comfort with extra large bed and premium details.",
    size: 20,
    capacity: { adults: 2, children: 1 },
    bedType: "1 King Size Yatak",
    bedTypeEn: "1 King Size Bed",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Oturma Alanı", "Su Isıtıcı"],
    amenitiesEn: ["Free Wi-Fi", "Air Conditioning", "Minibar", "Safe", "Smart TV", "Premium Toiletries", "Sitting Area", "Kettle"],
    experience: "20 metrekarelik Superior King, ferahlığı tam gereken yerde sunar. King size yatak mekanın merkezini oluşturur, özel oturma alanı sakin sabahlara davet eder ve Ayasofya'ya doğru yola çıkmadan önce su ısıtıcınız çayınız için hazırdır.",
    experienceEn: "At 20 m2 the Superior King adds breathing room where it matters. The king size bed anchors the space, a dedicated sitting area invites slow mornings and the kettle stands ready for tea before you step out toward Hagia Sophia.",
    coverImage: "/assets/images/rooms/303_oda_3.webp",
    images: [
      { url: "/assets/images/rooms/303_oda_3.webp", alt: "Superior King Room with king size bed at Emerald Mansion Hotel in Sultanahmet", altTr: "Sultanahmet'teki Emerald Mansion Hotel'de king size yataklı Superior King Oda", width: 1024, height: 683 },
      { url: "/assets/images/rooms/303_oda_2.webp", alt: "Sitting area and window detail in the Superior King Room at Emerald Mansion", altTr: "Emerald Mansion Superior King Oda'da oturma alanı ve pencere detayı", width: 1024, height: 683 },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Marble bathroom with walk-in shower at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de duşlu mermer banyo", width: 1024, height: 683 },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Premium bathroom amenities offered at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de sunulan premium banyo ürünleri", width: 1024, height: 683 },
      { url: "/assets/images/general/otel_genel_13.webp", alt: "Restored Ottoman era interior of Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'in restore edilmiş Osmanlı dönemi iç mekanı", width: 683, height: 1024 }
    ]
  },
  {
    id: "junior-suite-king",
    slug: "junior-suite-king",
    name: "Junior Suite King Bed",
    nameEn: "Junior Suite King Bed",
    shortName: "Junior Suite King",
    shortNameEn: "Junior Suite King",
    description: "Junior Suite King odamız, ferahlığı ve zarafeti bir arada sunuyor. Özel oturma alanı, geniş banyosu ve tarihi dokuya saygılı modern tasarımıyla kendinizi özel hissedeceksiniz.",
    descriptionEn: "Our Junior Suite King room offers spaciousness and elegance together. You will feel special with its private sitting area, large bathroom and modern design respectful to historical texture.",
    shortDescription: "Oturma alanı ve geniş yaşam alanıyla lüks bir suite deneyimi.",
    shortDescriptionEn: "A luxurious suite experience with sitting area and large living space.",
    size: 25,
    capacity: { adults: 3, children: 1 },
    bedType: "1 King Size Yatak + Sofa",
    bedTypeEn: "1 King Size Bed + Sofa",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Oturma Grubu", "Havlu & Terlik"],
    amenitiesEn: ["Free Wi-Fi", "Air Conditioning", "Minibar", "Safe", "Smart TV", "Premium Toiletries", "Sitting Group", "Towels & Slippers"],
    experience: "25 metrekarelik süit, uyku ve yaşam alanını birbirinden ayırır. Pencere kenarındaki oturma grubu en sevilen okuma köşesine dönüşür, geniş banyo ferahlık katar ve üç misafire kadar konforlu bir yerleşim sunar.",
    experienceEn: "The 25 m2 suite separates sleeping and living. The sofa group by the window becomes a favorite reading corner, the large bathroom adds a sense of ease and up to three guests settle in comfortably.",
    coverImage: "/assets/images/rooms/305_oda_1.webp",
    images: [
      { url: "/assets/images/rooms/305_oda_1.webp", alt: "Junior Suite King with king bed and sitting area at Emerald Mansion in Sultanahmet", altTr: "Sultanahmet'teki Emerald Mansion'da king yataklı ve oturma alanlı Junior Suite King", width: 1024, height: 683 },
      { url: "/assets/images/rooms/304_oda_6.webp", alt: "Living area with sofa in the Junior Suite King at Emerald Mansion", altTr: "Emerald Mansion Junior Suite King'de koltuklu oturma alanı", width: 1024, height: 683 },
      { url: "/assets/images/rooms/304_oda_1.webp", alt: "Bedroom of the Junior Suite King at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel Junior Suite King yatak odası", width: 1024, height: 683 },
      { url: "/assets/images/rooms/304_oda_4.webp", alt: "Handcrafted wooden details in the Junior Suite King at Emerald Mansion", altTr: "Emerald Mansion Junior Suite King'de el işçiliği ahşap detaylar", width: 1024, height: 683 },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Marble bathroom with walk-in shower at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de duşlu mermer banyo", width: 1024, height: 683 },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Premium bathroom amenities offered at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de sunulan premium banyo ürünleri", width: 1024, height: 683 },
      { url: "/assets/images/general/otel_genel_21.webp", alt: "Warm lighting in the corridors of Emerald Mansion boutique hotel", altTr: "Emerald Mansion butik otelin koridorlarında sıcak aydınlatma", width: 576, height: 1024 },
      { url: "/assets/images/general/otel_genel_19.webp", alt: "Decorative interior touches at Emerald Mansion in Sultanahmet", altTr: "Sultanahmet'teki Emerald Mansion'da dekoratif iç mekan dokunuşları", width: 576, height: 1024 }
    ]
  },
  {
    id: "junior-suite-twin",
    slug: "junior-suite-twin",
    name: "Junior Suite Twin Bed",
    nameEn: "Junior Suite Twin Bed",
    shortName: "Junior Suite Twin",
    shortNameEn: "Junior Suite Twin",
    description: "Arkadaş grupları veya küçük aileler için mükemmel olan Junior Suite Twin, iki ayrı yatak ve konforlu bir çekyat ile 3 kişiye kadar konaklama imkanı sunuyor. Geniş kullanım alanı ve modern detaylarla rahatlayın.",
    descriptionEn: "Perfect for groups of friends or small families, Junior Suite Twin offers accommodation for up to 3 people with two separate beds and a comfortable sofa bed. Relax with its spacious usage area and modern details.",
    shortDescription: "İki ayrı yatak ve sofa ile 3 kişilik ferah suite konforu.",
    shortDescriptionEn: "Spacious suite comfort for 3 people with two separate beds and sofa.",
    size: 25,
    capacity: { adults: 3, children: 0 },
    bedType: "2 Tek Kişilik Yatak + 1 Sofa",
    bedTypeEn: "2 Single Beds + 1 Sofa Bed",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Çalışma Masası"],
    amenitiesEn: ["Free Wi-Fi", "Air Conditioning", "Minibar", "Safe", "Smart TV", "Premium Toiletries", "Work Desk"],
    experience: "İki ayrı tek kişilik yatak ve bir çekyat, 25 metrekarelik planda arkadaşlara veya iş arkadaşlarına kendi alanlarını verir. Çalışma masası gerçekten kullanışlıdır ve süit üç misafir ve bavullarıyla bile düzenli kalır.",
    experienceEn: "Two proper single beds and a sofa bed give friends or colleagues their own space within the 25 m2 plan. The work desk is genuinely usable and the suite stays orderly even with three guests and their luggage.",
    coverImage: "/assets/images/rooms/302_oda_4.webp",
    images: [
      { url: "/assets/images/rooms/302_oda_4.webp", alt: "Junior Suite Twin with two single beds at Emerald Mansion Hotel in Sultanahmet", altTr: "Sultanahmet'teki Emerald Mansion Hotel'de iki tek kişilik yataklı Junior Suite Twin", width: 1024, height: 683 },
      { url: "/assets/images/rooms/302_oda_2.webp", alt: "Two single beds in the Junior Suite Twin at Emerald Mansion", altTr: "Emerald Mansion Junior Suite Twin'de iki tek kişilik yatak", width: 1024, height: 683 },
      { url: "/assets/images/rooms/302_oda_6.webp", alt: "Spacious layout of the Junior Suite Twin at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel Junior Suite Twin'in ferah yerleşimi", width: 1024, height: 683 },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Marble bathroom with walk-in shower at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de duşlu mermer banyo", width: 1024, height: 683 },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Premium bathroom amenities offered at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de sunulan premium banyo ürünleri", width: 1024, height: 683 },
      { url: "/assets/images/general/otel_genel_20.webp", alt: "Historic staircase detail at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de tarihi merdiven detayı", width: 576, height: 1024 },
      { url: "/assets/images/general/otel_genel_21.webp", alt: "Warm lighting in the corridors of Emerald Mansion boutique hotel", altTr: "Emerald Mansion butik otelin koridorlarında sıcak aydınlatma", width: 576, height: 1024 }
    ]
  },
  {
    id: "family-suite",
    slug: "family-suite",
    name: "Family Suite Connected",
    nameEn: "Family Suite Connected",
    shortName: "Family Suite",
    shortNameEn: "Family Suite",
    description: "Aileler için özel olarak tasarlanan bağlantılı odalarımızda, hem bir arada olmanın keyfini çıkarın hem de özel alanınızı koruyun. Bir çift kişilik yatak ve iki konforlu sofa ile geniş aileniz için ev konforunda bir deneyim.",
    descriptionEn: "In our connected rooms designed specifically for families, enjoy being together while protecting your private space. An experience in home comfort for your large family with one double bed and two comfortable sofas.",
    shortDescription: "Geniş aileler için bağlantılı odalar, çift kişilik yatak ve sofalarla konfor.",
    shortDescriptionEn: "Connected rooms for large families, comfort with double bed and sofas.",
    size: 35,
    capacity: { adults: 4, children: 2 },
    bedType: "1 Çift Kişilik Yatak + 2 Sofa",
    bedTypeEn: "1 Double Bed + 2 Sofa Beds",
    amenities: ["Ücretsiz Wi-Fi", "2 x Klima", "2 x Minibar", "Kasa", "2 x Akıllı TV", "Premium Banyo Malzemeleri", "Geniş Oturma Alanı"],
    amenitiesEn: ["Free Wi-Fi", "2 x Air Conditioning", "2 x Minibar", "Safe", "2 x Smart TV", "Premium Toiletries", "Large Sitting Area"],
    experience: "Birbirine bağlantılı iki oda, ebeveynler ve çocukların tek bir girişin ardında ayrı alanlarını korumasını sağlar. Her odanın kendi kliması ve televizyonu vardır ve 35 metrekarelik plan aile seyahatinin neşeli telaşını rahatça karşılar.",
    experienceEn: "Two connected rooms let parents and children keep separate spaces behind a single entrance. Each room has its own air conditioning and TV, and the 35 m2 layout comfortably absorbs the happy bustle of family travel.",
    coverImage: "/assets/images/rooms/2.kat_2_5-1.webp",
    images: [
      { url: "/assets/images/rooms/2.kat_2_5-1.webp", alt: "Family Suite with connected rooms at Emerald Mansion Hotel in Sultanahmet", altTr: "Sultanahmet'teki Emerald Mansion Hotel'de bağlantılı odalı Family Suite", width: 1024, height: 683 },
      { url: "/assets/images/rooms/2.kat_2_3.webp", alt: "First bedroom of the Family Suite at Emerald Mansion with double bed", altTr: "Emerald Mansion Family Suite'in çift kişilik yataklı ilk odası", width: 1024, height: 683 },
      { url: "/assets/images/rooms/2.kat_2_4.webp", alt: "Second room of the Family Suite at Emerald Mansion with sofa beds", altTr: "Emerald Mansion Family Suite'in çekyatlı ikinci odası", width: 1024, height: 683 },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Marble bathroom with walk-in shower at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de duşlu mermer banyo", width: 1024, height: 683 },
      { url: "/assets/images/general/otel_genel_20.webp", alt: "Historic staircase detail at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de tarihi merdiven detayı", width: 576, height: 1024 },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Premium bathroom amenities offered at Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'de sunulan premium banyo ürünleri", width: 1024, height: 683 },
      { url: "/assets/images/general/otel_genel_13.webp", alt: "Restored Ottoman era interior of Emerald Mansion Hotel", altTr: "Emerald Mansion Hotel'in restore edilmiş Osmanlı dönemi iç mekanı", width: 683, height: 1024 }
    ]
  }
];

import galataTower from '@assets/stock_images/galata_tower_istanbu_5b2197de.webp';
import blueMosque from '@assets/stock_images/blue_mosque_sultanah_cf28c2fc.webp';
import basilicaCistern from '@assets/stock_images/basilica_cistern_ist_bcddf85b.webp';
import hagiaSophia from '@assets/stock_images/hagia_sophia_istanbu_b8b5dc4e.webp';
import topkapiPalace from '@assets/stock_images/topkapi_palace_istan_54d0f61b.webp';
import dolmabahcePalace from '@assets/stock_images/dolmabahce_palace_is_aa2d148d.webp';
import grandBazaar from '@assets/stock_images/grand_bazaar_istanbu_7aa32030.webp';
import istiklalStreet from '@assets/stock_images/istiklal_street_ista_0822a274.webp';
import spiceBazaar from '@assets/stock_images/spice_bazaar_istanbu_8eefd351.webp';

export interface Attraction {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  distance: string;
  time: string;
  timeEn: string;
}

export const attractions: Attraction[] = [
  {
    name: "Galata Kulesi",
    nameEn: "Galata Tower",
    description: "1348 yılında Cenevizliler tarafından inşa edilen kule, İstanbul'un en ikonik simgelerinden biridir. Haliç ve Boğaz'ın panoramik manzarasını sunar.",
    descriptionEn: "Built by the Genoese in 1348, the tower is one of Istanbul's most iconic landmarks. It offers a panoramic view of the Golden Horn and the Bosphorus.",
    image: galataTower,
    distance: "2.8 km",
    time: "30 dk (Tramvay)",
    timeEn: "30 min (Tram)"
  },
  {
    name: "Mısır Çarşısı",
    nameEn: "Spice Bazaar",
    description: "17. yüzyılda inşa edilen ve Eminönü'nde yer alan bu tarihi çarşı, egzotik baharat kokuları, renkli lokumları ve geleneksel atmosferiyle büyüleyicidir.",
    descriptionEn: "Built in the 17th century and located in Eminönü, this historical bazaar is fascinating with its exotic spice scents, colorful Turkish delights and traditional atmosphere.",
    image: spiceBazaar,
    distance: "1.2 km",
    time: "15 dk Yürüyüş",
    timeEn: "15 min Walk"
  },
  {
    name: "Sultanahmet Camii",
    nameEn: "Blue Mosque",
    description: "17. yüzyılda I. Ahmed tarafından yaptırılan ve mavi çinileriyle 'Blue Mosque' olarak bilinen cami, Osmanlı mimarisinin en zarif örneklerindendir.",
    descriptionEn: "Built by Ahmed I in the 17th century and known as the 'Blue Mosque' for its blue tiles, the mosque is one of the most elegant examples of Ottoman architecture.",
    image: blueMosque,
    distance: "250 m",
    time: "3 dk Yürüyüş",
    timeEn: "3 min Walk"
  },
  {
    name: "Yerebatan Sarnıcı",
    nameEn: "Basilica Cistern",
    description: "Bizans İmparatoru I. Justinianus tarafından 6. yüzyılda yaptırılan bu büyüleyici yeraltı sarnıcı, 336 mermer sütunu ve Medusa başları ile ünlüdür.",
    descriptionEn: "Built by Byzantine Emperor Justinian I in the 6th century, this fascinating underground cistern is famous for its 336 marble columns and Medusa heads.",
    image: basilicaCistern,
    distance: "350 m",
    time: "4 dk Yürüyüş",
    timeEn: "4 min Walk"
  },
  {
    name: "Ayasofya Camii",
    nameEn: "Hagia Sophia",
    description: "Dünya mimarlık tarihinin başyapıtlarından biri olan Ayasofya, 1500 yıllık tarihiyle Bizans ve Osmanlı imparatorluklarının ortak mirasını simgeler.",
    descriptionEn: "One of the masterpieces of world architectural history, Hagia Sophia symbolizes the common heritage of the Byzantine and Ottoman empires with its 1500-year history.",
    image: hagiaSophia,
    distance: "400 m",
    time: "5 dk Yürüyüş",
    timeEn: "5 min Walk"
  },
  {
    name: "Topkapı Sarayı",
    nameEn: "Topkapi Palace",
    description: "Osmanlı İmparatorluğu'nun 400 yıl boyunca yönetim merkezi ve padişahların evi olan saray, muhteşem avluları, Harem dairesi ve Kutsal Emanetler bölümüyle tarihe ışık tutar.",
    descriptionEn: "The palace, which was the administrative center of the Ottoman Empire and the home of the sultans for 400 years, sheds light on history with its magnificent courtyards, Harem section and Holy Relics section.",
    image: topkapiPalace,
    distance: "800 m",
    time: "10 dk Yürüyüş",
    timeEn: "10 min Walk"
  },
  {
    name: "Dolmabahçe Sarayı",
    nameEn: "Dolmabahce Palace",
    description: "19. yüzyılda inşa edilen bu barok ve neoklasik tarzdaki saray, Osmanlı'nın batılılaşma döneminin en görkemli yapısıdır. Boğaz kıyısındaki konumuyla büyüleyicidir.",
    descriptionEn: "Built in the 19th century, this baroque and neoclassical palace is the most magnificent structure of the Ottoman westernization period. It is fascinating with its location on the Bosphorus.",
    image: dolmabahcePalace,
    distance: "5.5 km",
    time: "35 dk (Tramvay)",
    timeEn: "35 min (Tram)"
  },
  {
    name: "Kapalı Çarşı",
    nameEn: "Grand Bazaar",
    description: "Dünyanın en eski ve en büyük kapalı çarşılarından biri olan Kapalı Çarşı, 4000'den fazla dükkanı, labirent gibi sokakları ve tarihi atmosferiyle ticaretin kalbidir.",
    descriptionEn: "One of the world's oldest and largest covered markets, the Grand Bazaar is the heart of trade with its more than 4000 shops, labyrinthine streets and historical atmosphere.",
    image: grandBazaar,
    distance: "700 m",
    time: "10 dk Yürüyüş",
    timeEn: "10 min Walk"
  },
  {
    name: "İstiklal Caddesi",
    nameEn: "Istiklal Street",
    description: "Beyoğlu'nun kalbi olan İstiklal Caddesi, 19. yüzyıl mimarisi, tarihi tramvayı, mağazaları, kafeleri ve sanat galerileriyle İstanbul'un modern yüzünü yansıtır.",
    descriptionEn: "The heart of Beyoğlu, Istiklal Street reflects the modern face of Istanbul with its 19th-century architecture, historical tram, shops, cafes and art galleries.",
    image: istiklalStreet,
    distance: "4.2 km",
    time: "40 dk (Tramvay)",
    timeEn: "40 min (Tram)"
  }
];
