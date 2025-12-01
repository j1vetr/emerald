
// Room Types Data
export interface RoomImage {
  url: string;
  alt: string;
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  shortDescription: string;
  priceStart?: number;
  size: number; // m2
  capacity: {
    adults: number;
    children: number;
  };
  bedType: string;
  amenities: string[];
  images: RoomImage[];
  coverImage: string;
}

export const hotelInfo = {
  name: "Emerald Mansion",
  location: "Sultanahmet, İstanbul",
  address: "Binbirdirek Mah. Boyacı Ahmet Sk. No: 8, Sultanahmet / Fatih / İstanbul",
  email: "info@emeraldmansion.com",
  bookingUrl: "https://emerald-mansion.rezervasyonal.com",
  logoUrl: "https://emeraldmansion.com/wp-content/uploads/2025/02/Emerald-Logo_3.svg"
};

export const rooms: Room[] = [
  {
    id: "comfort-single",
    slug: "comfort-single",
    name: "Comfort Single Room",
    shortName: "Comfort Single",
    description: "Yalnız seyahat edenler için tasarlanan Comfort Single odalarımız, Sultanahmet'in tarihi dokusunu modern bir konforla birleştiriyor. Osmanlı motiflerinin zarif dokunuşlarıyla bezenmiş bu odada, günün yorgunluğunu atabileceğiniz huzurlu bir atmosfer sizi bekliyor.",
    shortDescription: "Tarihi yarımadada huzurlu ve konforlu bir tek kişilik konaklama deneyimi.",
    size: 18,
    capacity: { adults: 1, children: 0 },
    bedType: "1 Tek Kişilik Yatak",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Saç Kurutma Makinesi"],
    coverImage: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/2.kat_4-1024x683.jpg.webp",
    images: [
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/2.kat_4-1024x683.jpg.webp", alt: "Comfort Single Room View" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/2.kat_3-1024x683.jpg.webp", alt: "Comfort Single Room Detail" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1101-1024x683.jpg.webp", alt: "Bathroom" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1105-1024x683.jpg.webp", alt: "Amenities" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_17-576x1024.jpg.webp", alt: "Room Interior" }
    ]
  },
  {
    id: "comfort-double",
    slug: "comfort-double",
    name: "Comfort Double Room",
    shortName: "Comfort Double",
    description: "Çiftler için ideal olan Comfort Double odalarımız, geniş yaşam alanı ve şık dekorasyonuyla dikkat çekiyor. Yüksek tavanlar ve tarihi mimari detaylar, konaklamanızı unutulmaz bir İstanbul masalına dönüştürüyor.",
    shortDescription: "Çiftler için şık, ferah ve tarihi dokuya sahip konforlu bir oda.",
    size: 25,
    capacity: { adults: 2, children: 1 },
    bedType: "1 Çift Kişilik Yatak",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Çay/Kahve Seti"],
    coverImage: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/301_oda_2-1024x683.jpg.webp",
    images: [
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/301_oda_2-1024x683.jpg.webp", alt: "Comfort Double Room" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/301_oda_1_3-1024x683.jpg.webp", alt: "Comfort Double Detail" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1101-1024x683.jpg.webp", alt: "Bathroom" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1105-1024x683.jpg.webp", alt: "Amenities" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_17-576x1024.jpg.webp", alt: "Room Ambiance" }
    ]
  },
  {
    id: "superior-king",
    slug: "superior-king-bed",
    name: "Superior King Bed Room",
    shortName: "Superior King",
    description: "Geniş King yatak ve lüks detaylarla donatılmış Superior odamızda konforu en üst düzeyde yaşayın. Şehrin tarihine tanıklık eden pencerelerden süzülen ışıkla güne uyanın.",
    shortDescription: "Ekstra geniş yatak ve premium detaylarla üst düzey konfor.",
    size: 30,
    capacity: { adults: 2, children: 1 },
    bedType: "1 King Size Yatak",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Oturma Alanı", "Espresso Makinesi"],
    coverImage: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/303_oda_3-1024x683.jpg.webp",
    images: [
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/303_oda_3-1024x683.jpg.webp", alt: "Superior King Room" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/303_oda_2-1024x683.jpg.webp", alt: "Superior King Detail" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1101-1024x683.jpg.webp", alt: "Bathroom" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1105-1024x683.jpg.webp", alt: "Amenities" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_13-683x1024.jpg.webp", alt: "Interior" }
    ]
  },
  {
    id: "junior-suite-king",
    slug: "junior-suite-king-bed",
    name: "Junior Suite King Bed",
    shortName: "Junior Suite King",
    description: "Junior Suite King odamız, ferahlığı ve zarafeti bir arada sunuyor. Özel oturma alanı, geniş banyosu ve tarihi dokuya saygılı modern tasarımıyla kendinizi özel hissedeceksiniz.",
    shortDescription: "Oturma alanı ve geniş yaşam alanıyla lüks bir suite deneyimi.",
    size: 35,
    capacity: { adults: 3, children: 1 },
    bedType: "1 King Size Yatak + Sofa",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Oturma Grubu", "Bornoz & Terlik"],
    coverImage: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/305_oda_1-1024x683.jpg.webp",
    images: [
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/305_oda_1-1024x683.jpg.webp", alt: "Junior Suite King" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/304_oda_6-1024x683.jpg.webp", alt: "Living Area" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/304_oda_1-1024x683.jpg.webp", alt: "Bedroom" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/304_oda_4-1024x683.jpg.webp", alt: "Detail" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1101-1024x683.jpg.webp", alt: "Bathroom" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1105-1024x683.jpg.webp", alt: "Amenities" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_21-576x1024.jpg.webp", alt: "Suite Ambience" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_19-576x1024.jpg.webp", alt: "Decor" }
    ]
  },
  {
    id: "junior-suite-twin",
    slug: "junior-suite-twin-bed",
    name: "Junior Suite Twin Bed",
    shortName: "Junior Suite Twin",
    description: "Arkadaş grupları veya iş seyahatleri için mükemmel olan Junior Suite Twin, iki ayrı yatak ve geniş kullanım alanı sunuyor. Konforunuz için her detayın düşünüldüğü bu odada rahatlayın.",
    shortDescription: "İki ayrı yataklı, geniş ve ferah suite konforu.",
    size: 35,
    capacity: { adults: 2, children: 1 },
    bedType: "2 Tek Kişilik Yatak",
    amenities: ["Ücretsiz Wi-Fi", "Klima", "Minibar", "Kasa", "Akıllı TV", "Premium Banyo Malzemeleri", "Çalışma Masası"],
    coverImage: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/302_oda_4-1024x683.jpg.webp",
    images: [
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/302_oda_4-1024x683.jpg.webp", alt: "Junior Suite Twin" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/302_oda_2-1024x683.jpg.webp", alt: "Twin Beds" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/302_oda_6-1024x683.jpg.webp", alt: "Room View" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1101-1024x683.jpg.webp", alt: "Bathroom" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1105-1024x683.jpg.webp", alt: "Amenities" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_20-576x1024.jpg.webp", alt: "Details" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_21-576x1024.jpg.webp", alt: "Atmosphere" }
    ]
  },
  {
    id: "family-suite",
    slug: "family-suite-connected",
    name: "Family Suite Connected",
    shortName: "Family Suite",
    description: "Aileler için özel olarak tasarlanan bağlantılı odalarımızda, hem bir arada olmanın keyfini çıkarın hem de özel alanınızı koruyun. İki ayrı oda, geniş banyolar ve ev konforunda bir deneyim.",
    shortDescription: "Geniş aileler için bağlantılı odalar, ev konforunda geniş alan.",
    size: 55,
    capacity: { adults: 4, children: 2 },
    bedType: "1 Çift + 2 Tek Yatak",
    amenities: ["Ücretsiz Wi-Fi", "2 x Klima", "2 x Minibar", "Kasa", "2 x Akıllı TV", "Premium Banyo Malzemeleri", "Geniş Oturma Alanı"],
    coverImage: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/2.kat_2_5-1-1024x683.jpg.webp",
    images: [
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/2.kat_2_5-1-1024x683.jpg.webp", alt: "Family Suite" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/2.kat_2_3-1024x683.jpg.webp", alt: "Bedroom 1" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/2.kat_2_4-1024x683.jpg.webp", alt: "Bedroom 2" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1101-1024x683.jpg.webp", alt: "Bathroom" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_20-576x1024.jpg.webp", alt: "Hallway" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/04/IMG_1105-1024x683.jpg.webp", alt: "Amenities" },
      { url: "https://emeraldmansion.com/wp-content/webp-express/webp-images/uploads/2025/02/otel_genel_13-683x1024.jpg.webp", alt: "Decor" }
    ]
  }
];

export const attractions = [
  {
    name: "Galata Kulesi",
    description: "İstanbul'un en ikonik simgelerinden biri olan Galata Kulesi, 67 metre yüksekliğiyle şehre panoramik bir bakış sunar. Cenevizliler tarafından 1348 yılında inşa edilen kule, tarihi boyunca gözetleme kulesi ve zindan olarak kullanılmıştır.",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sultanahmet Camii",
    description: "Mavi çinileriyle 'Blue Mosque' olarak da bilinen bu muazzam eser, 17. yüzyıl Osmanlı mimarisinin en zarif örneklerinden biridir. Altı minaresi ve devasa kubbesiyle İstanbul silüetinin vazgeçilmez bir parçasıdır.",
    image: "https://images.unsplash.com/photo-1545459720-aacaf5090834?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Yerebatan Sarnıcı",
    description: "Bizans İmparatoru I. Justinianus tarafından yaptırılan bu büyüleyici yeraltı sarnıcı, suyun içinden yükselen 336 mermer sütunuyla mistik bir atmosfere sahiptir. Medusa başları sarnıcın en ilgi çekici detaylarındandır.",
    image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ayasofya-i Kebir Camii",
    description: "Dünya mimarlık tarihinin en önemli anıtlarından biri olan Ayasofya, 1500 yıllık tarihiyle büyüleyicidir. Bizans ve Osmanlı mimarisinin eşsiz sentezini sunan yapı, devasa kubbesiyle hayranlık uyandırır.",
    image: "https://images.unsplash.com/photo-1564594736624-def7a10ab047?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Topkapı Sarayı",
    description: "Osmanlı İmparatorluğu'nun 400 yıl boyunca yönetim merkezi olan saray, muhteşem avluları, Harem dairesi ve Kutsal Emanetler bölümüyle tarihe ışık tutar. Sarayburnu'ndaki eşsiz konumuyla boğaz manzarasına hakimdir.",
    image: "https://images.unsplash.com/photo-1599583072846-a93311191213?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dolmabahçe Sarayı",
    description: "19. yüzyılda inşa edilen bu barok ve neoklasik tarzdaki saray, Osmanlı'nın modern yüzünü temsil eder. Mustafa Kemal Atatürk'ün de son günlerini geçirdiği saray, kristal avizeleri ve görkemli salonlarıyla ünlüdür.",
    image: "https://images.unsplash.com/photo-1584557741728-1501c956707c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Kapalıçarşı",
    description: "Dünyanın en eski ve en büyük kapalı çarşılarından biri olan Kapalıçarşı, binlerce dükkanıyla alışveriş tutkunlarının uğrak noktasıdır. Takı, halı, baharat ve hediyelik eşya için eşsiz bir duraktır.",
    image: "https://images.unsplash.com/photo-1595759393243-c4dfc37249e7?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "İstiklal Caddesi",
    description: "Beyoğlu'nun kalbi olan İstiklal Caddesi, tarihi tramvayı, mağazaları, kafeleri ve sanat galerileriyle 24 saat yaşayan bir caddedir. İstanbul'un modern ve kozmopolit yüzünü yansıtır.",
    image: "https://images.unsplash.com/photo-1597987890764-4df4b5574c0a?auto=format&fit=crop&w=800&q=80"
  }
];
