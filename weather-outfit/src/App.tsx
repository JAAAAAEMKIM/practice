import { useState, useEffect } from 'react';
import { WeatherCard } from './components/WeatherCard';
import { OutfitCard } from './components/OutfitCard';
import { getWeatherByCity } from './services/weatherService';
import type { WeatherData } from './services/weatherService';
import { getOutfitRecommendation } from './services/outfitService';
import type { OutfitRecommendation } from './services/outfitService';

function App() {
  const [city, setCity] = useState('Seoul');
  const [inputCity, setInputCity] = useState('Seoul');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [outfit, setOutfit] = useState<OutfitRecommendation | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    try {
      const weatherData = await getWeatherByCity(cityName);
      setWeather(weatherData);
      const outfitData = getOutfitRecommendation(weatherData);
      setOutfit(outfitData);
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Outfit Weather
          </h1>
          <p className="text-gray-600">
            Get outfit recommendations based on your local weather
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)}
              placeholder="Enter city name..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          </div>
        </form>

        {/* Content */}
        {weather && outfit && (
          <div className="space-y-6">
            <WeatherCard weather={weather} />
            <OutfitCard outfit={outfit} />
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Weather data updates in real-time</p>
          <p className="mt-1">Built with React + TypeScript + Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default App;
