import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
  tr: {
    translation: {
      nav: {
        home: "Ana Sayfa",
        rooms: "Odalar",
        about: "Hakkımızda",
        attractions: "Gezilecek Yerler",
        gallery: "Galeri",
        contact: "İletişim",
        bookNow: "Rezervasyon",
        bookNowAction: "Rezervasyon Yap"
      },
      footer: {
        brandSubtitle: "Mansion Istanbul",
        brandQuote: "\"Tarihin kalbinde, zamanın ötesinde bir lüks. İstanbul'u yaşamanın en asil yolu.\"",
        menu: "Menü",
        contact: "Bize Ulaşın",
        reservationLine: "Rezervasyon Hattı",
        email: "E-Posta",
        address: "Adres",
        checkAvailability: "Müsaitlik Kontrolü",
        rights: "Tüm Hakları Saklıdır.",
        design: "Tasarım & Geliştirme",
        privacy: "Gizlilik Politikası",
        terms: "Hizmet Koşulları",
        roomsAndSuites: "Odalar & Süitler",
        istanbulGuide: "İstanbul Rehberi"
      },
      home: {
        heroSubtitle: "Sultanahmet'in Kalbinde",
        heroTitle: "Zamanın Ötesinde Bir Lüks",
        heroDesc: "Tarihi yarımadanın büyüleyici atmosferinde, Osmanlı zarafetini modern konforla buluşturuyoruz.",
        exploreRooms: "Odaları İncele",
        welcomeTitle: "Hoşgeldiniz",
        welcomeSubtitle: "Bir İstanbul Masalı",
        welcomeText1: "İstanbul'un kalbi Sultanahmet'te, tarihin ve lüksün kusursuz uyumunu keşfedin. Emerald Mansion, sadece bir otel değil, yüzyıllık bir mirasın modern yorumudur.",
        welcomeText2: "Her detayı özenle tasarlanmış odalarımız, sizi Osmanlı'nın ihtişamlı günlerine götürürken, günümüzün tüm konforunu sunuyor. Ayasofya ve Sultanahmet Camii'nin gölgesinde, unutulmaz bir konaklama deneyimi.",
        featuredRooms: "Öne Çıkan Odalar",
        viewAllRooms: "Tüm Odalar",
        experience: "Deneyim",
        conciergeTitle: "Kişisel Concierge",
        conciergeDesc: "İstanbul gezinizi planlamanız için size özel asistanlık hizmeti.",
        transferTitle: "VIP Transfer",
        transferDesc: "Havalimanından otelimize konforlu ve güvenli ulaşım.",
        diningTitle: "Özel Lezzetler",
        diningDesc: "Odanıza servis edilen gurme kahvaltı ve özel ikramlar.",
        locationTitle: "Konum",
        locationSubtitle: "Tarihin Merkezinde",
        locationDesc: "Ayasofya, Topkapı Sarayı ve Kapalı Çarşı sadece yürüme mesafesinde. İstanbul'un ruhunu hissetmek için en doğru adrestesiniz.",
        getDirections: "Yol Tarifi Al"
      },
      rooms: {
        size: "Boyut",
        capacity: "Kapasite",
        bed: "Yatak",
        person: "Kişi",
        amenities: "Olanaklar",
        details: "Detaylar",
        otherOptions: "Diğer Seçenekler",
        allRooms: "Tüm Odalar",
        reservation: "Rezervasyon",
        bestRate: "Doğrudan rezervasyonlarda en iyi fiyat garantisi.",
        checkIn: "Giriş",
        checkOut: "Çıkış",
        cancellation: "İptal",
        flexible: "Esnek Koşullar",
        needHelp: "Özel istekleriniz mi var?"
      },
      attractions: {
        title: "İstanbul'u Keşfet",
        subtitle: "Tarihi Yarımada",
        desc: "Otelimizden sadece birkaç adım uzaklıktaki dünya mirası eserleri keşfedin.",
        readMore: "Devamını Oku"
      },
      about: {
        story: "Hikayemiz",
        title: "Hakkımızda",
        heroTitle: "İstanbul'un Kalbinde",
        heroSubtitle: "Bir Rüya.",
        text1: "İstanbul'un tarihi yarımadası Sultanahmet'te yer alan Emerald Mansion, köklü geçmişi modern bir lüks anlayışıyla harmanlayan, şehrin en özel butik otellerinden biridir. Tarihi dokuya sadık kalınarak restore edilen binamız, Osmanlı ve Selçuklu mimarisinin zarif izlerini taşımaktadır.",
        text2: "2024 yılında kapılarını açan otelimiz, toplamda 16 özel odasıyla misafirlerine butik bir konaklama deneyimi sunar. Her bir odamız, misafirlerimizin konforu düşünülerek modern olanaklarla donatılmış, ancak ruhunu tarihten almıştır.",
        suites: "Özel Süit",
        concierge: "Concierge",
        satisfaction: "Memnuniyet"
      },
      gallery: {
        portfolio: "Portfolyo",
        title: "Galeri",
        view: "Görüntüle"
      },
      roomDetail: {
        experience: "Deneyim",
        gallery: "Görseller",
        zoom: "Büyüt",
        checkAvailability: "Müsaitlik Kontrolü",
        dragToRotate: "Çevirmek için sürükleyin"
      },
      contact: {
        title: "İletişim",
        subtitle: "Bize Ulaşın",
        heading: "İletişim",
        desc: "Sorularınız ve rezervasyon talepleriniz için her zaman yanınızdayız.",
        sendHeading: "Mesaj Gönderin",
        infoHeading: "Bilgiler",
        sendMessage: "Mesaj Gönder",
        name: "Adınız Soyadınız",
        email: "E-Posta Adresiniz",
        subject: "Konu",
        message: "Mesajınız",
        send: "Gönder",
        sending: "Gönderiliyor...",
        success: "Mesajınız başarıyla gönderildi.",
        error: "Bir hata oluştu, lütfen tekrar deneyin."
      },
      terms: {
        title: "Hizmet Koşulları",
        lastUpdated: "Son Güncelleme: 1 Aralık 2025",
        acceptance: { title: "1. Kabul Edilme", text: "Emerald Mansion web sitesini kullanarak, bu hizmet koşullarını okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan edersiniz. Koşulları kabul etmiyorsanız, lütfen sitemizi kullanmayınız." },
        reservation: { title: "2. Rezervasyon Kuralları", items: ["Rezervasyon yapmak için en az 18 yaşında olmalısınız.", "Giriş saati 14:00, çıkış saati 12:00'dir.", "Rezervasyon iptalleri, seçilen fiyat tarifesinin koşullarına tabidir."] },
        payment: { title: "3. Ödeme", text: "Tüm ödemeler, rezervasyon sırasında belirtilen para birimi üzerinden tahsil edilir. Geçerli kredi kartları ve diğer ödeme yöntemleri kabul edilir. Ekstra harcamalar çıkış sırasında tahsil edilir." },
        rules: { title: "4. Otel Kuralları", text: "Misafirlerimizden, diğer misafirlerin huzurunu bozacak davranışlardan kaçınmaları beklenir. Otel içerisinde sigara içilmesi (belirlenen alanlar dışında) yasaktır. Evcil hayvan politikası için lütfen iletişime geçiniz." },
        disclaimer: { title: "5. Sorumluluk Reddi", text: "Emerald Mansion, web sitesindeki olası hatalar, kesintiler veya veri kayıplarından sorumlu tutulamaz. Hizmetler \"olduğu gibi\" sunulmaktadır." },
        changes: { title: "6. Değişiklikler", text: "Hizmet koşullarını dilediğimiz zaman güncelleme hakkımız saklıdır. Değişiklikler web sitemizde yayınlandığı andan itibaren geçerli olur." }
      },
      privacy: {
        title: "Gizlilik Politikası",
        lastUpdated: "Son Güncelleme: 1 Aralık 2025",
        collection: { title: "1. Veri Toplama", text: "Emerald Mansion olarak, web sitemizi ziyaret ettiğinizde veya rezervasyon yaptığınızda kişisel bilgilerinizi (isim, iletişim bilgileri, ödeme detayları vb.) toplayabiliriz. Bu bilgiler, hizmetlerimizi size en iyi şekilde sunmak için kullanılır." },
        usage: { title: "2. Bilgilerin Kullanımı", text: "Toplanan bilgiler şu amaçlarla kullanılır:", items: ["Rezervasyon işlemlerini gerçekleştirmek ve yönetmek.", "Size özel teklifler ve güncellemeler sunmak (izniniz dahilinde).", "Müşteri hizmetleri desteği sağlamak.", "Yasal yükümlülükleri yerine getirmek."] },
        security: { title: "3. Veri Güvenliği", text: "Kişisel verilerinizin güvenliği bizim için en büyük önceliktir. Verilerinizi yetkisiz erişime, değiştirmeye veya ifşaya karşı korumak için endüstri standardı güvenlik önlemleri kullanıyoruz." },
        cookies: { title: "4. Çerezler (Cookies)", text: "Web sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için çerezler kullanır. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz." },
        sharing: { title: "5. Üçüncü Taraf Paylaşımı", text: "Bilgileriniz, yasal zorunluluklar dışında veya hizmetin gerektirdiği durumlar (örneğin, ödeme işlemleri) haricinde üçüncü taraflarla paylaşılmaz." },
        contact: { title: "6. İletişim", text: "Gizlilik politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz: info@emeraldmansion.com" }
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        rooms: "Rooms",
        about: "About Us",
        attractions: "Attractions",
        gallery: "Gallery",
        contact: "Contact",
        bookNow: "Book Now",
        bookNowAction: "Book Now"
      },
      footer: {
        brandSubtitle: "Mansion Istanbul",
        brandQuote: "\"Luxury beyond time, in the heart of history. The noblest way to experience Istanbul.\"",
        menu: "Menu",
        contact: "Contact Us",
        reservationLine: "Reservation Line",
        email: "Email",
        address: "Address",
        checkAvailability: "Check Availability",
        rights: "All Rights Reserved.",
        design: "Design & Development",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        roomsAndSuites: "Rooms & Suites",
        istanbulGuide: "Istanbul Guide"
      },
      home: {
        heroSubtitle: "Heart of Sultanahmet",
        heroTitle: "Luxury Beyond Time",
        heroDesc: "In the enchanting atmosphere of the historical peninsula, we blend Ottoman elegance with modern comfort.",
        exploreRooms: "Explore Rooms",
        welcomeTitle: "Welcome",
        welcomeSubtitle: "An Istanbul Tale",
        welcomeText1: "Discover the perfect harmony of history and luxury in Sultanahmet, the heart of Istanbul. Emerald Mansion is not just a hotel, but a modern interpretation of a century-old legacy.",
        welcomeText2: "Carefully designed in every detail, our rooms take you to the magnificent days of the Ottoman Empire while offering all the comforts of today. An unforgettable accommodation experience in the shadow of Hagia Sophia and the Blue Mosque.",
        featuredRooms: "Featured Rooms",
        viewAllRooms: "All Rooms",
        experience: "Experience",
        conciergeTitle: "Personal Concierge",
        conciergeDesc: "Personal assistant service to help you plan your Istanbul trip.",
        transferTitle: "VIP Transfer",
        transferDesc: "Comfortable and safe transportation from the airport to our hotel.",
        diningTitle: "Special Tastes",
        diningDesc: "Gourmet breakfast and special treats served to your room.",
        locationTitle: "Location",
        locationSubtitle: "Center of History",
        locationDesc: "Hagia Sophia, Topkapi Palace and the Grand Bazaar are just walking distance away. You are at the right address to feel the soul of Istanbul.",
        getDirections: "Get Directions"
      },
      rooms: {
        size: "Size",
        capacity: "Capacity",
        bed: "Bed",
        person: "Person",
        amenities: "Amenities",
        details: "Details",
        otherOptions: "Other Options",
        allRooms: "All Rooms",
        reservation: "Reservation",
        bestRate: "Best price guarantee for direct reservations.",
        checkIn: "Check-in",
        checkOut: "Check-out",
        cancellation: "Cancellation",
        flexible: "Flexible Terms",
        needHelp: "Do you have special requests?"
      },
      attractions: {
        title: "Discover Istanbul",
        subtitle: "Historical Peninsula",
        desc: "Discover the world heritage sites just a few steps from our hotel.",
        readMore: "Read More"
      },
      about: {
        story: "Our Story",
        title: "About Us",
        heroTitle: "A Dream",
        heroSubtitle: "In the Heart of Istanbul.",
        text1: "Located in Sultanahmet, Istanbul's historical peninsula, Emerald Mansion is one of the city's most special boutique hotels, blending deep-rooted history with a modern understanding of luxury. Restored faithfully to its historical texture, our building bears the elegant traces of Ottoman and Seljuk architecture.",
        text2: "Opening its doors in 2024, our hotel offers a boutique accommodation experience to its guests with a total of 16 private rooms. Each of our rooms is equipped with modern amenities with the comfort of our guests in mind, but takes its soul from history.",
        suites: "Private Suites",
        concierge: "Concierge",
        satisfaction: "Satisfaction"
      },
      gallery: {
        portfolio: "Portfolio",
        title: "Gallery",
        view: "View"
      },
      roomDetail: {
        experience: "Experience",
        gallery: "Images",
        zoom: "Zoom",
        checkAvailability: "Check Availability",
        dragToRotate: "Drag to rotate"
      },
      contact: {
        title: "Contact",
        subtitle: "Get in Touch",
        heading: "Contact",
        desc: "We are always with you for your questions and reservation requests.",
        sendHeading: "Send Message",
        infoHeading: "Information",
        sendMessage: "Send Message",
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Your message has been sent successfully.",
        error: "An error occurred, please try again."
      },
      terms: {
        title: "Terms of Service",
        lastUpdated: "Last Updated: December 1, 2025",
        acceptance: { title: "1. Acceptance", text: "By using the Emerald Mansion website, you declare that you have read, understood, and accepted these terms of service. If you do not accept the terms, please do not use our site." },
        reservation: { title: "2. Reservation Rules", items: ["You must be at least 18 years old to make a reservation.", "Check-in time is 14:00, check-out time is 12:00.", "Reservation cancellations are subject to the conditions of the selected rate plan."] },
        payment: { title: "3. Payment", text: "All payments are collected in the currency specified at the time of booking. Valid credit cards and other payment methods are accepted. Extra expenses are collected at check-out." },
        rules: { title: "4. Hotel Rules", text: "Our guests are expected to refrain from behaviors that will disturb other guests. Smoking is prohibited inside the hotel (except in designated areas). Please contact us for our pet policy." },
        disclaimer: { title: "5. Disclaimer", text: "Emerald Mansion cannot be held responsible for possible errors, interruptions, or data losses on the website. Services are provided \"as is\"." },
        changes: { title: "6. Changes", text: "We reserve the right to update the terms of service at any time. Changes become effective as soon as they are published on our website." }
      },
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: December 1, 2025",
        collection: { title: "1. Data Collection", text: "As Emerald Mansion, we may collect your personal information (name, contact information, payment details, etc.) when you visit our website or make a reservation. This information is used to provide our services to you in the best way possible." },
        usage: { title: "2. Use of Information", text: "The collected information is used for the following purposes:", items: ["To perform and manage reservation transactions.", "To offer you special offers and updates (with your permission).", "To provide customer service support.", "To fulfill legal obligations."] },
        security: { title: "3. Data Security", text: "The security of your personal data is our top priority. We use industry-standard security measures to protect your data against unauthorized access, alteration, or disclosure." },
        cookies: { title: "4. Cookies", text: "Our website uses cookies to improve user experience and analyze site traffic. You can manage your cookie preferences from your browser settings." },
        sharing: { title: "5. Third Party Sharing", text: "Your information is not shared with third parties except for legal obligations or situations required by the service (e.g., payment transactions)." },
        contact: { title: "6. Contact", text: "You can contact us for your questions regarding our privacy policy: info@emeraldmansion.com" }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
