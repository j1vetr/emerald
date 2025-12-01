
import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import { hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-2">
               <h2 className="font-serif text-4xl text-white">EMERALD</h2>
               <p className="text-xs uppercase tracking-[0.5em] text-gold-500">Mansion Istanbul</p>
            </div>
            <p className="text-lg font-light text-white/60 italic leading-relaxed max-w-md border-l-2 border-gold-500 pl-6">
              "Tarihin kalbinde, zamanın ötesinde bir lüks. İstanbul'u yaşamanın en asil yolu."
            </p>
            <div className="flex gap-6 pt-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-black hover:bg-gold-500 hover:border-gold-500 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-gold-500 mb-8 font-medium">Menü</h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/odalar", label: "Odalar & Süitler" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/galeri", label: "Galeri" },
                { href: "/gezilecek-yerler", label: "İstanbul Rehberi" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors font-light text-sm flex items-center gap-2 group cursor-pointer">
                      <span className="w-0 group-hover:w-2 h-[1px] bg-gold-500 transition-all duration-300"></span>
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-500 mb-8 font-medium">Bize Ulaşın</h4>
            
            <div className="space-y-8">
               <div className="group">
                 <p className="text-white/40 text-xs uppercase mb-2">Rezervasyon Hattı</p>
                 <a href="tel:+902121234567" className="font-serif text-2xl md:text-3xl text-white group-hover:text-gold-500 transition-colors block">
                   +90 212 123 45 67
                 </a>
               </div>
               
               <div className="group">
                 <p className="text-white/40 text-xs uppercase mb-2">E-Posta</p>
                 <a href={`mailto:${hotelInfo.email}`} className="text-lg text-white/80 group-hover:text-gold-500 transition-colors">
                   {hotelInfo.email}
                 </a>
               </div>

               <div>
                 <p className="text-white/40 text-xs uppercase mb-2">Adres</p>
                 <p className="text-white/60 font-light leading-relaxed">
                   {hotelInfo.address}
                 </p>
               </div>

               <div className="pt-6">
                 <Button asChild className="bg-white text-black hover:bg-gold-500 hover:text-black w-full rounded-none h-14 uppercase tracking-widest text-xs font-bold">
                    <a href={hotelInfo.bookingUrl} target="_blank">Rezervasyon Yap <ArrowRight className="ml-2 w-4 h-4"/></a>
                 </Button>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/20">
          <div className="flex flex-col md:flex-row gap-4 items-center">
             <p>© 2025 Emerald Mansion. Tüm Hakları Saklıdır.</p>
             <span className="hidden md:inline">•</span>
             <p>
               Tasarım & Geliştirme: <a href="https://toov.com.tr" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors">TOOV</a>
             </p>
          </div>
          <div className="flex gap-8">
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors cursor-pointer">Gizlilik Politikası</Link>
            <Link href="/hizmet-kosullari" className="hover:text-white transition-colors cursor-pointer">Hizmet Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
