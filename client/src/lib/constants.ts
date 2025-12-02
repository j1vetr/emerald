
// Room Types Data
export interface RoomImage {
  url: string;
  alt: string;
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
  images: RoomImage[];
  coverImage: string;
}

export const hotelInfo = {
  name: "Emerald Mansion",
  location: "Sultanahmet, İstanbul",
  address: "Binbirdirek Mah. Boyacı Ahmet Sk. No: 8, Sultanahmet / Fatih / İstanbul",
  email: "info@emeraldmansion.com",
  phone: "+90 554 145 14 13",
  whatsapp: "905541451413",
  bookingUrl: "https://emerald-mansion.rezervasyonal.com",
  logoUrl: "/assets/images/logo/logo.svg",
  instagramUrl: "https://www.instagram.com/emeraldmansionhotel"
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
    size: 18,
    capacity: { adults: 1, children: 0 },
    bedType: "1 Tek Kişilik Yatak",
    bedTypeEn: "1 Single Bed",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Saç Kurutma Makinesi"],
    amenitiesEn: ["Free Wi-Fi", "Air Conditioning", "Minibar", "Safe", "Smart TV", "Premium Toiletries", "Hair Dryer"],
    coverImage: "/assets/images/rooms/2.kat_4.webp",
    images: [
      { url: "/assets/images/rooms/2.kat_4.webp", alt: "Comfort Single Room View" },
      { url: "/assets/images/rooms/2.kat_3.webp", alt: "Comfort Single Room Detail" },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Bathroom" },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Amenities" },
      { url: "/assets/images/general/otel_genel_17.webp", alt: "Room Interior" }
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
    size: 25,
    capacity: { adults: 2, children: 1 },
    bedType: "1 Çift Kişilik Yatak",
    bedTypeEn: "1 Double Bed",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Çay/Kahve Seti"],
    amenitiesEn: ["Free Wi-Fi", "Air Conditioning", "Minibar", "Safe", "Smart TV", "Premium Toiletries", "Tea/Coffee Set"],
    coverImage: "/assets/images/rooms/301_oda_2.webp",
    images: [
      { url: "/assets/images/rooms/301_oda_2.webp", alt: "Comfort Double Room" },
      { url: "/assets/images/rooms/301_oda_1_3.webp", alt: "Comfort Double Detail" },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Bathroom" },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Amenities" },
      { url: "/assets/images/general/otel_genel_17.webp", alt: "Room Ambiance" }
    ]
  },
  {
    id: "superior-king",
    slug: "superior-king-bed",
    name: "Superior King Bed Room",
    nameEn: "Superior King Bed Room",
    shortName: "Superior King",
    shortNameEn: "Superior King",
    description: "Geniş King yatak ve lüks detaylarla donatılmış Superior odamızda konforu en üst düzeyde yaşayın. Şehrin tarihine tanıklık eden pencerelerden süzülen ışıkla güne uyanın.",
    descriptionEn: "Experience comfort at the highest level in our Superior room equipped with a large King bed and luxurious details. Wake up to the day with the light filtering through the windows witnessing the history of the city.",
    shortDescription: "Ekstra geniş yatak ve premium detaylarla üst düzey konfor.",
    shortDescriptionEn: "Top level comfort with extra large bed and premium details.",
    size: 30,
    capacity: { adults: 2, children: 1 },
    bedType: "1 King Size Yatak",
    bedTypeEn: "1 King Size Bed",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Oturma Alanı", "Espresso Makinesi"],
    amenitiesEn: ["Free Wi-Fi", "Air Conditioning", "Minibar", "Safe", "Smart TV", "Premium Toiletries", "Sitting Area", "Espresso Machine"],
    coverImage: "/assets/images/rooms/303_oda_3.webp",
    images: [
      { url: "/assets/images/rooms/303_oda_3.webp", alt: "Superior King Room" },
      { url: "/assets/images/rooms/303_oda_2.webp", alt: "Superior King Detail" },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Bathroom" },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Amenities" },
      { url: "/assets/images/general/otel_genel_13.webp", alt: "Interior" }
    ]
  },
  {
    id: "junior-suite-king",
    slug: "junior-suite-king-bed",
    name: "Junior Suite King Bed",
    nameEn: "Junior Suite King Bed",
    shortName: "Junior Suite King",
    shortNameEn: "Junior Suite King",
    description: "Junior Suite King odamız, ferahlığı ve zarafeti bir arada sunuyor. Özel oturma alanı, geniş banyosu ve tarihi dokuya saygılı modern tasarımıyla kendinizi özel hissedeceksiniz.",
    descriptionEn: "Our Junior Suite King room offers spaciousness and elegance together. You will feel special with its private sitting area, large bathroom and modern design respectful to historical texture.",
    shortDescription: "Oturma alanı ve geniş yaşam alanıyla lüks bir suite deneyimi.",
    shortDescriptionEn: "A luxurious suite experience with sitting area and large living space.",
    size: 35,
    capacity: { adults: 3, children: 1 },
    bedType: "1 King Size Yatak + Sofa",
    bedTypeEn: "1 King Size Bed + Sofa",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Oturma Grubu", "Bornoz & Terlik"],
    amenitiesEn: ["Free Wi-Fi", "Air Conditioning", "Minibar", "Safe", "Smart TV", "Premium Toiletries", "Sitting Group", "Robes & Slippers"],
    coverImage: "/assets/images/rooms/305_oda_1.webp",
    images: [
      { url: "/assets/images/rooms/305_oda_1.webp", alt: "Junior Suite King" },
      { url: "/assets/images/rooms/304_oda_6.webp", alt: "Living Area" },
      { url: "/assets/images/rooms/304_oda_1.webp", alt: "Bedroom" },
      { url: "/assets/images/rooms/304_oda_4.webp", alt: "Detail" },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Bathroom" },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Amenities" },
      { url: "/assets/images/general/otel_genel_21.webp", alt: "Suite Ambience" },
      { url: "/assets/images/general/otel_genel_19.webp", alt: "Decor" }
    ]
  },
  {
    id: "junior-suite-twin",
    slug: "junior-suite-twin-bed",
    name: "Junior Suite Twin Bed",
    nameEn: "Junior Suite Twin Bed",
    shortName: "Junior Suite Twin",
    shortNameEn: "Junior Suite Twin",
    description: "Arkadaş grupları veya iş seyahatleri için mükemmel olan Junior Suite Twin, iki ayrı yatak ve geniş kullanım alanı sunuyor. Konforunuz için her detayın düşünüldüğü bu odada rahatlayın.",
    descriptionEn: "Perfect for groups of friends or business trips, Junior Suite Twin offers two separate beds and a large usage area. Relax in this room where every detail is considered for your comfort.",
    shortDescription: "İki ayrı yataklı, geniş ve ferah suite konforu.",
    shortDescriptionEn: "Spacious and airy suite comfort with two separate beds.",
    size: 35,
    capacity: { adults: 2, children: 1 },
    bedType: "2 Tek Kişilik Yatak",
    bedTypeEn: "2 Single Beds",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Çalışma Masası"],
    amenitiesEn: ["Free Wi-Fi", "Air Conditioning", "Minibar", "Safe", "Smart TV", "Premium Toiletries", "Work Desk"],
    coverImage: "/assets/images/rooms/302_oda_4.webp",
    images: [
      { url: "/assets/images/rooms/302_oda_4.webp", alt: "Junior Suite Twin" },
      { url: "/assets/images/rooms/302_oda_2.webp", alt: "Twin Beds" },
      { url: "/assets/images/rooms/302_oda_6.webp", alt: "Room View" },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Bathroom" },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Amenities" },
      { url: "/assets/images/general/otel_genel_20.webp", alt: "Details" },
      { url: "/assets/images/general/otel_genel_21.webp", alt: "Atmosphere" }
    ]
  },
  {
    id: "family-suite",
    slug: "family-suite-connected",
    name: "Family Suite Connected",
    nameEn: "Family Suite Connected",
    shortName: "Family Suite",
    shortNameEn: "Family Suite",
    description: "Aileler için özel olarak tasarlanan bağlantılı odalarımızda, hem bir arada olmanın keyfini çıkarın hem de özel alanınızı koruyun. İki ayrı oda, geniş banyolar ve ev konforunda bir deneyim.",
    descriptionEn: "In our connected rooms designed specifically for families, enjoy being together while protecting your private space. Two separate rooms, large bathrooms and an experience in home comfort.",
    shortDescription: "Geniş aileler için bağlantılı odalar, ev konforunda geniş alan.",
    shortDescriptionEn: "Connected rooms for large families, large space in home comfort.",
    size: 55,
    capacity: { adults: 4, children: 2 },
    bedType: "1 Çift + 2 Tek Yatak",
    bedTypeEn: "1 Double + 2 Single Beds",
    amenities: ["Ücretsiz Wi-Fi", "2 x Klima", "2 x Minibar", "Kasa", "2 x Akıllı TV", "Premium Banyo Malzemeleri", "Geniş Oturma Alanı"],
    amenitiesEn: ["Free Wi-Fi", "2 x Air Conditioning", "2 x Minibar", "Safe", "2 x Smart TV", "Premium Toiletries", "Large Sitting Area"],
    coverImage: "/assets/images/rooms/2.kat_2_5-1.webp",
    images: [
      { url: "/assets/images/rooms/2.kat_2_5-1.webp", alt: "Family Suite" },
      { url: "/assets/images/rooms/2.kat_2_3.webp", alt: "Bedroom 1" },
      { url: "/assets/images/rooms/2.kat_2_4.webp", alt: "Bedroom 2" },
      { url: "/assets/images/rooms/IMG_1101.webp", alt: "Bathroom" },
      { url: "/assets/images/general/otel_genel_20.webp", alt: "Hallway" },
      { url: "/assets/images/rooms/IMG_1105.webp", alt: "Amenities" },
      { url: "/assets/images/general/otel_genel_13.webp", alt: "Decor" }
    ]
  }
];

import galataTower from '@assets/stock_images/galata_tower_istanbu_5b2197de.jpg';
import blueMosque from '@assets/stock_images/blue_mosque_sultanah_cf28c2fc.jpg';
import basilicaCistern from '@assets/stock_images/basilica_cistern_ist_bcddf85b.jpg';
import hagiaSophia from '@assets/stock_images/hagia_sophia_istanbu_b8b5dc4e.jpg';
import topkapiPalace from '@assets/stock_images/topkapi_palace_istan_54d0f61b.jpg';
import dolmabahcePalace from '@assets/stock_images/dolmabahce_palace_is_aa2d148d.jpg';
import grandBazaar from '@assets/stock_images/grand_bazaar_istanbu_7aa32030.jpg';
import istiklalStreet from '@assets/stock_images/istiklal_street_ista_0822a274.jpg';
import spiceBazaar from '@assets/stock_images/spice_bazaar_istanbu_8eefd351.jpg';

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
