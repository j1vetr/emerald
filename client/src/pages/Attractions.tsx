
import { Layout } from "@/components/layout/Layout";
import { attractions } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export default function Attractions() {
  return (
    <Layout>
      <div className="bg-emerald-950 text-white pt-32 pb-16 md:pt-40 md:pb-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Gezilecek Yerler</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
            Otelimize yürüme mesafesinde olan, İstanbul'un binlerce yıllık tarihine 
            tanıklık etmiş eşsiz mekanlar.
          </p>
        </div>
      </div>

      <div className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((place, i) => (
              <Card key={i} className="bg-white border-none shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl text-emerald-950 mb-4">{place.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {place.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
