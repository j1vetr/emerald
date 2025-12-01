
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Users } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { hotelInfo } from "@/lib/constants";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function BookingWidget({ className }: { className?: string }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <div className={cn(
      "bg-white p-4 md:p-6 shadow-2xl rounded-sm border-t-4 border-gold-500 flex flex-col md:flex-row gap-4 items-end max-w-5xl mx-auto relative z-20 -mt-24 md:-mt-16 lg:mt-0", 
      className
    )}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        
        {/* Check-in Date */}
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Giriş / Çıkış Tarihi</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal rounded-none border-muted hover:bg-muted/20 h-12",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-gold-600" />
                {date ? format(date, "PPP", { locale: tr }) : <span>Tarih Seçin</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                locale={tr}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Misafirler</Label>
          <Select defaultValue="2">
            <SelectTrigger className="w-full rounded-none h-12 border-muted">
              <Users className="mr-2 h-4 w-4 text-gold-600" />
              <SelectValue placeholder="Yetişkin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Yetişkin</SelectItem>
              <SelectItem value="2">2 Yetişkin</SelectItem>
              <SelectItem value="3">3 Yetişkin</SelectItem>
              <SelectItem value="4">4 Yetişkin</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit */}
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-wider font-semibold text-transparent select-none hidden md:block">Rezervasyon</Label>
          <Button 
            asChild 
            className="w-full h-12 bg-emerald-900 hover:bg-emerald-800 text-white rounded-none font-serif tracking-wide text-lg shadow-lg transition-all hover:scale-[1.02]"
          >
            <a href={hotelInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
              Müsaitlik Ara
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
