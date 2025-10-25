import { WeatherData } from './weatherService';

export interface OutfitRecommendation {
  style: string;
  items: string[];
  accessories: string[];
  advice: string;
  emoji: string;
}

export function getOutfitRecommendation(weather: WeatherData): OutfitRecommendation {
  const temp = weather.temperature;
  const condition = weather.condition.toLowerCase();
  const windSpeed = weather.windSpeed;

  // Temperature-based recommendations
  if (temp < 0) {
    return {
      style: 'Arctic Explorer',
      items: [
        'Heavy winter coat',
        'Thermal layers',
        'Insulated pants',
        'Winter boots',
      ],
      accessories: ['Thick scarf', 'Beanie', 'Gloves', 'Warm socks'],
      advice: "It's freezing! Layer up and stay warm!",
      emoji: '🧊',
    };
  } else if (temp < 10) {
    return {
      style: 'Cozy Winter',
      items: [
        'Warm jacket or coat',
        'Long-sleeve shirt',
        'Jeans or warm pants',
        'Closed-toe shoes',
      ],
      accessories: condition.includes('rain')
        ? ['Scarf', 'Light gloves', 'Umbrella']
        : ['Scarf', 'Light gloves'],
      advice: 'Bundle up! A coat is essential today.',
      emoji: '🧥',
    };
  } else if (temp < 15) {
    return {
      style: 'Cool & Casual',
      items: [
        'Light jacket or cardigan',
        'Long-sleeve shirt',
        'Jeans',
        'Sneakers or boots',
      ],
      accessories: condition.includes('rain')
        ? ['Light scarf (optional)', 'Umbrella']
        : ['Light scarf (optional)'],
      advice: 'A light jacket will keep you comfortable.',
      emoji: '👔',
    };
  } else if (temp < 20) {
    return {
      style: 'Spring Comfort',
      items: [
        'Light sweater or hoodie',
        'T-shirt or long-sleeve',
        'Jeans or chinos',
        'Comfortable shoes',
      ],
      accessories: condition.includes('rain')
        ? ['Sunglasses', 'Umbrella']
        : ['Sunglasses'],
      advice: 'Perfect weather! A light layer should be enough.',
      emoji: '🌸',
    };
  } else if (temp < 25) {
    return {
      style: 'Pleasant & Light',
      items: [
        'T-shirt or light blouse',
        'Jeans, shorts, or skirt',
        'Sneakers or sandals',
      ],
      accessories: condition.includes('rain')
        ? ['Sunglasses', 'Hat', 'Umbrella']
        : ['Sunglasses', 'Hat (optional)'],
      advice: 'Great weather! Dress comfortably and enjoy!',
      emoji: '☀️',
    };
  } else if (temp < 30) {
    return {
      style: 'Summer Breeze',
      items: [
        'Light t-shirt or tank top',
        'Shorts or light dress',
        'Sandals or breathable shoes',
      ],
      accessories: ['Sunglasses', 'Sun hat', 'Sunscreen'],
      advice: "It's warm! Stay light and protect yourself from the sun.",
      emoji: '🌞',
    };
  } else {
    return {
      style: 'Heat Wave Survival',
      items: [
        'Breathable, light-colored shirt',
        'Shorts or light skirt',
        'Open sandals',
      ],
      accessories: ['Wide-brim hat', 'Sunglasses', 'Sunscreen', 'Water bottle'],
      advice: "It's hot! Stay cool, hydrated, and avoid direct sun.",
      emoji: '🔥',
    };
  }
}

export function getWeatherIcon(condition: string): string {
  const icons: { [key: string]: string } = {
    clear: '☀️',
    clouds: '☁️',
    rain: '🌧️',
    drizzle: '🌦️',
    thunderstorm: '⛈️',
    snow: '❄️',
    mist: '🌫️',
    fog: '🌫️',
    haze: '🌫️',
  };

  return icons[condition.toLowerCase()] || '🌤️';
}
