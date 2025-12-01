
import { Layout } from "@/components/layout/Layout";
import { hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-black text-white pt-40 pb-24 text-center relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">Bize Ulaşın</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">İletişim</h1>
        </div>
      </div>

      <div className="bg-black py-20 border-t border-white/10 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl text-white mb-10">Mesaj Gönderin</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/50 text-xs uppercase tracking-widest">Adınız Soyadınız</Label>
                    <Input id="name" className="h-14 bg-white/5 border-white/10 focus:border-gold-500 text-white rounded-none" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/50 text-xs uppercase tracking-widest">E-posta Adresiniz</Label>
                    <Input id="email" type="email" className="h-14 bg-white/5 border-white/10 focus:border-gold-500 text-white rounded-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white/50 text-xs uppercase tracking-widest">Konu</Label>
                  <Input id="subject" className="h-14 bg-white/5 border-white/10 focus:border-gold-500 text-white rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/50 text-xs uppercase tracking-widest">Mesajınız</Label>
                  <Textarea id="message" className="min-h-[150px] bg-white/5 border-white/10 focus:border-gold-500 text-white rounded-none resize-none" />
                </div>
                <Button className="w-full md:w-auto bg-gold-500 text-black hover:bg-white hover:text-black rounded-none px-12 h-14 text-xs uppercase tracking-[0.2em] font-bold">
                  Gönder
                </Button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="font-serif text-3xl text-white mb-10">Bilgiler</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold-500 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2">Adres</h4>
                      <p className="text-white/80 leading-relaxed font-light">{hotelInfo.address}</p>
                    </div>
                </div>
                
                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold-500 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2">Telefon</h4>
                      <p className="text-white/80 leading-relaxed font-light">+90 212 123 45 67</p>
                    </div>
                </div>

                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold-500 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2">E-posta</h4>
                      <p className="text-white/80 leading-relaxed font-light">{hotelInfo.email}</p>
                    </div>
                </div>
              </div>

              <div className="w-full h-[300px] border border-white/10 mt-8 relative grayscale hover:grayscale-0 transition-all duration-700">
                 {/* Dummy Map */}
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.766668638832!2d28.975424876685497!3d41.00823767135048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be92011c27%3A0x236e6f6f37444fae!2sSultanahmet%2C%20Fatih%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1708540000000!5m2!1str!2str" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Emerald Mansion Location"
                   className="opacity-70 hover:opacity-100 transition-opacity"
                 ></iframe>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
