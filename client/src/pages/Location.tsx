import { Link } from "wouter";
import { MapPin, Phone, Mail, ArrowRight, TramFront, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { buildFaqSchema } from "@/lib/schema";
import { hotelInfo, attractions } from "@/lib/constants";
import { getPagePath, type Lang } from "@/lib/seo";
import { locationContent } from "@/lib/content/location-content";

// Attractions reachable on foot, in walking order from the hotel
const WALKABLE = [
  "Blue Mosque",
  "Basilica Cistern",
  "Hagia Sophia",
  "Grand Bazaar",
  "Topkapi Palace",
  "Spice Bazaar",
];

export default function Location() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const lang: Lang = isEn ? "en" : "tr";
  const c = locationContent[lang];

  const walkable = WALKABLE.map((key) =>
    attractions.find((a) => a.nameEn === key),
  ).filter(Boolean) as typeof attractions;

  return (
    <Layout>
      <JsonLd data={buildFaqSchema(c.faq)} />

      {/* Header */}
      <div className="bg-black text-white pt-40 pb-24 text-center relative">
        <div className="absolute inset-0 bg-[url('/assets/textures/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">{c.eyebrow}</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">{c.h1}</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">{c.lead}</p>
          <div className="mt-10 flex justify-center">
            <Breadcrumbs
              items={[
                { label: t("nav.home"), href: getPagePath("home", lang) },
                { label: c.eyebrow },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Address & Map */}
      <section className="bg-black py-20 border-t border-white/10 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h2 className="font-serif text-4xl text-white">{c.addressTitle}</h2>
              <address className="not-italic space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/50 mb-2">{hotelInfo.fullName}</h3>
                    <p className="text-white/80 leading-relaxed font-light">{isEn ? hotelInfo.addressEn : hotelInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold-500 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/50 mb-2">{c.phoneLabel}</h3>
                    <a href={`tel:${hotelInfo.phone.replace(/[^0-9]/g, "")}`} className="text-white/80 font-light hover:text-gold-500 transition-colors">
                      {hotelInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold-500 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/50 mb-2">{c.emailLabel}</h3>
                    <a href={`mailto:${hotelInfo.email}`} className="text-white/80 font-light hover:text-gold-500 transition-colors">
                      {hotelInfo.email}
                    </a>
                  </div>
                </div>
              </address>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 rounded-none px-8 py-6 text-xs uppercase tracking-widest transition-all">
                <a href={hotelInfo.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {c.directionsLabel} <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-[420px] border border-white/10 relative grayscale hover:grayscale-0 transition-all duration-700"
            >
              <iframe
                src={hotelInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Emerald Mansion Location Map"
                className="opacity-70 hover:opacity-100 transition-opacity"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Sultanahmet */}
      <section className="bg-emerald-950 py-24 border-t border-white/10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/textures/stardust.png')] opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          <h2 className="font-serif text-4xl mb-8">{c.aboutTitle}</h2>
          <div className="space-y-6 text-white/70 font-light leading-loose text-lg">
            <p>{c.aboutText1}</p>
            <p>
              {c.aboutText2}{" "}
              <Link href={getPagePath("sultanahmet", lang)} className="text-gold-500 hover:text-white border-b border-gold-500/50 hover:border-white transition-colors cursor-pointer">
                {c.aboutGuideAnchor}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Attractions distances */}
      <section className="bg-black py-24 border-t border-white/10 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="font-serif text-4xl mb-6">{c.attractionsTitle}</h2>
          <p className="text-white/60 font-light max-w-3xl mb-12">{c.attractionsText}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {walkable.map((place) => (
              <div key={place.nameEn} className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-6 py-5 hover:border-gold-500/40 transition-colors">
                <span className="font-serif text-lg text-white">{isEn ? place.nameEn : place.name}</span>
                <span className="text-xs uppercase tracking-widest text-gold-500 text-right">
                  {place.distance}
                  <span className="block text-white/60 normal-case tracking-normal mt-1">{isEn ? place.timeEn : place.time}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tram & Airports */}
      <section className="bg-black pb-24 text-white">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold-500 shrink-0">
                <TramFront size={20} />
              </div>
              <h2 className="font-serif text-3xl">{c.tramTitle}</h2>
            </div>
            <p className="text-white/60 font-light leading-relaxed">{c.tramText1}</p>
            <p className="text-white/60 font-light leading-relaxed">{c.tramText2}</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold-500 shrink-0">
                <Plane size={20} />
              </div>
              <h2 className="font-serif text-3xl">{c.airportsTitle}</h2>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gold-500 mb-2">{c.airportIstTitle}</h3>
              <p className="text-white/60 font-light leading-relaxed">{c.airportIstText}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gold-500 mb-2">{c.airportSawTitle}</h3>
              <p className="text-white/60 font-light leading-relaxed">{c.airportSawText}</p>
            </div>
            <div className="border border-gold-500/30 bg-emerald-950/40 p-6">
              <h3 className="text-sm uppercase tracking-widest text-gold-500 mb-2">{c.transferTitle}</h3>
              <p className="text-white/60 font-light leading-relaxed">{c.transferText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-emerald-950 py-24 border-t border-white/10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/textures/stardust.png')] opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          <h2 className="font-serif text-4xl mb-12">{c.faqTitle}</h2>
          <div className="space-y-8">
            {c.faq.map((item, i) => (
              <div key={i} className="border-b border-white/10 pb-8">
                <h3 className="font-serif text-xl text-gold-500 mb-3">{item.q}</h3>
                <p className="text-white/70 font-light leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal link CTA */}
      <section className="bg-black py-24 border-t border-white/10 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl space-y-8">
          <h2 className="font-serif text-4xl">{c.ctaTitle}</h2>
          <p className="text-white/60 font-light">{c.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold-500 text-black hover:bg-white hover:text-black rounded-none h-14 px-8 uppercase tracking-widest text-xs font-bold">
              <Link href={getPagePath("rooms", lang)}>{c.ctaRoomsAnchor}</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-none h-14 px-8 uppercase tracking-widest text-xs">
              <Link href={getPagePath("guide", lang)}>{c.ctaGuideAnchor}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
