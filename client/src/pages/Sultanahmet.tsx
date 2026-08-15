import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { buildFaqSchema } from "@/lib/schema";
import { attractions } from "@/lib/constants";
import { getGuidePath, getPagePath, type GuideKey, type Lang } from "@/lib/seo";
import { sultanahmetContent } from "@/lib/content/sultanahmet-content";

// Attractions with a dedicated guide page, keyed by their English name
const guideKeyByName: Record<string, GuideKey> = {
  "Hagia Sophia": "hagia-sophia",
  "Blue Mosque": "blue-mosque",
  "Grand Bazaar": "grand-bazaar",
  "Basilica Cistern": "basilica-cistern",
  "Topkapi Palace": "topkapi-palace",
};

export default function Sultanahmet() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const lang: Lang = isEn ? "en" : "tr";
  const c = sultanahmetContent[lang];

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
                { label: c.h1 },
              ]}
            />
          </div>
        </div>
      </div>

      {/* What & Why */}
      <section className="bg-black py-20 border-t border-white/10 text-white">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl">{c.what.title}</h2>
            {c.what.paragraphs.map((p, i) => (
              <p key={i} className="text-white/60 font-light leading-loose">{p}</p>
            ))}
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-4xl">{c.why.title}</h2>
            {c.why.paragraphs.map((p, i) => (
              <p key={i} className="text-white/60 font-light leading-loose">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Things to do */}
      <section className="bg-emerald-950 py-24 border-t border-white/10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/textures/stardust.png')] opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="font-serif text-4xl mb-16 text-center">{c.thingsTitle}</h2>
          <div className="space-y-16 max-w-5xl mx-auto">
            {c.things.map((thing, i) => {
              const attraction = attractions.find((a) => a.nameEn === thing.attractionKey);
              return (
                <article key={thing.attractionKey} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  <div className="md:[direction:ltr]">
                    {attraction && (
                      <div className="aspect-[16/10] overflow-hidden border border-white/10">
                        <img
                          src={attraction.image}
                          alt={thing.title}
                          width={1280}
                          height={853}
                          loading="lazy"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                        />
                      </div>
                    )}
                  </div>
                  <div className="md:[direction:ltr] space-y-4">
                    <h3 className="font-serif text-3xl text-white">{thing.title}</h3>
                    {attraction && (
                      <p className="text-xs uppercase tracking-widest text-gold-500">
                        {attraction.distance} • {isEn ? attraction.timeEn : attraction.time}
                      </p>
                    )}
                    <p className="text-white/60 font-light leading-relaxed">{thing.text}</p>
                    {guideKeyByName[thing.attractionKey] && (
                      <Link
                        href={getGuidePath(guideKeyByName[thing.attractionKey], lang)}
                        className="inline-block text-xs uppercase tracking-widest text-gold-500 hover:text-white border-b border-gold-500/50 hover:border-white transition-colors pb-1"
                      >
                        {isEn ? "Read the full guide" : "Detaylı rehberi okuyun"}
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Getting around */}
      <section className="bg-black py-24 border-t border-white/10 text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="font-serif text-4xl mb-8">{c.gettingAround.title}</h2>
          <div className="space-y-6 text-white/60 font-light leading-loose text-lg">
            {c.gettingAround.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Where to stay */}
      <section className="bg-black pb-24 text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="border border-gold-500/30 bg-emerald-950/40 p-10 md:p-14">
            <h2 className="font-serif text-4xl mb-6">{c.whereToStayTitle}</h2>
            <p className="text-white/70 font-light leading-loose text-lg">
              {c.whereToStayText1}{" "}
              <Link href={getPagePath("home", lang)} className="text-gold-500 hover:text-white border-b border-gold-500/50 hover:border-white transition-colors cursor-pointer">
                {c.whereToStayAnchorHome}
              </Link>{" "}
              {c.whereToStayText2}{" "}
              <Link href={getPagePath("rooms", lang)} className="text-gold-500 hover:text-white border-b border-gold-500/50 hover:border-white transition-colors cursor-pointer">
                {c.whereToStayAnchorRooms}
              </Link>
              {c.whereToStayText3 === "." ? "." : <> {c.whereToStayText3}</>}
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-emerald-950 py-24 border-t border-white/10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/textures/stardust.png')] opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          <h2 className="font-serif text-4xl mb-6">{c.itineraryTitle}</h2>
          <p className="text-white/60 font-light mb-12">{c.itineraryIntro}</p>
          <ol className="space-y-8">
            {c.itinerary.map((step) => (
              <li key={step.time} className="flex gap-8 border-b border-white/10 pb-8">
                <span className="font-serif text-2xl text-gold-500 shrink-0 w-20">{step.time}</span>
                <div>
                  <h3 className="font-serif text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-24 border-t border-white/10 text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="font-serif text-4xl mb-12">{c.faqTitle}</h2>
          <div className="space-y-8">
            {c.faq.map((item, i) => (
              <div key={i} className="border-b border-white/10 pb-8">
                <h3 className="font-serif text-xl text-gold-500 mb-3">{item.q}</h3>
                <p className="text-white/70 font-light leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 rounded-none h-14 px-8 uppercase tracking-widest text-xs">
              <Link href={getPagePath("location", lang)}>
                {isEn ? "See Our Location & Directions" : "Konumumuzu ve Ulaşımı Görün"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
