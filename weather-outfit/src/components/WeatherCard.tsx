import { WeatherData } from '../services/weatherService';
import { getWeatherIcon } from '../services/outfitService';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">{weather.location}</h2>
          <p className="text-blue-100 capitalize">{weather.description}</p>
        </div>
        <div className="text-5xl">
          {getWeatherIcon(weather.condition)}
        </div>
      </div>

      <div className="flex items-end mb-6">
        <div className="text-6xl font-bold">{weather.temperature}°</div>
        <div className="text-2xl ml-2 mb-2 text-blue-100">C</div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-300/30">
        <div className="text-center">
          <div className="text-blue-100 text-sm">Feels Like</div>
          <div className="text-xl font-semibold">{weather.feelsLike}°C</div>
        </div>
        <div className="text-center">
          <div className="text-blue-100 text-sm">Humidity</div>
          <div className="text-xl font-semibold">{weather.humidity}%</div>
        </div>
        <div className="text-center">
          <div className="text-blue-100 text-sm">Wind</div>
          <div className="text-xl font-semibold">{weather.windSpeed} km/h</div>
        </div>
      </div>
    </div>
  );
}
