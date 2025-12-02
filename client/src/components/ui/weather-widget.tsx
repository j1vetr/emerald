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
  const [weather, setWeather] = useState<{ temp: number, condition: string, city: string } | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Fetch real weather data from Open-Meteo (No API key required)
    const fetchWeather = async () => {
      try {
        // Istanbul coordinates: 41.0082° N, 28.9784° E
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current=temperature_2m,weather_code&timezone=auto');
        const data = await res.json();
        
        // Map WMO weather codes to our conditions
        const code = data.current.weather_code;
        let condition = "Clear";
        
        if (code === 0) condition = "Clear";
        else if (code >= 1 && code <= 3) condition = "Partly";
        else if (code >= 45 && code <= 48) condition = "Clouds";
        else if (code >= 51 && code <= 67) condition = "Rain";
        else if (code >= 80 && code <= 82) condition = "Rain";
        else if (code >= 95) condition = "Rain"; // Thunderstorm
        
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          condition,
          city: "Istanbul"
        });
      } catch (error) {
        console.error("Weather fetch failed", error);
        // Fallback to default if fetch fails
        setWeather({
          temp: 18,
          condition: "Partly",
          city: "Istanbul"
        });
      }
    };

    fetchWeather();
    // Refresh weather every 30 mins
    const weatherInterval = setInterval(fetchWeather, 1000 * 60 * 30);

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
    const timeInterval = setInterval(updateTime, 1000 * 60);

    return () => {
      clearInterval(weatherInterval);
      clearInterval(timeInterval);
    };
  }, [i18n.language]);

  if (!mounted || !weather) return null;

  return (
    <div className="flex items-center gap-6 text-xs font-light tracking-widest h-8">
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