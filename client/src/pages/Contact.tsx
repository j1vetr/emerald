import { Layout } from "@/components/layout/Layout";
import { hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="bg-black text-white pt-40 pb-24 text-center relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-6 block">{t('contact.subtitle')}</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">{t('contact.title')}</h1>
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
              <h2 className="font-serif text-3xl text-white mb-10">{t('contact.sendHeading')}</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/50 text-xs uppercase tracking-widest">{t('contact.name')}</Label>
                    <Input id="name" className="h-14 bg-white/5 border-white/10 focus:border-gold-500 text-white rounded-none" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/50 text-xs uppercase tracking-widest">{t('contact.email')}</Label>
                    <Input id="email" type="email" className="h-14 bg-white/5 border-white/10 focus:border-gold-500 text-white rounded-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white/50 text-xs uppercase tracking-widest">{t('contact.subject')}</Label>
                  <Input id="subject" className="h-14 bg-white/5 border-white/10 focus:border-gold-500 text-white rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/50 text-xs uppercase tracking-widest">{t('contact.message')}</Label>
                  <Textarea id="message" className="min-h-[150px] bg-white/5 border-white/10 focus:border-gold-500 text-white rounded-none resize-none" />
                </div>
                <Button className="w-full md:w-auto bg-gold-500 text-black hover:bg-white hover:text-black rounded-none px-12 h-14 text-xs uppercase tracking-[0.2em] font-bold">
                  {t('contact.send')}
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
              <h2 className="font-serif text-3xl text-white mb-10">{t('contact.infoHeading')}</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold-500 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2">{t('footer.address')}</h4>
                      <p className="text-white/80 leading-relaxed font-light">{hotelInfo.address}</p>
                    </div>
                </div>
                
                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold-500 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2">Telefon</h4>
                      <p className="text-white/80 leading-relaxed font-light">{hotelInfo.phone}</p>
                    </div>
                </div>

                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold-500 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/50 mb-2">{t('footer.email')}</h4>
                      <p className="text-white/80 leading-relaxed font-light">{hotelInfo.email}</p>
                    </div>
                </div>
              </div>

              <div className="w-full h-[300px] border border-white/10 mt-8 relative grayscale hover:grayscale-0 transition-all duration-700">
                 {/* Dummy Map */}
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7947200566664!2d28.969653112549302!3d41.00786607123109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab917a4d5843f%3A0x573afc0178ff5218!2sEmerald%20Mansion%20Hotel%20-%20Sultanahmet!5e0!3m2!1str!2str!4v1764695817518!5m2!1str!2str" 
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