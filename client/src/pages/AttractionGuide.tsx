import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { buildAttractionSchema, buildFaqSchema } from "@/lib/schema";
import { getGuide, guides, guideUi } from "@/lib/content/guide-content";
import {
  findGuideKeyBySlug,
  findPageByPath,
  getGuidePath,
  getPagePath,
  type Lang,
} from "@/lib/seo";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Footprints, Info, MapPin } from "lucide-react";

export default function AttractionGuide({
  slug,
  routeLang,
}: {
  slug: string;
  routeLang: Lang;
}) {
  const { t } = useTranslation();
  // The route determines the language. This avoids a brief wrong-language
  // render during back/forward navigation before LanguageSync's effect runs.
  const lang: Lang = routeLang;

  const key = findGuideKeyBySlug(slug, routeLang);
  if (!key) return <NotFound />;

  const guide = getGuide(key);
  const copy = guide.copy[lang];
  const ui = guideUi[lang];
  const path = getGuidePath(key, lang);
  const pageDef = findPageByPath(path);
  const otherGuides = guides.filter((g) => g.key !== key);

  return (
    <Layout>
      <JsonLd
        data={buildAttractionSchema({
          name: copy.name,
          description: pageDef ? pageDef.page.description[lang] : copy.intro[0],
          path,
          image: guide.image,
        })}
      />
      <JsonLd data={buildFaqSchema(copy.faq)} />

      {/* Hero */}
      <div className="relative bg-black text-white">
        <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
          <img
            src={guide.image}
            alt={copy.heroAlt}
            width={1280}
            height={853}
            className="w-full h-full object-cover opacity-70"
            fetchPriority="high"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 pb-14 px-6">
            <div className="container mx-auto">
              <Breadcrumbs
                className="mb-6"
                items={[
                  { label: t("nav.home"), href: getPagePath("home", lang) },
                  { label: ui.breadcrumbGuide, href: getPagePath("guide", lang) },
                  { label: copy.name },
                ]}
              />
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight drop-shadow-lg">
                {copy.name}
              </h1>
              <p className="text-gold-500 font-serif italic text-xl md:text-2xl mb-8">
                {copy.tagline}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-black/70 backdrop-blur-sm border border-white/10 px-4 py-2 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <Footprints size={14} className="text-gold-500" />
                  {guide.distance} {ui.fromHotelBadge}
                </span>
                <span className="bg-black/70 backdrop-blur-sm border border-white/10 px-4 py-2 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <MapPin size={14} className="text-gold-500" />
                  {guide.walkTime[lang]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-6 py-20 max-w-4xl">
          {/* Intro */}
          <div className="space-y-6 mb-20">
            {copy.intro.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-white/80 text-lg md:text-xl font-light leading-relaxed border-l border-gold-500 pl-6"
                    : "text-white/60 font-light leading-loose"
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* What to see */}
          <section className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl mb-10">
              {copy.whatToSee.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {copy.whatToSee.items.map((item) => (
                <div
                  key={item.title}
                  className="border border-white/10 bg-white/[0.02] p-8 hover:border-gold-500/40 transition-colors"
                >
                  <h3 className="font-serif text-xl text-gold-500 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Getting there */}
          <section className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              {copy.fromHotel.heading}
            </h2>
            <div className="space-y-5">
              {copy.fromHotel.paragraphs.map((p, i) => (
                <p key={i} className="text-white/60 font-light leading-loose">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              {copy.tips.heading}
            </h2>
            <ul className="space-y-4">
              {copy.tips.items.map((tip, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-gold-500 font-serif text-lg leading-none mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/60 font-light leading-relaxed">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-white/60 text-sm font-light flex items-start gap-3 border border-white/10 bg-white/[0.02] p-5">
              <Info size={16} className="text-gold-500 shrink-0 mt-0.5" />
              {ui.officialNote}
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl mb-10">
              {ui.faqHeading}
            </h2>
            <div className="space-y-8">
              {copy.faq.map((item) => (
                <div key={item.q} className="border-b border-white/10 pb-8">
                  <h3 className="font-serif text-xl text-white mb-3">{item.q}</h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Nearby guides */}
          <section className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {ui.nearbyHeading}
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-10">
              {ui.nearbyIntro}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {otherGuides.map((g) => (
                <Link
                  key={g.key}
                  href={getGuidePath(g.key, lang)}
                  className="group block border border-white/10 overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={g.image}
                      alt={g.copy[lang].heroAlt}
                      width={1280}
                      height={853}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <span className="font-serif text-white group-hover:text-gold-500 transition-colors block text-sm md:text-base">
                      {g.copy[lang].name}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-white/60">
                      {g.distance}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href={getPagePath("sultanahmet", lang)}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-500 hover:text-white border-b border-gold-500/50 hover:border-white transition-colors pb-1"
            >
              {ui.sultanahmetLinkLabel}
              <ArrowRight size={14} />
            </Link>
          </section>
        </div>

        {/* CTA */}
        <div className="border-t border-white/10 bg-emerald-950/30">
          <div className="container mx-auto px-6 py-20 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl mb-6">{ui.ctaTitle}</h2>
              <p className="text-white/60 font-light leading-relaxed mb-10">
                {ui.ctaText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gold-500 text-black hover:bg-white hover:text-black rounded-none px-8 py-6 text-xs uppercase tracking-widest font-bold"
                >
                  <Link href={getPagePath("rooms", lang)}>{ui.ctaRooms}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-xs uppercase tracking-widest"
                >
                  <Link href={getPagePath("location", lang)}>{ui.ctaLocation}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
