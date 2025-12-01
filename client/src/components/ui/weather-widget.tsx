import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, CloudRain, Sun, CloudSun, Moon, Loader2, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

// Mock weather data since we don't have a real API key in this mockup
// In a real app, this would fetch from OpenWeatherMap or similar
const getWeatherIcon = (condition: string) => {
  switch (condition) {
    case "Clear": return <Sun className="w-4 h-4 text-gold-500" />;
    case "Clouds": return <Cloud className="w-4 h-4 text-white/70" />;
    case "Rain": return <CloudRain className="w-4 h-4 text-blue-400" />;
    case "Partly": return <CloudSun className="w-4 h-4 text-gold-500/70" />;
    default: return <Sun className="w-4 h-4 text-gold-500" />;
  }
};

export function WeatherWidget() {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const { i18n } = useTranslation();
  
  // Mock data
  const weather = {
    temp: 18,
    condition: "Partly",
    city: "Istanbul"
  };

  useEffect(() => {
    setMounted(true);
    // Update time every minute
    const updateTime = () => {
      const now = new Date();
      // Format time based on locale, but always for Istanbul timezone
      const timeString = now.toLocaleTimeString(i18n.language === 'en' ? 'en-US' : 'tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: i18n.language === 'en',
        timeZone: 'Europe/Istanbul'
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);

    return () => clearInterval(interval);
  }, [i18n.language]);

  if (!mounted) return null;

  return (
    <div className="hidden md:flex items-center gap-6 text-xs font-light tracking-widest border-l border-white/10 pl-6 ml-6 h-8">
      {/* Weather */}
      <div className="flex items-center gap-2 text-white/80 group cursor-default">
        <span className="group-hover:scale-110 transition-transform duration-300">
          {getWeatherIcon(weather.condition)}
        </span>
        <span>{weather.temp}°C</span>
        <span className="text-white/40 hidden lg:inline">{weather.city}</span>
      </div>

      {/* Time */}
      <div className="flex items-center gap-2 text-white/80">
        <Clock className="w-3.5 h-3.5 text-gold-500/70" />
        <span>{time}</span>
      </div>
    </div>
  );
}