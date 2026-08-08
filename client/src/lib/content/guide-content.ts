// Bilingual content for the Istanbul guide cluster pages.
// Walking distances and times match the attractions data in constants.ts.
// Entry fees and opening hours change often, so the copy points readers to
// official websites instead of quoting figures that can go stale.

import type { GuideKey, Lang } from "@/lib/seo";
import hagiaSophiaImg from "@assets/stock_images/hagia_sophia_istanbu_b8b5dc4e.webp";
import blueMosqueImg from "@assets/stock_images/blue_mosque_sultanah_cf28c2fc.webp";
import grandBazaarImg from "@assets/stock_images/grand_bazaar_istanbu_7aa32030.webp";
import basilicaCisternImg from "@assets/stock_images/basilica_cistern_ist_bcddf85b.webp";
import topkapiPalaceImg from "@assets/stock_images/topkapi_palace_istan_54d0f61b.webp";
import spiceBazaarImg from "@assets/stock_images/spice_bazaar_istanbu_8eefd351.webp";
import galataTowerImg from "@assets/stock_images/galata_tower_istanbu_5b2197de.webp";
import dolmabahcePalaceImg from "@assets/stock_images/dolmabahce_palace_is_aa2d148d.webp";

export interface GuideFaqItem {
  q: string;
  a: string;
}

export interface GuideCopy {
  name: string;
  heroAlt: string;
  tagline: string;
  intro: string[];
  whatToSee: { heading: string; items: { title: string; text: string }[] };
  fromHotel: { heading: string; paragraphs: string[] };
  tips: { heading: string; items: string[] };
  faq: GuideFaqItem[];
}

export interface GuideDef {
  key: GuideKey;
  image: string;
  distance: string;
  walkTime: Record<Lang, string>;
  copy: Record<Lang, GuideCopy>;
}

/** Shared UI labels for the guide template */
export const guideUi: Record<
  Lang,
  {
    breadcrumbGuide: string;
    fromHotelBadge: string;
    faqHeading: string;
    nearbyHeading: string;
    nearbyIntro: string;
    sultanahmetLinkLabel: string;
    ctaTitle: string;
    ctaText: string;
    ctaRooms: string;
    ctaLocation: string;
    officialNote: string;
  }
> = {
  en: {
    breadcrumbGuide: "Istanbul Guide",
    fromHotelBadge: "from Emerald Mansion",
    faqHeading: "Frequently Asked Questions",
    nearbyHeading: "More to Explore Nearby",
    nearbyIntro:
      "Sultanahmet rewards slow walking. These landmarks are all within a short stroll of each other, so you can easily combine two or three in a single day.",
    sultanahmetLinkLabel: "Read our full Sultanahmet guide",
    ctaTitle: "Stay Steps Away",
    ctaText:
      "Emerald Mansion is a boutique hotel in the heart of Sultanahmet. Wake up minutes from the landmarks of the Old City and explore them before the crowds arrive.",
    ctaRooms: "See Rooms & Suites",
    ctaLocation: "Our Location",
    officialNote:
      "Opening hours and ticket prices change through the year. Please check the official website before your visit.",
  },
  tr: {
    breadcrumbGuide: "İstanbul Rehberi",
    fromHotelBadge: "Emerald Mansion'dan",
    faqHeading: "Sıkça Sorulan Sorular",
    nearbyHeading: "Yakında Keşfedilecek Yerler",
    nearbyIntro:
      "Sultanahmet yavaş yürüyüşü ödüllendirir. Bu tarihi yapılar birbirine kısa yürüyüş mesafesindedir ve aynı gün içinde iki üç durağı rahatça birleştirebilirsiniz.",
    sultanahmetLinkLabel: "Kapsamlı Sultanahmet rehberimizi okuyun",
    ctaTitle: "Birkaç Adım Ötesinde Konaklayın",
    ctaText:
      "Emerald Mansion Sultanahmet'in kalbinde bir butik oteldir. Tarihi yarımadanın simge yapılarına dakikalar mesafesinde uyanın ve kalabalıklar gelmeden keşfe başlayın.",
    ctaRooms: "Odalar ve Süitler",
    ctaLocation: "Konumumuz",
    officialNote:
      "Açılış saatleri ve bilet ücretleri yıl içinde değişebilir. Ziyaretinizden önce lütfen resmi web sitesini kontrol edin.",
  },
};

export const guides: GuideDef[] = [
  {
    key: "hagia-sophia",
    image: hagiaSophiaImg,
    distance: "400 m",
    walkTime: { en: "5 min walk", tr: "5 dk yürüyüş" },
    copy: {
      en: {
        name: "Hagia Sophia",
        heroAlt: "Hagia Sophia in Istanbul seen from Sultanahmet Square",
        tagline: "Fifteen centuries of history under one dome",
        intro: [
          "Hagia Sophia is one of the most remarkable buildings ever raised. Completed in 537 under Byzantine Emperor Justinian I, it served as the largest cathedral in the world for almost a thousand years, later became an imperial mosque of the Ottoman Empire, spent decades as a museum and today welcomes visitors as a working mosque.",
          "Standing beneath the vast central dome, you see layers of two empires at once. Golden Byzantine mosaics share the space with Ottoman calligraphy medallions, marble columns gathered from across the ancient world and light that shifts across the interior through rings of arched windows. No photograph prepares you for the scale of it.",
        ],
        whatToSee: {
          heading: "What to See Inside",
          items: [
            {
              title: "The Great Dome",
              text: "Rising about 55 meters above the floor, the dome was an engineering marvel of its age and still defines the skyline of the Old City.",
            },
            {
              title: "Byzantine Mosaics",
              text: "Look for the surviving gold ground mosaics in the upper galleries and above the imperial gate, including depictions of Christ, emperors and empresses.",
            },
            {
              title: "Ottoman Additions",
              text: "The mihrab, the minbar, the sultan's loge and the eight giant calligraphy roundels show how the building lived on as a mosque after 1453.",
            },
            {
              title: "The Marble Door and Wishing Column",
              text: "Small details carry legends of their own. The bronze clad column near the northwest corner has been touched by visitors for centuries.",
            },
          ],
        },
        fromHotel: {
          heading: "Getting There from Emerald Mansion",
          paragraphs: [
            "Hagia Sophia is about 400 meters from Emerald Mansion, an easy 5 minute walk through the quiet lanes of Sultanahmet. Head toward Sultanahmet Square and the domes and minarets guide you the rest of the way. No tram, taxi or transfer is needed.",
            "Because the hotel is this close, you can arrive right at opening time before tour groups fill the square, or return for a second look in the evening when the building is beautifully lit.",
          ],
        },
        tips: {
          heading: "Visiting Tips",
          items: [
            "Hagia Sophia is an active mosque. Dress modestly, with shoulders and knees covered, and women should bring a headscarf.",
            "Visits pause during the five daily prayer times. Plan around them, especially the midday prayer on Fridays.",
            "Early morning is the calmest time to visit. Crowds build quickly from mid morning onward.",
            "Opening arrangements and entry rules for foreign visitors change from time to time, so check the official website before you go.",
            "Combine your visit with the Basilica Cistern, which is just across the square.",
          ],
        },
        faq: [
          {
            q: "How far is Hagia Sophia from Emerald Mansion?",
            a: "Hagia Sophia is about 400 meters from the hotel, roughly a 5 minute walk through Sultanahmet.",
          },
          {
            q: "Is Hagia Sophia open to non-Muslim visitors?",
            a: "Yes. Hagia Sophia functions as a mosque and welcomes visitors of all backgrounds outside prayer times. Entry arrangements for foreign visitors can change, so check the official website before your visit.",
          },
          {
            q: "What should I wear to visit Hagia Sophia?",
            a: "Modest clothing is required. Shoulders and knees should be covered and women need a headscarf inside the prayer hall.",
          },
          {
            q: "How much time should I plan for Hagia Sophia?",
            a: "Most visitors spend between 45 minutes and an hour and a half inside, depending on how deeply they explore the galleries and mosaics.",
          },
        ],
      },
      tr: {
        name: "Ayasofya",
        heroAlt: "Sultanahmet Meydanı'ndan Ayasofya'nın görünümü",
        tagline: "Tek kubbe altında on beş asırlık tarih",
        intro: [
          "Ayasofya dünya mimarlık tarihinin en etkileyici yapılarından biridir. 537 yılında Bizans İmparatoru I. Justinianus döneminde tamamlanan yapı, yaklaşık bin yıl boyunca dünyanın en büyük katedrali olarak hizmet verdi. Daha sonra Osmanlı İmparatorluğu'nun saltanat camisi oldu, uzun yıllar müze olarak kullanıldı ve bugün cami olarak ziyaretçilerini ağırlıyor.",
          "Devasa ana kubbenin altında durduğunuzda iki imparatorluğun katmanlarını aynı anda görürsünüz. Altın zeminli Bizans mozaikleri, Osmanlı hat levhaları, antik dünyanın dört bir yanından getirilen mermer sütunlar ve kemerli pencerelerden süzülen ışık aynı mekanı paylaşır. Hiçbir fotoğraf bu ölçeğe sizi hazırlayamaz.",
        ],
        whatToSee: {
          heading: "İçeride Görülecekler",
          items: [
            {
              title: "Ana Kubbe",
              text: "Zeminden yaklaşık 55 metre yükselen kubbe, çağının mühendislik harikasıydı ve bugün hala tarihi yarımadanın siluetini belirliyor.",
            },
            {
              title: "Bizans Mozaikleri",
              text: "Üst galerilerde ve imparator kapısının üzerinde günümüze ulaşan altın zeminli mozaikleri arayın. İsa, imparator ve imparatoriçe tasvirleri burada yer alır.",
            },
            {
              title: "Osmanlı Eklemeleri",
              text: "Mihrap, minber, hünkar mahfili ve sekiz dev hat levhası, yapının 1453 sonrasında cami olarak nasıl yaşadığını gösterir.",
            },
            {
              title: "Mermer Kapı ve Dilek Sütunu",
              text: "Küçük detayların kendi efsaneleri vardır. Kuzeybatı köşedeki bronz kaplı sütuna yüzyıllardır ziyaretçiler dokunuyor.",
            },
          ],
        },
        fromHotel: {
          heading: "Emerald Mansion'dan Ulaşım",
          paragraphs: [
            "Ayasofya, Emerald Mansion'a yaklaşık 400 metre mesafededir. Sultanahmet'in sakin sokaklarından 5 dakikalık keyifli bir yürüyüşle ulaşırsınız. Sultanahmet Meydanı yönünde ilerlediğinizde kubbeler ve minareler size yolu gösterir. Tramvaya, taksiye veya transfere gerek yoktur.",
            "Otel bu kadar yakın olduğu için tur grupları meydanı doldurmadan açılış saatinde kapıda olabilir, akşam ışıklandırması için ikinci kez dönebilirsiniz.",
          ],
        },
        tips: {
          heading: "Ziyaret İpuçları",
          items: [
            "Ayasofya aktif bir camidir. Omuzları ve dizleri örten kıyafetler tercih edin, kadın ziyaretçiler başörtüsü bulundurmalıdır.",
            "Günde beş vakit namaz sırasında ziyaretlere ara verilir. Özellikle cuma öğle namazını planlamanıza dahil edin.",
            "En sakin ziyaret saati sabahın erken saatleridir. Kalabalık kuşluk vaktinden itibaren hızla artar.",
            "Yabancı ziyaretçiler için giriş düzenlemeleri zaman zaman değişebilir. Gitmeden önce resmi web sitesini kontrol edin.",
            "Ziyaretinizi meydanın hemen karşısındaki Yerebatan Sarnıcı ile birleştirebilirsiniz.",
          ],
        },
        faq: [
          {
            q: "Ayasofya Emerald Mansion'a ne kadar uzaklıkta?",
            a: "Ayasofya otele yaklaşık 400 metre mesafededir. Sultanahmet içinden 5 dakikalık bir yürüyüşle ulaşılır.",
          },
          {
            q: "Ayasofya'yı Müslüman olmayan ziyaretçiler gezebilir mi?",
            a: "Evet. Ayasofya cami olarak hizmet verir ve namaz vakitleri dışında her inançtan ziyaretçiyi ağırlar. Yabancı ziyaretçiler için giriş düzenlemeleri değişebildiğinden resmi web sitesini kontrol edin.",
          },
          {
            q: "Ayasofya ziyaretinde nasıl giyinmeliyim?",
            a: "Sade ve kapalı kıyafet gerekir. Omuzlar ve dizler örtülü olmalı, kadınlar ibadet alanında başörtüsü kullanmalıdır.",
          },
          {
            q: "Ayasofya için ne kadar süre ayırmalıyım?",
            a: "Çoğu ziyaretçi galerileri ve mozaikleri inceleme derinliğine göre içeride 45 dakika ile bir buçuk saat arasında vakit geçirir.",
          },
        ],
      },
    },
  },
  {
    key: "blue-mosque",
    image: blueMosqueImg,
    distance: "250 m",
    walkTime: { en: "3 min walk", tr: "3 dk yürüyüş" },
    copy: {
      en: {
        name: "Blue Mosque",
        heroAlt: "Blue Mosque with its six minarets in Sultanahmet Istanbul",
        tagline: "Six minarets and a sea of blue Iznik tiles",
        intro: [
          "The Sultan Ahmed Mosque, known worldwide as the Blue Mosque, was built between 1609 and 1616 for Sultan Ahmed I. With its cascade of domes and six slender minarets it is the defining silhouette of Sultanahmet and one of the finest works of classical Ottoman architecture.",
          "The nickname comes from the interior. More than 20,000 handmade Iznik tiles in blues, greens and turquoise cover the walls, catching the light from over 200 stained glass windows. The mosque remains a place of daily worship, which makes visiting it feel alive rather than museum like.",
        ],
        whatToSee: {
          heading: "What to See",
          items: [
            {
              title: "The Iznik Tiles",
              text: "The lower galleries carry the richest tilework, with tulip, carnation and cypress motifs produced in the famous kilns of Iznik.",
            },
            {
              title: "The Six Minarets",
              text: "A rarity in Ottoman architecture. Legend says the sultan asked for gold minarets, altin in Turkish, and the architect heard alti, meaning six.",
            },
            {
              title: "The Courtyard",
              text: "The vast marble forecourt is as large as the mosque itself and offers one of the best photo angles toward the domes at sunset.",
            },
            {
              title: "Sultanahmet Square",
              text: "The mosque faces Hagia Sophia across the old Hippodrome, where the Egyptian Obelisk and the Serpent Column still stand.",
            },
          ],
        },
        fromHotel: {
          heading: "Getting There from Emerald Mansion",
          paragraphs: [
            "The Blue Mosque is the closest major landmark to Emerald Mansion, about 250 meters away. The walk takes roughly 3 minutes, which means you can hear the call to prayer from the hotel and be in the courtyard moments later.",
            "Staying this close lets you visit at quiet times, right after opening or between prayers, when the interior is at its most peaceful.",
          ],
        },
        tips: {
          heading: "Visiting Tips",
          items: [
            "Entry is free. The mosque closes to visitors during the five daily prayers and on Friday around midday prayer.",
            "Dress modestly. Shoulders and knees must be covered and women need a headscarf. Wraps are available at the entrance.",
            "You will remove your shoes before entering. Plastic bags are provided, or bring your own tote.",
            "Visit early in the morning or late afternoon for softer light and thinner crowds.",
            "Photography is welcome, but avoid photographing worshippers during prayer.",
          ],
        },
        faq: [
          {
            q: "How far is the Blue Mosque from Emerald Mansion?",
            a: "About 250 meters. It is a 3 minute walk from the hotel, the closest major landmark to our door.",
          },
          {
            q: "Is there an entry fee for the Blue Mosque?",
            a: "No. Entry is free for all visitors. Donations are optional.",
          },
          {
            q: "When is the Blue Mosque closed to visitors?",
            a: "The mosque closes to tourists during the five daily prayer times and for a longer period around Friday midday prayer. Outside those windows it is open through the day.",
          },
          {
            q: "Why is it called the Blue Mosque?",
            a: "The name comes from the more than 20,000 blue toned Iznik tiles that decorate the interior walls and domes.",
          },
        ],
      },
      tr: {
        name: "Sultanahmet Camii",
        heroAlt: "Altı minaresiyle Sultanahmet Camii",
        tagline: "Altı minare ve mavi İznik çinilerinden bir deniz",
        intro: [
          "Dünyada Blue Mosque adıyla tanınan Sultanahmet Camii, 1609 ile 1616 yılları arasında Sultan I. Ahmed için inşa edildi. Kademeli kubbeleri ve altı zarif minaresiyle Sultanahmet siluetinin simgesi ve klasik Osmanlı mimarisinin en seçkin eserlerinden biridir.",
          "Ünlü takma adı iç mekandan gelir. Mavi, yeşil ve turkuaz tonlarında 20.000'den fazla el yapımı İznik çinisi duvarları kaplar ve 200'ü aşkın vitray pencereden süzülen ışıkla parlar. Cami bugün de ibadete açıktır ve bu canlılık ziyareti müze gezisinden çok daha etkileyici kılar.",
        ],
        whatToSee: {
          heading: "Görülecekler",
          items: [
            {
              title: "İznik Çinileri",
              text: "En zengin çini işçiliği alt galerilerdedir. Lale, karanfil ve servi motifleri ünlü İznik fırınlarında üretilmiştir.",
            },
            {
              title: "Altı Minare",
              text: "Osmanlı mimarisinde bir istisnadır. Efsaneye göre padişah altın minare istemiş, mimar ise altı olarak anlamıştır.",
            },
            {
              title: "Avlu",
              text: "Mermer dış avlu caminin kendisi kadar geniştir ve gün batımında kubbelere doğru en güzel fotoğraf açılarından birini sunar.",
            },
            {
              title: "Sultanahmet Meydanı",
              text: "Cami, eski Hipodrom boyunca Ayasofya'ya bakar. Dikilitaş ve Yılanlı Sütun bugün hala buradadır.",
            },
          ],
        },
        fromHotel: {
          heading: "Emerald Mansion'dan Ulaşım",
          paragraphs: [
            "Sultanahmet Camii, Emerald Mansion'a en yakın büyük tarihi yapıdır ve yaklaşık 250 metre mesafededir. Yürüyüş yalnızca 3 dakika sürer. Ezanı otelden duyup birkaç dakika içinde avluda olabilirsiniz.",
            "Bu kadar yakın konaklamak, açılıştan hemen sonra veya namaz vakitleri arasında iç mekanın en huzurlu olduğu saatlerde ziyaret etme özgürlüğü verir.",
          ],
        },
        tips: {
          heading: "Ziyaret İpuçları",
          items: [
            "Giriş ücretsizdir. Cami beş vakit namaz sırasında ve cuma öğle namazı civarında ziyarete kapanır.",
            "Kapalı kıyafet tercih edin. Omuzlar ve dizler örtülü olmalı, kadınlar başörtüsü kullanmalıdır. Girişte örtü temin edilebilir.",
            "İçeri girmeden önce ayakkabılarınızı çıkarırsınız. Girişte poşet verilir, dilerseniz kendi çantanızı getirin.",
            "Daha yumuşak ışık ve az kalabalık için sabah erken veya öğleden sonra geç saatleri seçin.",
            "Fotoğraf çekmek serbesttir ancak namaz kılanları çekmekten kaçının.",
          ],
        },
        faq: [
          {
            q: "Sultanahmet Camii Emerald Mansion'a ne kadar uzaklıkta?",
            a: "Yaklaşık 250 metre. Otelden 3 dakikalık yürüyüş mesafesindedir ve kapımıza en yakın büyük tarihi yapıdır.",
          },
          {
            q: "Sultanahmet Camii'ne giriş ücretli mi?",
            a: "Hayır. Giriş tüm ziyaretçiler için ücretsizdir. Bağış yapmak isteğe bağlıdır.",
          },
          {
            q: "Cami ziyarete ne zaman kapalı?",
            a: "Cami beş vakit namaz sırasında ve cuma öğle namazı civarında daha uzun bir süre turist ziyaretine kapanır. Bu aralıklar dışında gün boyu açıktır.",
          },
          {
            q: "Neden Blue Mosque deniyor?",
            a: "Bu isim iç duvarları ve kubbeleri süsleyen 20.000'den fazla mavi tonlu İznik çinisinden gelir.",
          },
        ],
      },
    },
  },
  {
    key: "grand-bazaar",
    image: grandBazaarImg,
    distance: "700 m",
    walkTime: { en: "10 min walk", tr: "10 dk yürüyüş" },
    copy: {
      en: {
        name: "Grand Bazaar",
        heroAlt: "Vaulted shopping street inside the Grand Bazaar in Istanbul",
        tagline: "Over 4,000 shops under painted vaults since 1461",
        intro: [
          "The Grand Bazaar is one of the oldest and largest covered markets in the world. Founded shortly after the Ottoman conquest in the 15th century, it grew into a labyrinth of more than 60 streets and over 4,000 shops selling carpets, jewelry, ceramics, lanterns, leather, spices and antiques.",
          "Beyond the shopping, the bazaar is a living monument. Painted vaulted ceilings, centuries old hans hidden behind courtyard gates and the steady rhythm of tea trays weaving through the crowds make it an experience in itself, even if you never open your wallet.",
        ],
        whatToSee: {
          heading: "What to Look For",
          items: [
            {
              title: "The Old Bedesten",
              text: "The oldest core of the bazaar, home to antique dealers and the finest jewelry, locked behind its own gates each evening.",
            },
            {
              title: "Carpet and Kilim Shops",
              text: "Turkey's weaving tradition on full display. Take your time, accept the tea and compare before you decide.",
            },
            {
              title: "The Hans",
              text: "Historic caravanserais such as Zincirli Han hide quiet courtyards where craftsmen still work as they have for centuries.",
            },
            {
              title: "Painted Ceilings and Gates",
              text: "Look up. The restored vaults and the monumental Nuruosmaniye gate are among the most photographed corners of Istanbul.",
            },
          ],
        },
        fromHotel: {
          heading: "Getting There from Emerald Mansion",
          paragraphs: [
            "The Grand Bazaar is about 700 meters from Emerald Mansion, a 10 minute walk along Divanyolu, the historic main road of the Old City. You pass Ottoman tombs and the Cemberlitas column on the way, so the walk itself is a small tour.",
            "If you prefer the tram, the Beyazit Kapalicarsi stop is one stop from Sultanahmet, though most guests find walking faster and more enjoyable.",
          ],
        },
        tips: {
          heading: "Shopping Tips",
          items: [
            "Bargaining is expected and friendly. Start well below the first price and settle somewhere in the middle with a smile.",
            "The bazaar is closed on Sundays and on religious holidays. Check the official website for current hours.",
            "Cash in Turkish lira often earns a better price, though most shops accept cards.",
            "Note the gate number where you enter. With 21 gates and 60 streets, everyone gets lost at least once, which is part of the charm.",
            "For spices and Turkish delight, combine your visit with the Spice Bazaar in Eminonu, a 15 minute walk downhill.",
          ],
        },
        faq: [
          {
            q: "How far is the Grand Bazaar from Emerald Mansion?",
            a: "About 700 meters. The walk takes around 10 minutes along Divanyolu street, or you can ride the tram one stop to Beyazit.",
          },
          {
            q: "Is the Grand Bazaar open every day?",
            a: "The bazaar is closed on Sundays and during religious holidays. On other days it is open from morning until early evening. Check the official website for exact hours.",
          },
          {
            q: "Is bargaining expected in the Grand Bazaar?",
            a: "Yes. Bargaining is part of the culture and is done in a friendly spirit. Comparing a few shops before buying is completely normal.",
          },
          {
            q: "What is the Grand Bazaar famous for buying?",
            a: "Hand woven carpets and kilims, gold and silver jewelry, ceramics, lanterns, leather goods, textiles and antiques are the classic purchases.",
          },
        ],
      },
      tr: {
        name: "Kapalıçarşı",
        heroAlt: "Kapalıçarşı'nın kemerli alışveriş sokaklarından biri",
        tagline: "1461'den beri boyalı tonozların altında 4.000'i aşkın dükkan",
        intro: [
          "Kapalıçarşı dünyanın en eski ve en büyük kapalı çarşılarından biridir. 15. yüzyılda fetihten kısa süre sonra kurulan çarşı, zamanla 60'tan fazla sokak ve 4.000'i aşkın dükkandan oluşan bir labirente dönüştü. Halı, mücevher, seramik, fener, deri, baharat ve antika burada alıcısını bekler.",
          "Alışverişin ötesinde çarşı yaşayan bir anıttır. Boyalı tonozlu tavanlar, avlu kapılarının ardına gizlenmiş asırlık hanlar ve kalabalığın arasında süzülen çay tepsileri, cüzdanınızı hiç açmasanız bile başlı başına bir deneyim sunar.",
        ],
        whatToSee: {
          heading: "Nelere Bakmalı",
          items: [
            {
              title: "İç Bedesten",
              text: "Çarşının en eski çekirdeğidir. Antikacılar ve en değerli mücevherler her akşam kendi kapıları ardında kilitlenen bu bölümdedir.",
            },
            {
              title: "Halı ve Kilim Dükkanları",
              text: "Türk dokuma geleneği burada tüm zenginliğiyle sergilenir. Acele etmeyin, ikram edilen çayı kabul edin ve karar vermeden önce karşılaştırın.",
            },
            {
              title: "Hanlar",
              text: "Zincirli Han gibi tarihi kervansaraylar, zanaatkarların yüzyıllardır olduğu gibi çalıştığı sakin avlular saklar.",
            },
            {
              title: "Boyalı Tavanlar ve Kapılar",
              text: "Başınızı yukarı kaldırın. Restore edilmiş tonozlar ve anıtsal Nuruosmaniye kapısı İstanbul'un en çok fotoğraflanan köşelerindendir.",
            },
          ],
        },
        fromHotel: {
          heading: "Emerald Mansion'dan Ulaşım",
          paragraphs: [
            "Kapalıçarşı, Emerald Mansion'a yaklaşık 700 metre mesafededir. Tarihi yarımadanın ana yolu Divanyolu boyunca 10 dakikalık bir yürüyüşle ulaşırsınız. Yol üzerinde Osmanlı türbeleri ve Çemberlitaş sütunu geçtiğiniz için yürüyüşün kendisi küçük bir tur gibidir.",
            "Tramvayı tercih ederseniz Beyazıt Kapalıçarşı durağı Sultanahmet'ten yalnızca bir duraktır. Yine de çoğu misafirimiz yürümeyi hem daha hızlı hem daha keyifli bulur.",
          ],
        },
        tips: {
          heading: "Alışveriş İpuçları",
          items: [
            "Pazarlık beklenen ve dostane bir gelenektir. İlk fiyatın oldukça altından başlayın ve gülümseyerek ortada buluşun.",
            "Çarşı pazar günleri ve dini bayramlarda kapalıdır. Güncel saatler için resmi web sitesini kontrol edin.",
            "Türk lirası nakit ödeme çoğu zaman daha iyi fiyat sağlar ancak dükkanların büyük kısmı kart kabul eder.",
            "Girdiğiniz kapının numarasını not edin. 21 kapı ve 60 sokak arasında herkes en az bir kez kaybolur ve bu da çarşının cazibesinin parçasıdır.",
            "Baharat ve lokum için ziyaretinizi Eminönü'ndeki Mısır Çarşısı ile birleştirin. Yokuş aşağı 15 dakikalık bir yürüyüştür.",
          ],
        },
        faq: [
          {
            q: "Kapalıçarşı Emerald Mansion'a ne kadar uzaklıkta?",
            a: "Yaklaşık 700 metre. Divanyolu boyunca yürüyüş 10 dakika sürer. Dilerseniz tramvayla bir durak ilerideki Beyazıt'a gidebilirsiniz.",
          },
          {
            q: "Kapalıçarşı her gün açık mı?",
            a: "Çarşı pazar günleri ve dini bayramlarda kapalıdır. Diğer günlerde sabahtan akşamın erken saatlerine kadar açıktır. Kesin saatler için resmi web sitesini kontrol edin.",
          },
          {
            q: "Kapalıçarşı'da pazarlık yapılır mı?",
            a: "Evet. Pazarlık kültürün bir parçasıdır ve dostane bir havada yapılır. Satın almadan önce birkaç dükkanı karşılaştırmak son derece olağandır.",
          },
          {
            q: "Kapalıçarşı'dan ne alınır?",
            a: "El dokuması halı ve kilimler, altın ve gümüş takılar, seramik, fener, deri ürünler, tekstil ve antikalar klasik tercihlerdir.",
          },
        ],
      },
    },
  },
  {
    key: "basilica-cistern",
    image: basilicaCisternImg,
    distance: "350 m",
    walkTime: { en: "4 min walk", tr: "4 dk yürüyüş" },
    copy: {
      en: {
        name: "Basilica Cistern",
        heroAlt: "Illuminated columns of the Basilica Cistern in Istanbul",
        tagline: "A forest of 336 columns beneath the streets",
        intro: [
          "The Basilica Cistern is the largest of the hundreds of ancient cisterns that lie beneath Istanbul. Built in the 6th century under Emperor Justinian I, it once stored water for the Great Palace of the Byzantine emperors, carried by aqueducts from forests kilometers away.",
          "Descending the stone steps, you enter a dim underground hall where 336 marble columns rise from still water. Soft lighting, dripping echoes and carp gliding between the column bases give the cistern an atmosphere unlike anywhere else in the city. It is compact, otherworldly and easily one of the most memorable stops in Sultanahmet.",
        ],
        whatToSee: {
          heading: "What to See",
          items: [
            {
              title: "The Medusa Heads",
              text: "Two ancient Medusa heads serve as column bases in the far corner, one upside down and one sideways. Their origin remains a mystery.",
            },
            {
              title: "The Column Forest",
              text: "The columns were recycled from older temples across the empire, so no two capitals are quite alike.",
            },
            {
              title: "The Teardrop Column",
              text: "A column carved with peacock eye patterns, said to honor the workers who died during construction.",
            },
            {
              title: "Art Installations",
              text: "Since its restoration the cistern hosts contemporary sculptures and light works that play with the space's reflections.",
            },
          ],
        },
        fromHotel: {
          heading: "Getting There from Emerald Mansion",
          paragraphs: [
            "The Basilica Cistern is about 350 meters from Emerald Mansion, a 4 minute walk. The entrance sits just across from Hagia Sophia, so the two pair naturally in a single morning.",
            "Because the cistern is underground and cool, it is the perfect midday escape in summer when the sun is at its strongest.",
          ],
        },
        tips: {
          heading: "Visiting Tips",
          items: [
            "Buy tickets online through the official website to skip the queue, which can grow long in high season.",
            "Ticket prices and evening visit programs change, so check the official website before you go.",
            "The walkways can be damp. Wear shoes with decent grip.",
            "Photography is allowed. Low light rewards a steady hand or a fast lens, and tripods are not permitted.",
            "Plan 30 to 45 minutes. The cistern is atmospheric but compact.",
          ],
        },
        faq: [
          {
            q: "How far is the Basilica Cistern from Emerald Mansion?",
            a: "About 350 meters, a 4 minute walk. The entrance faces Hagia Sophia across the square.",
          },
          {
            q: "Why are the Medusa heads upside down?",
            a: "Nobody knows for certain. Theories range from practical reuse of old stone to a deliberate gesture to neutralize Medusa's gaze. The mystery is part of the appeal.",
          },
          {
            q: "How long does a visit to the Basilica Cistern take?",
            a: "Most visitors spend 30 to 45 minutes underground, enough to walk every platform and find both Medusa heads.",
          },
          {
            q: "Is the Basilica Cistern suitable for children?",
            a: "Yes. The elevated walkways are safe and children usually love the mysterious atmosphere and the fish in the water.",
          },
        ],
      },
      tr: {
        name: "Yerebatan Sarnıcı",
        heroAlt: "Yerebatan Sarnıcı'nın ışıklandırılmış sütunları",
        tagline: "Sokakların altında 336 sütunluk bir orman",
        intro: [
          "Yerebatan Sarnıcı, İstanbul'un altında uzanan yüzlerce antik sarnıcın en büyüğüdür. 6. yüzyılda İmparator I. Justinianus döneminde inşa edilen sarnıç, kilometrelerce uzaktaki ormanlardan su kemerleriyle taşınan suyu Bizans imparatorlarının Büyük Sarayı için depolardı.",
          "Taş basamaklardan indiğinizde, durgun sudan yükselen 336 mermer sütunun bulunduğu loş bir yeraltı salonuna girersiniz. Yumuşak ışıklandırma, damla sesleri ve sütun kaideleri arasında süzülen sazanlar sarnıca şehirde eşi olmayan bir atmosfer kazandırır. Kompakt, masalsı ve Sultanahmet'in en akılda kalıcı duraklarından biridir.",
        ],
        whatToSee: {
          heading: "Görülecekler",
          items: [
            {
              title: "Medusa Başları",
              text: "En uzak köşede iki antik Medusa başı sütun kaidesi olarak kullanılır. Biri ters, diğeri yan durur ve kökenleri hala bir gizemdir.",
            },
            {
              title: "Sütun Ormanı",
              text: "Sütunlar imparatorluğun dört bir yanındaki eski tapınaklardan devşirilmiştir. Bu yüzden hiçbir sütun başlığı diğerinin aynısı değildir.",
            },
            {
              title: "Gözyaşı Sütunu",
              text: "Tavus kuşu gözü desenleriyle oyulmuş bu sütunun, inşaatta hayatını kaybeden işçileri andığı söylenir.",
            },
            {
              title: "Sanat Yerleştirmeleri",
              text: "Restorasyondan bu yana sarnıç, mekanın yansımalarıyla oynayan çağdaş heykellere ve ışık çalışmalarına ev sahipliği yapıyor.",
            },
          ],
        },
        fromHotel: {
          heading: "Emerald Mansion'dan Ulaşım",
          paragraphs: [
            "Yerebatan Sarnıcı, Emerald Mansion'a yaklaşık 350 metre mesafededir ve 4 dakikalık bir yürüyüşle ulaşılır. Girişi Ayasofya'nın hemen karşısındadır. Bu yüzden iki durak aynı sabaha kolayca sığar.",
            "Sarnıç yeraltında ve serin olduğu için yaz aylarında güneşin en yakıcı olduğu öğle saatlerinde mükemmel bir kaçış noktasıdır.",
          ],
        },
        tips: {
          heading: "Ziyaret İpuçları",
          items: [
            "Yoğun sezonda uzayabilen kuyruğu atlamak için biletinizi resmi web sitesinden önceden alın.",
            "Bilet ücretleri ve gece ziyaret programları değişebilir. Gitmeden önce resmi web sitesini kontrol edin.",
            "Yürüyüş platformları nemli olabilir. Kaymayan ayakkabılar tercih edin.",
            "Fotoğraf çekmek serbesttir. Düşük ışık sabit bir el veya aydınlık bir lens ister, tripod kullanımına izin verilmez.",
            "30 ile 45 dakika ayırın. Sarnıç atmosferik ancak kompakt bir yapıdır.",
          ],
        },
        faq: [
          {
            q: "Yerebatan Sarnıcı Emerald Mansion'a ne kadar uzaklıkta?",
            a: "Yaklaşık 350 metre, 4 dakikalık bir yürüyüş. Girişi meydanın karşısında Ayasofya'ya bakar.",
          },
          {
            q: "Medusa başları neden ters duruyor?",
            a: "Kimse kesin olarak bilmiyor. Teoriler eski taşın pratik yeniden kullanımından Medusa'nın bakışını etkisizleştirme amacına kadar uzanır. Bu gizem sarnıcın cazibesinin bir parçasıdır.",
          },
          {
            q: "Yerebatan Sarnıcı ziyareti ne kadar sürer?",
            a: "Çoğu ziyaretçi yeraltında 30 ile 45 dakika geçirir. Bu süre tüm platformları yürümek ve iki Medusa başını da bulmak için yeterlidir.",
          },
          {
            q: "Yerebatan Sarnıcı çocuklar için uygun mu?",
            a: "Evet. Yükseltilmiş yürüyüş yolları güvenlidir ve çocuklar gizemli atmosferi ve sudaki balıkları genellikle çok sever.",
          },
        ],
      },
    },
  },
  {
    key: "topkapi-palace",
    image: topkapiPalaceImg,
    distance: "800 m",
    walkTime: { en: "10 min walk", tr: "10 dk yürüyüş" },
    copy: {
      en: {
        name: "Topkapi Palace",
        heroAlt: "Courtyard and pavilions of Topkapi Palace in Istanbul",
        tagline: "Home of the Ottoman sultans for four centuries",
        intro: [
          "Topkapi Palace was the administrative heart of the Ottoman Empire and the residence of its sultans for around 400 years. Built by Mehmed the Conqueror after 1453 on a promontory overlooking the Bosphorus, the Golden Horn and the Sea of Marmara, it is less a single building than a small walled city of courtyards, kitchens, chambers and gardens.",
          "Today the palace is one of Turkey's great museums. Its collections include the treasury with the Topkapi Dagger and the Spoonmaker's Diamond, the Sacred Relics, imperial kaftans and porcelain, while the terraces offer some of the finest sea views in the Old City.",
        ],
        whatToSee: {
          heading: "What to See",
          items: [
            {
              title: "The Harem",
              text: "The private world of the imperial family, a maze of tiled corridors and chambers. It requires a separate ticket and rewards every lira.",
            },
            {
              title: "The Treasury",
              text: "Home of the emerald handled Topkapi Dagger and the 86 carat Spoonmaker's Diamond.",
            },
            {
              title: "The Sacred Relics",
              text: "Items attributed to the Prophet Muhammad and earlier prophets, displayed with continuous Quran recitation.",
            },
            {
              title: "The Fourth Courtyard Terraces",
              text: "Pavilions and gardens with sweeping views over the Bosphorus and the Golden Horn. Come here last and linger.",
            },
          ],
        },
        fromHotel: {
          heading: "Getting There from Emerald Mansion",
          paragraphs: [
            "Topkapi Palace is about 800 meters from Emerald Mansion, a 10 minute walk. Cross Sultanahmet Square, pass Hagia Sophia and follow the palace walls through the Imperial Gate into the first courtyard, where the ticket offices are.",
            "The walk passes the Fountain of Ahmed III and Hagia Irene, so leave a little early and enjoy the approach that sultans once rode through.",
          ],
        },
        tips: {
          heading: "Visiting Tips",
          items: [
            "The palace is closed on Tuesdays. Confirm current days and hours on the official website.",
            "Buy the combined ticket that includes the Harem. It is the most atmospheric part of the palace and queues are shorter online.",
            "Plan at least half a day. The four courtyards and collections cover a lot of ground.",
            "Arrive at opening time. The Harem and Treasury draw the longest lines by late morning.",
            "Wear comfortable shoes. Courtyards are cobbled and shade is limited in summer.",
          ],
        },
        faq: [
          {
            q: "How far is Topkapi Palace from Emerald Mansion?",
            a: "About 800 meters. The walk takes roughly 10 minutes through Sultanahmet Square and past Hagia Sophia.",
          },
          {
            q: "Is Topkapi Palace open every day?",
            a: "The palace is traditionally closed on Tuesdays. Days and hours can change with the season, so check the official website before your visit.",
          },
          {
            q: "Is the Harem worth the extra ticket?",
            a: "Yes. The Harem is the most intimate and beautifully tiled section of the palace and most visitors count it as the highlight.",
          },
          {
            q: "How much time should I plan for Topkapi Palace?",
            a: "Allow three to four hours to see the courtyards, the Treasury and the Harem without rushing. History lovers can easily spend a full day.",
          },
        ],
      },
      tr: {
        name: "Topkapı Sarayı",
        heroAlt: "Topkapı Sarayı'nın avlusu ve köşkleri",
        tagline: "Dört yüzyıl boyunca Osmanlı padişahlarının evi",
        intro: [
          "Topkapı Sarayı yaklaşık 400 yıl boyunca Osmanlı İmparatorluğu'nun yönetim merkezi ve padişahların konutuydu. Fatih Sultan Mehmed'in 1453 sonrasında Boğaz, Haliç ve Marmara Denizi'ne hakim bir burun üzerine inşa ettirdiği saray, tek bir binadan çok avlular, mutfaklar, daireler ve bahçelerden oluşan surlarla çevrili küçük bir şehirdir.",
          "Bugün saray Türkiye'nin en önemli müzelerinden biridir. Koleksiyonlarında Topkapı Hançeri ve Kaşıkçı Elması'nın bulunduğu hazine, Kutsal Emanetler, padişah kaftanları ve porselenler yer alır. Terasları ise tarihi yarımadanın en güzel deniz manzaralarından bazılarını sunar.",
        ],
        whatToSee: {
          heading: "Görülecekler",
          items: [
            {
              title: "Harem",
              text: "Hanedan ailesinin özel dünyası, çinili koridorlar ve dairelerden oluşan bir labirenttir. Ayrı bilet gerektirir ve her kuruşuna değer.",
            },
            {
              title: "Hazine",
              text: "Zümrüt kabzalı Topkapı Hançeri ve 86 kıratlık Kaşıkçı Elması burada sergilenir.",
            },
            {
              title: "Kutsal Emanetler",
              text: "Hz. Muhammed'e ve önceki peygamberlere atfedilen emanetler, kesintisiz Kur'an tilavetiyle birlikte sergilenir.",
            },
            {
              title: "Dördüncü Avlu Terasları",
              text: "Boğaz ve Haliç'e uzanan manzaralarıyla köşkler ve bahçeler. Buraya en son gelin ve acele etmeyin.",
            },
          ],
        },
        fromHotel: {
          heading: "Emerald Mansion'dan Ulaşım",
          paragraphs: [
            "Topkapı Sarayı, Emerald Mansion'a yaklaşık 800 metre mesafededir ve 10 dakikalık bir yürüyüşle ulaşılır. Sultanahmet Meydanı'nı geçin, Ayasofya'nın yanından ilerleyin ve saray surlarını izleyerek Bab-ı Hümayun'dan bilet gişelerinin bulunduğu birinci avluya girin.",
            "Yol üzerinde III. Ahmed Çeşmesi ve Aya İrini bulunur. Biraz erken çıkın ve bir zamanlar padişahların at üstünde geçtiği bu güzergahın tadını çıkarın.",
          ],
        },
        tips: {
          heading: "Ziyaret İpuçları",
          items: [
            "Saray salı günleri kapalıdır. Güncel gün ve saatleri resmi web sitesinden teyit edin.",
            "Harem dahil kombine bilet alın. Sarayın en atmosferik bölümüdür ve çevrimiçi kuyruklar daha kısadır.",
            "En az yarım gün ayırın. Dört avlu ve koleksiyonlar geniş bir alana yayılır.",
            "Açılış saatinde gelin. Harem ve Hazine kuyrukları kuşluk vaktine doğru uzar.",
            "Rahat ayakkabı giyin. Avlular arnavut kaldırımlıdır ve yazın gölge sınırlıdır.",
          ],
        },
        faq: [
          {
            q: "Topkapı Sarayı Emerald Mansion'a ne kadar uzaklıkta?",
            a: "Yaklaşık 800 metre. Sultanahmet Meydanı ve Ayasofya'nın yanından geçen yürüyüş yaklaşık 10 dakika sürer.",
          },
          {
            q: "Topkapı Sarayı her gün açık mı?",
            a: "Saray geleneksel olarak salı günleri kapalıdır. Gün ve saatler mevsime göre değişebildiğinden ziyaretinizden önce resmi web sitesini kontrol edin.",
          },
          {
            q: "Harem için ek bilet almaya değer mi?",
            a: "Evet. Harem sarayın en samimi ve en güzel çinili bölümüdür ve çoğu ziyaretçi burayı gezinin en unutulmaz kısmı olarak anar.",
          },
          {
            q: "Topkapı Sarayı için ne kadar süre ayırmalıyım?",
            a: "Avluları, Hazine'yi ve Harem'i aceleye getirmeden gezmek için üç dört saat ayırın. Tarih meraklıları rahatlıkla tam gün geçirebilir.",
          },
        ],
      },
    },
  },
  {
    key: "spice-bazaar",
    image: spiceBazaarImg,
    distance: "1.2 km",
    walkTime: { en: "15 min walk", tr: "15 dk yürüyüş" },
    copy: {
      en: {
        name: "Spice Bazaar",
        heroAlt: "Colorful spice stalls inside the Spice Bazaar in Eminonu Istanbul",
        tagline: "Four centuries of aromas in the heart of Eminonu",
        intro: [
          "The Spice Bazaar, known in Turkish as Misir Carsisi or the Egyptian Bazaar, was built in the 1660s as part of the Yeni Cami complex in Eminonu. Its name comes from the Egyptian customs duties that originally funded its construction. For four centuries it has been Istanbul's most fragrant market, a place where merchants have traded spices, dried herbs, nuts, Turkish delight and local produce under its L-shaped vaulted roof.",
          "A visit here is a full sensory experience. Towers of vivid spices, ropes of dried figs and apricots, bowls of pistachios and walnuts, and shelf upon shelf of lokum in every flavor compete for your attention. The bazaar is smaller and more approachable than the Grand Bazaar, which makes it an easy and rewarding half-morning stop.",
        ],
        whatToSee: {
          heading: "What to Look For",
          items: [
            {
              title: "Spice Stalls",
              text: "Saffron, sumac, dried mint, isot pepper and dozens of spice blends are sold in portions of any size. Vendors are happy to let you smell before you buy.",
            },
            {
              title: "Turkish Delight",
              text: "The bazaar has some of the best lokum shops in the city. Double-roasted pistachio, rose and pomegranate are classic flavors worth seeking out.",
            },
            {
              title: "Nuts, Dried Fruit and Honey",
              text: "Almonds, hazelnuts, walnuts, dried figs and multiple grades of Turkish honey line the deeper stalls. These make excellent and portable gifts.",
            },
            {
              title: "The Eminonu Waterfront",
              text: "After the bazaar, walk two minutes to the Galata Bridge. The views of the Golden Horn with the New Mosque in the background are among the most photographed in Istanbul.",
            },
          ],
        },
        fromHotel: {
          heading: "Getting There from Emerald Mansion",
          paragraphs: [
            "The Spice Bazaar is about 1.2 kilometers from Emerald Mansion, a 15 minute walk downhill along Divanyolu and then Yeniceriler Caddesi toward Eminonu. You pass the Grand Bazaar and Cemberlitas along the way, so the walk naturally strings two or three stops together.",
            "You can also take the T1 tram one stop from Sultanahmet to Eminonu, which drops you right at the bazaar entrance. The walk downhill is easy and the tram ride back uphill saves your legs.",
          ],
        },
        tips: {
          heading: "Shopping Tips",
          items: [
            "Most spice shops will package and vacuum seal your purchases. If you are flying home, ask for vacuum packing to protect your bags.",
            "Prices are often fixed but a friendly request for a discount on a larger purchase is rarely refused.",
            "The bazaar is busiest on Saturday mornings. Arrive early or visit on a weekday for a calmer experience.",
            "Opening hours can vary by season and public holiday. Check the official website before your visit.",
            "Combine your trip with a walk along the Galata Bridge or a ferry crossing to Kadikoy for a full day on the water.",
          ],
        },
        faq: [
          {
            q: "How far is the Spice Bazaar from Emerald Mansion?",
            a: "About 1.2 kilometers. The downhill walk takes around 15 minutes or you can take the T1 tram one stop to Eminonu.",
          },
          {
            q: "What is the best thing to buy at the Spice Bazaar?",
            a: "Turkish delight, saffron, sumac, isot pepper and quality dried fruits are the most popular purchases. The nuts and honeys are also excellent.",
          },
          {
            q: "Is the Spice Bazaar open every day?",
            a: "It is open most days but hours can vary by season and public holidays. Check the official website for current opening times.",
          },
          {
            q: "Why is it called the Egyptian Bazaar?",
            a: "The bazaar was partly funded by revenues from Egypt, then an Ottoman province. The name stuck even after the original financial arrangement ended.",
          },
        ],
      },
      tr: {
        name: "Mısır Çarşısı",
        heroAlt: "Eminönü'ndeki Mısır Çarşısı'nın renkli baharat tezgahları",
        tagline: "Eminönü'nün kalbinde dört yüzyıllık aromatik miras",
        intro: [
          "Mısır Çarşısı, 1660'lı yıllarda Eminönü'ndeki Yeni Cami külliyesinin bir parçası olarak inşa edildi. Adını başlangıçta yapımını finanse eden Mısır gümrük gelirlerinden alır. Dört yüzyıldır İstanbul'un en kokulu çarşısıdır. L biçimli tonozlu çatısı altında tüccarlar baharatlar, kuru otlar, kuruyemişler, lokum ve yerel ürünler satmaya devam eder.",
          "Bir ziyaret burada tam anlamıyla çok duyulu bir deneyimdir. Göz alıcı baharat kuleleri, kuru incir ve kayısı dizileri, fıstık ve ceviz kaseler ve her lezzette rafları dolduran lokumlar dikkatinizi çeker. Kapalıçarşı'dan daha küçük ve daha ulaşılabilir olan Mısır Çarşısı, keyifli bir sabah durağıdır.",
        ],
        whatToSee: {
          heading: "Nelere Bakmalı",
          items: [
            {
              title: "Baharat Tezgahları",
              text: "Safran, sumak, kuru nane, isot biberi ve onlarca baharat karışımı istediğiniz gramajda satılır. Satıcılar almadan önce koklayıp denemenize memnuniyetle izin verir.",
            },
            {
              title: "Lokum",
              text: "Çarşıda şehrin en iyi lokumcularından bazıları bulunur. Çift kavrulmuş fıstıklı, gül ve nar aromalı çeşitler mutlaka tatmaya değer.",
            },
            {
              title: "Kuruyemiş, Kuru Meyve ve Bal",
              text: "Badem, fındık, ceviz, kuru incir ve farklı kalitelerde Türk balı tezgahlarda sıralanır. Taşıması kolay ve güzel hediyeler bunlar.",
            },
            {
              title: "Eminönü Sahili",
              text: "Çarşıdan çıktıktan sonra iki dakika yürüyerek Galata Köprüsü'ne ulaşın. Arkasında Yeni Cami ile Haliç manzarası İstanbul'un en çok fotoğraflanan görünümlerindendir.",
            },
          ],
        },
        fromHotel: {
          heading: "Emerald Mansion'dan Ulaşım",
          paragraphs: [
            "Mısır Çarşısı, Emerald Mansion'a yaklaşık 1,2 kilometre mesafededir. Divanyolu ve ardından Yeniceriler Caddesi boyunca Eminönü'ne yokuş aşağı 15 dakikalık bir yürüyüşle ulaşılır. Yol üzerinde Kapalıçarşı ve Çemberlitaş geçtiğinden bu yürüyüş doğal olarak birkaç durağı birbirine bağlar.",
            "T1 tramvayıyla Sultanahmet'ten Eminönü'ne bir durak giderek de ulaşabilirsiniz. Yokuş aşağı yürümek kolaydır, geri dönüşte tramvay bacaklarınızı dinlendirir.",
          ],
        },
        tips: {
          heading: "Alışveriş İpuçları",
          items: [
            "Baharat dükkanlarının çoğu satın aldığınız ürünleri paketleyip vakumlar. Uçakla dönüyorsanız çantanızı korumak için vakumlu paket isteyin.",
            "Fiyatlar genellikle sabittir ancak büyük miktarda alımlarda dostanece indirim istemek nadiren geri çevrilir.",
            "Çarşı cumartesi sabahları en kalabalık olur. Daha sakin bir deneyim için erken saatlerde veya hafta içi gelin.",
            "Açılış saatleri mevsime ve resmi tatillere göre değişebilir. Ziyaretinizden önce resmi web sitesini kontrol edin.",
            "Galata Köprüsü boyunca bir yürüyüşü veya Kadıköy'e feribot geçişini ekleyerek tam bir su kenarı günü geçirebilirsiniz.",
          ],
        },
        faq: [
          {
            q: "Mısır Çarşısı Emerald Mansion'a ne kadar uzaklıkta?",
            a: "Yaklaşık 1,2 kilometre. Yokuş aşağı yürüyüş 15 dakika sürer ya da T1 tramvayıyla Eminönü'ne bir duraksınız.",
          },
          {
            q: "Mısır Çarşısı'ndan ne alınır?",
            a: "Lokum, safran, sumak, isot biberi ve kaliteli kuru meyveler en çok tercih edilen alışverişlerdir. Kuruyemişler ve ballar da mükemmeldir.",
          },
          {
            q: "Mısır Çarşısı her gün açık mı?",
            a: "Büyük çoğunlukla açıktır ancak saatler mevsime ve resmi tatillere göre değişebilir. Güncel saatler için resmi web sitesini kontrol edin.",
          },
          {
            q: "Neden Mısır Çarşısı deniyor?",
            a: "Çarşı kısmen o dönemde Osmanlı eyaleti olan Mısır'dan gelen gelirlerle inşa edildi. Bu isim finansman düzenlemesi sona erdikten sonra da kaldı.",
          },
        ],
      },
    },
  },
  {
    key: "galata-tower",
    image: galataTowerImg,
    distance: "2.8 km",
    walkTime: { en: "30 min (Tram)", tr: "30 dk (Tramvay)" },
    copy: {
      en: {
        name: "Galata Tower",
        heroAlt: "Galata Tower rising above the rooftops of the Beyoglu district in Istanbul",
        tagline: "Six hundred years of skyline above the Golden Horn",
        intro: [
          "Galata Tower was built by the Genoese in 1348 as the tallest structure in their trading colony on the northern shore of the Golden Horn. Standing 66 meters tall, it anchored what was then a walled city-within-a-city that the Ottomans would later absorb into a growing Istanbul. The Genoese called it the Tower of Christ. Over the centuries it served as a watchtower, a prison and a fire lookout before becoming one of the most recognized landmarks on the Istanbul skyline.",
          "Today the tower offers one of the finest 360-degree panoramas in the city. From the viewing gallery you can trace the curve of the Bosphorus, pick out the minarets of the Old City across the Golden Horn, and on clear days see as far as the Princes Islands in the Sea of Marmara. The Galata neighborhood below is one of Istanbul's most rewarding areas to explore on foot.",
        ],
        whatToSee: {
          heading: "What to See",
          items: [
            {
              title: "The Viewing Gallery",
              text: "The open balcony wraps around the top of the tower and gives an unobstructed panorama over both the European and Asian sides of the city.",
            },
            {
              title: "The Galata Neighborhood",
              text: "The streets around the tower are full of independent coffee shops, wine bars, bookshops and antique dealers. Allow at least an hour to wander after you descend.",
            },
            {
              title: "Galata Bridge",
              text: "A 10 minute walk downhill from the tower leads to the Galata Bridge, where fishermen line both sides and the view back toward the Old City is stunning.",
            },
            {
              title: "The Interior Exhibitions",
              text: "The tower houses a small exhibition on its history and on the legend of Hezarfen Ahmed Celebi, said to have glided from its top across the Bosphorus in the 17th century.",
            },
          ],
        },
        fromHotel: {
          heading: "Getting There from Emerald Mansion",
          paragraphs: [
            "Galata Tower is about 2.8 kilometers from Emerald Mansion. The most comfortable route is to take the T1 tram from Sultanahmet toward Kabatas and ride to the Karakoy stop, then walk uphill through the Galata neighborhood for about 10 minutes. The total journey takes roughly 30 minutes.",
            "Alternatively you can walk the whole way downhill to Eminonu and cross the Galata Bridge on foot, which is a scenic approach. Coming back, the tram from Karakoy to Sultanahmet is quick and simple.",
          ],
        },
        tips: {
          heading: "Visiting Tips",
          items: [
            "Tickets sell out in high season. Book online through the official website to guarantee your slot.",
            "Entry fees and opening hours change through the year. Check the official website before your visit.",
            "The viewing gallery is narrow and the height can be dizzying. Take your time on the way around.",
            "Late afternoon light falls beautifully over the Golden Horn from the tower. Sunset is the most popular time and the most crowded.",
            "The Galata neighborhood rewards slow walking. Leave time after your visit to explore the streets below.",
          ],
        },
        faq: [
          {
            q: "How far is Galata Tower from Emerald Mansion?",
            a: "About 2.8 kilometers. The tram from Sultanahmet to Karakoy followed by a short uphill walk takes around 30 minutes.",
          },
          {
            q: "Do I need to book tickets in advance for Galata Tower?",
            a: "In high season tickets can sell out. Booking online through the official website is strongly recommended.",
          },
          {
            q: "Who built Galata Tower?",
            a: "It was built by the Genoese in 1348 as part of their trading colony on the northern shore of the Golden Horn.",
          },
          {
            q: "What is the best time of day to visit Galata Tower?",
            a: "Late afternoon is popular for the warm light over the Golden Horn. Morning visits are quieter and the views are just as rewarding.",
          },
        ],
      },
      tr: {
        name: "Galata Kulesi",
        heroAlt: "Beyoglu semtinin çatıları üzerinde yükselen Galata Kulesi",
        tagline: "Haliç üzerinde altı yüz yıllık siluet",
        intro: [
          "Galata Kulesi, 1348 yılında Cenevizliler tarafından Haliç'in kuzey kıyısındaki ticaret kolonisinin en yüksek yapısı olarak inşa edildi. 66 metre yüksekliğiyle o dönemde surlarla çevrili ayrı bir şehir olan Galata'nın simgesiydi. Cenevizliler buna Christea Turris, yani Mesih Kulesi diyordu. Osmanlılar Galata'yı büyüyen İstanbul'a kattıktan sonra kule yüzyıllar boyunca gözetleme noktası, hapishane ve yangın kulesi olarak kullanıldı.",
          "Bugün kule şehrin en güzel 360 derece panoramalarından birini sunuyor. Seyir terasından Boğaz'ın kıvrımını izleyebilir, Haliç'in karşısındaki Tarihi Yarımada'nın minarelerini seçebilir ve açık havalarda Marmara Denizi'ndeki Adalar'ı görebilirsiniz. Kulenin hemen altındaki Galata mahallesi ise İstanbul'un yürüyerek keşfetmenin en keyifli olduğu bölgelerinden biridir.",
        ],
        whatToSee: {
          heading: "Görülecekler",
          items: [
            {
              title: "Seyir Terası",
              text: "Kulenin tepesini çevreleyen açık balkon, şehrin hem Avrupa hem Asya yakasına engelsiz panorama sunar.",
            },
            {
              title: "Galata Mahallesi",
              text: "Kulenin çevresindeki sokaklar bağımsız kahvehaneler, şarap barları, kitapçılar ve antikacılarla doludur. Inişten sonra gezmek için en az bir saat ayırın.",
            },
            {
              title: "Galata Köprüsü",
              text: "Kuleden yokuş aşağı 10 dakikalık yürüyüş sizi Galata Köprüsü'ne ulaştırır. Köprünün iki yanında balıkçılar sıralanır ve Tarihi Yarımada'ya doğru manzara muhteşemdir.",
            },
            {
              title: "İç Mekan Sergileri",
              text: "Kule, tarihi ve 17. yüzyılda Boğaz'ı süzülerek geçtiği söylenen Hezarfen Ahmed Çelebi efsanesine dair küçük bir sergi barındırır.",
            },
          ],
        },
        fromHotel: {
          heading: "Emerald Mansion'dan Ulaşım",
          paragraphs: [
            "Galata Kulesi, Emerald Mansion'a yaklaşık 2,8 kilometre mesafededir. En rahat yol T1 tramvayıyla Sultanahmet'ten Karaköy durağına gitmek ve ardından Galata mahallesinde yaklaşık 10 dakika yokuş yukarı yürümektir. Toplam yolculuk yaklaşık 30 dakika sürer.",
            "Alternatif olarak tüm yolu yürüyerek Eminönü'ne inebilir ve Galata Köprüsü'nü yürüyerek geçebilirsiniz. Dönüşte Karaköy'den Sultanahmet'e tramvay hızlı ve pratiktir.",
          ],
        },
        tips: {
          heading: "Ziyaret İpuçları",
          items: [
            "Yoğun sezonda biletler tükenmektedir. Yerinizi garantilemek için resmi web sitesinden önceden satın alın.",
            "Giriş ücretleri ve açılış saatleri yıl içinde değişebilir. Ziyaretinizden önce resmi web sitesini kontrol edin.",
            "Seyir terası dardır ve yükseklik baş döndürebilir. Teras boyunca ilerlerken acele etmeyin.",
            "Öğleden sonra ışığı Haliç üzerinde güzelce yayılır. Gün batımı en popüler ve en kalabalık saattir.",
            "Galata mahallesi yavaş yürüyüşü ödüller. Ziyaretin ardından aşağıdaki sokakları keşfetmek için zaman bırakın.",
          ],
        },
        faq: [
          {
            q: "Galata Kulesi Emerald Mansion'a ne kadar uzaklıkta?",
            a: "Yaklaşık 2,8 kilometre. Sultanahmet'ten tramvayla Karaköy'e gidip kısa bir yokuş yukarı yürüyüşle toplam yaklaşık 30 dakikada ulaşılır.",
          },
          {
            q: "Galata Kulesi için bilet önceden alınmalı mı?",
            a: "Yoğun sezonda biletler tükenmektedir. Resmi web sitesinden önceden satın almak güçlü tavsiye edilir.",
          },
          {
            q: "Galata Kulesi'ni kim yaptırdı?",
            a: "Kule, 1348 yılında Cenevizliler tarafından Haliç'in kuzey kıyısındaki ticaret kolonisinin bir parçası olarak inşa edildi.",
          },
          {
            q: "Galata Kulesi'ni ziyaret etmek için en iyi saat hangisi?",
            a: "Öğleden sonra Haliç üzerindeki sıcak ışık için popülerdir. Sabah ziyaretleri daha sakin olur ve manzara aynı güzelliktedir.",
          },
        ],
      },
    },
  },
  {
    key: "dolmabahce-palace",
    image: dolmabahcePalaceImg,
    distance: "5.5 km",
    walkTime: { en: "35 min (Tram)", tr: "35 dk (Tramvay)" },
    copy: {
      en: {
        name: "Dolmabahce Palace",
        heroAlt: "Dolmabahce Palace on the Bosphorus shore in Istanbul",
        tagline: "The grandest palace of the Ottoman westernization era",
        intro: [
          "Dolmabahce Palace was built between 1843 and 1856 for Sultan Abdulmecid I on reclaimed land along the Bosphorus. It replaced Topkapi as the main imperial residence and was designed to signal Ottoman modernity to European powers. The result is an extraordinary blend of Baroque, Rococo and Neoclassical styles wrapped around a 600-meter Bosphorus facade, the longest palace facade of any palace in the world.",
          "Inside, the scale is staggering. The ceremonial hall alone holds the largest Bohemian crystal chandelier ever made, a gift from Queen Victoria weighing 4.5 tons. The palace served as an administrative center and imperial home through the end of the Ottoman Empire and was later used by Mustafa Kemal Ataturk, who died here in 1938. Both histories are visible in its rooms.",
        ],
        whatToSee: {
          heading: "What to See",
          items: [
            {
              title: "The Ceremonial Hall",
              text: "The Muayede Salonu is the centerpiece of the palace, dominated by a 4.5-ton Bohemian crystal chandelier and a 600 square meter Hereke carpet.",
            },
            {
              title: "The Harem and Selamlik",
              text: "The palace is divided into the Harem for the imperial family and the Selamlik for official functions. Both sections are included in the standard visit.",
            },
            {
              title: "The Bosphorus Garden and Gate",
              text: "The ornate waterfront gate and the formal gardens along the shore offer some of the best views of the Bosphorus from ground level.",
            },
            {
              title: "Ataturk's Rooms",
              text: "The rooms used by Ataturk during his stays are preserved as he left them. The clock on his bedside table is stopped at 9:05, the time of his death on 10 November 1938.",
            },
          ],
        },
        fromHotel: {
          heading: "Getting There from Emerald Mansion",
          paragraphs: [
            "Dolmabahce Palace is about 5.5 kilometers from Emerald Mansion. Take the T1 tram from Sultanahmet toward Kabatas, ride to the Kabatas terminus, and the palace entrance is a short walk along the Bosphorus shore. The journey takes around 35 minutes.",
            "The palace requires a guided tour as visitors cannot explore independently. Tours depart regularly and the duration is typically one to one and a half hours. Plan a half day for the visit including travel time.",
          ],
        },
        tips: {
          heading: "Visiting Tips",
          items: [
            "Entry is by guided tour only. Tours run throughout the day but groups are limited in size, so booking online through the official website is recommended.",
            "Ticket prices, tour schedules and opening days change seasonally. Check the official website before your visit.",
            "Photography is restricted inside the palace. Confirm the current rules at the ticket office.",
            "The palace is closed on certain days of the week. Check the official website for the current schedule.",
            "Combine your visit with a walk along the Bosphorus shore toward Besiktas for a full afternoon by the water.",
          ],
        },
        faq: [
          {
            q: "How far is Dolmabahce Palace from Emerald Mansion?",
            a: "About 5.5 kilometers. The T1 tram from Sultanahmet to the Kabatas terminus followed by a short walk along the shore takes around 35 minutes.",
          },
          {
            q: "Can you visit Dolmabahce Palace independently?",
            a: "No. All visits are guided tours that depart throughout the day. Book through the official website to secure your spot.",
          },
          {
            q: "How long does a visit to Dolmabahce Palace take?",
            a: "Guided tours typically last one to one and a half hours. Allow a full half day including travel from Sultanahmet.",
          },
          {
            q: "What is the most famous room in Dolmabahce Palace?",
            a: "The Ceremonial Hall, with its 4.5-ton Bohemian crystal chandelier gifted by Queen Victoria and its enormous Hereke carpet, is the most celebrated space in the palace.",
          },
        ],
      },
      tr: {
        name: "Dolmabahçe Sarayı",
        heroAlt: "Boğaz kıyısındaki Dolmabahçe Sarayı",
        tagline: "Osmanlı batılılaşma döneminin en görkemli sarayı",
        intro: [
          "Dolmabahçe Sarayı, Sultan Abdülmecid I için 1843 ile 1856 yılları arasında Boğaz kıyısında doldurularak elde edilen arazi üzerine inşa edildi. Topkapı Sarayı'nın yerini alarak ana saray konutu oldu ve Avrupa güçlerine Osmanlı modernliğini göstermek amacıyla tasarlandı. Sonuç dünyanın en uzun saray cephesi olan 600 metrelik Boğaz yüzüne sahip, Barok, Rokoko ve Neoklasik üslupların olağanüstü bir bileşimidir.",
          "İçeride ölçek şaşırtıcıdır. Tören salonu tek başına Kraliçe Victoria'nın hediyesi olan 4,5 ton ağırlığında dünyanın en büyük Bohemya kristal avizesini barındırır. Saray Osmanlı İmparatorluğu'nun sonuna kadar yönetim merkezi ve saray konutu olarak hizmet verdi ve ardından Mustafa Kemal Atatürk tarafından kullanıldı. Atatürk 1938'de burada hayatını kaybetti. Her iki dönemin izleri odalarda hala görülebilir.",
        ],
        whatToSee: {
          heading: "Görülecekler",
          items: [
            {
              title: "Muayede Salonu",
              text: "Sarayın merkezindeki bu salon, 4,5 tonluk Bohemya kristal avize ve 600 metrekarelik Hereke halısıyla baş döndürür.",
            },
            {
              title: "Harem ve Selamlık",
              text: "Saray, hanedan ailesinin yaşadığı Harem ve resmi törenler için kullanılan Selamlık olarak ikiye ayrılır. Her iki bölüm standart ziyarete dahildir.",
            },
            {
              title: "Boğaz Bahçesi ve Kapısı",
              text: "İşlemeli sahil kapısı ve kıyı boyunca uzanan düzenli bahçeler, Boğaz'ın zemin seviyesinden en güzel manzaralarını sunar.",
            },
            {
              title: "Atatürk'ün Odaları",
              text: "Atatürk'ün kullandığı odalar olduğu gibi korunmuştur. Başucundaki tablonun saati, 10 Kasım 1938'deki vefatının saati olan 9:05'te durdurulmuştur.",
            },
          ],
        },
        fromHotel: {
          heading: "Emerald Mansion'dan Ulaşım",
          paragraphs: [
            "Dolmabahçe Sarayı, Emerald Mansion'a yaklaşık 5,5 kilometre mesafededir. T1 tramvayıyla Sultanahmet'ten Kabataş son durağına kadar gidin ve Boğaz kıyısı boyunca kısa bir yürüyüşle saray girişine ulaşın. Yolculuk yaklaşık 35 dakika sürer.",
            "Saray bağımsız ziyarete kapalıdır ve rehberli tur zorunludur. Turlar gün boyunca düzenli aralıklarla kalkar, süresi genellikle bir ile bir buçuk saat arasındadır. Ulaşım dahil yarım gün planlayın.",
          ],
        },
        tips: {
          heading: "Ziyaret İpuçları",
          items: [
            "Giriş yalnızca rehberli turla mümkündür. Gruplar sınırlı sayıda kabul edildiğinden resmi web sitesinden önceden rezervasyon yapılması önerilir.",
            "Bilet ücretleri, tur saatleri ve açık günler mevsime göre değişir. Ziyaretinizden önce resmi web sitesini kontrol edin.",
            "Saray içinde fotoğraf çekmek kısıtlıdır. Güncel kuralları gişede teyit edin.",
            "Saray haftanın belirli günlerinde kapalıdır. Güncel programı resmi web sitesinden öğrenin.",
            "Ziyaretinizi Beşiktaş yönünde Boğaz kıyısında bir yürüyüşle tamamlayarak su kenarında dolu bir öğleden sonra geçirebilirsiniz.",
          ],
        },
        faq: [
          {
            q: "Dolmabahçe Sarayı Emerald Mansion'a ne kadar uzaklıkta?",
            a: "Yaklaşık 5,5 kilometre. Sultanahmet'ten tramvayla Kabataş son durağına gidip kıyı boyunca kısa bir yürüyüş yaklaşık 35 dakika sürer.",
          },
          {
            q: "Dolmabahçe Sarayı bağımsız gezilir mi?",
            a: "Hayır. Ziyaretler yalnızca gün boyunca düzenli kalkan rehberli turlarla yapılır. Yerinizi güvence altına almak için resmi web sitesinden rezervasyon yapın.",
          },
          {
            q: "Dolmabahçe Sarayı ziyareti ne kadar sürer?",
            a: "Rehberli turlar genellikle bir ile bir buçuk saat sürer. Sultanahmet'ten ulaşım dahil yarım gün ayırın.",
          },
          {
            q: "Dolmabahçe Sarayı'nın en ünlü odası hangisidir?",
            a: "Kraliçe Victoria'nın hediyesi 4,5 tonluk Bohemya kristal avizesi ve devasa Hereke halısıyla Muayede Salonu sarayın en çok bilinen mekanıdır.",
          },
        ],
      },
    },
  },
];

export function getGuide(key: GuideKey): GuideDef {
  const guide = guides.find((g) => g.key === key);
  if (!guide) throw new Error(`Unknown guide key: ${key}`);
  return guide;
}
