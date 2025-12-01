
import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-white pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="block cursor-pointer w-max">
               <img src="/assets/logo.svg" alt="Emerald Mansion" className="h-16 w-auto brightness-0 invert opacity-90" />
            </Link>
            <p className="text-lg font-serif text-white/70 italic leading-relaxed max-w-md">
              "Tarihin kalbinde, lüksün en zarif hali."
            </p>
            <div className="flex gap-6 pt-4">
              <a href="#" className="text-white/40 hover:text-gold-400 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-white/40 hover:text-gold-400 transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-white/40 hover:text-gold-400 transition-colors"><Twitter size={24} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="subtitle mb-8 text-white/90">Keşfet</h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/odalar", label: "Odalar" },
                { href: "/hakkimizda", label: "Hikayemiz" },
                { href: "/galeri", label: "Galeri" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors font-light cursor-pointer">
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="subtitle mb-8 text-white/90">Deneyim</h4>
            <ul className="space-y-4">
              {[
                { href: "/gezilecek-yerler", label: "Gezilecek Yerler" },
                { href: "/iletisim", label: "İletişim" },
                { href: hotelInfo.bookingUrl, label: "Rezervasyon", external: true },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                     <a href={link.href} target="_blank" className="text-white/60 hover:text-white transition-colors font-light">
                       {link.label}
                     </a>
                  ) : (
                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors font-light cursor-pointer">
                        {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Large */}
          <div className="lg:col-span-4">
            <h4 className="subtitle mb-8 text-white/90">İletişim</h4>
            <p className="text-2xl font-serif text-white mb-2 hover:text-gold-400 transition-colors cursor-pointer">
              <a href="tel:+902121234567">+90 212 123 45 67</a>
            </p>
            <p className="text-white/60 font-light mb-8">
              <a href={`mailto:${hotelInfo.email}`} className="hover:text-white transition-colors">{hotelInfo.email}</a>
            </p>
            <p className="text-white/60 font-light leading-relaxed max-w-xs">
              {hotelInfo.address}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest text-white/30">
          <p>© 2025 Emerald Mansion</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Gizlilik</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
