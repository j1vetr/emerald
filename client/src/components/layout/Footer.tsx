
import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-white/80 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block cursor-pointer">
                <img src="/assets/logo.svg" alt="Emerald Mansion" className="h-16 w-auto brightness-0 invert opacity-90" />
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              İstanbul'un kalbinde, tarihin ve lüksün buluştuğu nokta. Osmanlı zarafetini modern konforla deneyimleyin.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-500 hover:text-emerald-950 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-500 hover:text-emerald-950 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-500 hover:text-emerald-950 transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl text-gold-400 mb-6">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/odalar", label: "Odalar" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/galeri", label: "Galeri" },
                { href: "/gezilecek-yerler", label: "Gezilecek Yerler" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group cursor-pointer">
                      <span className="w-1 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl text-gold-400 mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <span className="text-sm">{hotelInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="tel:+902121234567" className="text-sm hover:text-gold-400 transition-colors">+90 212 123 45 67</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="text-sm hover:text-gold-400 transition-colors">{hotelInfo.email}</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="font-serif text-xl text-gold-400 mb-6">Rezervasyon</h3>
            <p className="text-sm text-white/60 mb-6">
              En iyi fiyat garantisi ve özel fırsatlar için web sitemizden rezervasyon yapın.
            </p>
            <Button 
              asChild 
              className="w-full bg-gold-500 text-emerald-950 hover:bg-gold-400 rounded-none font-semibold py-6 text-md"
            >
              <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                Rezervasyon Yap
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2025 Emerald Mansion. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">KVKK</a>
            <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
