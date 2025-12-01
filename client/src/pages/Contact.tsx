
import { Layout } from "@/components/layout/Layout";
import { hotelInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-emerald-950 text-white pt-32 pb-16 md:pt-40 md:pb-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl mb-6">İletişim</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
            Sorularınız ve rezervasyon talepleriniz için bize dilediğiniz zaman ulaşabilirsiniz.
          </p>
        </div>
      </div>

      <div className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-emerald-950 mb-8">Bize Yazın</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Adınız Soyadınız</Label>
                    <Input id="name" placeholder="Adınız" className="h-12 rounded-none border-gray-300 focus:border-gold-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta Adresiniz</Label>
                    <Input id="email" type="email" placeholder="ornek@email.com" className="h-12 rounded-none border-gray-300 focus:border-gold-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Konu</Label>
                  <Input id="subject" placeholder="Mesajınızın konusu" className="h-12 rounded-none border-gray-300 focus:border-gold-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mesajınız</Label>
                  <Textarea id="message" placeholder="Mesajınızı buraya yazın..." className="min-h-[150px] rounded-none border-gray-300 focus:border-gold-500 resize-none" />
                </div>
                <Button className="w-full md:w-auto bg-emerald-900 hover:bg-emerald-800 text-white rounded-none px-10 h-12 text-base">
                  Gönder
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <h2 className="font-serif text-3xl text-emerald-950 mb-8">İletişim Bilgileri</h2>
              
              <div className="grid gap-6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-lg text-emerald-950 mb-1">Adres</h4>
                      <p className="text-muted-foreground leading-relaxed">{hotelInfo.address}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-lg text-emerald-950 mb-1">Telefon</h4>
                      <p className="text-muted-foreground">+90 212 123 45 67</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Mail className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-lg text-emerald-950 mb-1">E-posta</h4>
                      <p className="text-muted-foreground">{hotelInfo.email}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="w-full h-[300px] bg-gray-200 rounded-sm overflow-hidden shadow-lg mt-8 relative">
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
                 ></iframe>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
