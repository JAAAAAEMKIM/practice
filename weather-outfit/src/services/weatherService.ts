export interface WeatherData {
  temperature: number;
  feelsLike: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  location: string;
  icon: string;
}

const API_KEY = 'demo'; // Using demo mode for this example

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  try {
    // Using OpenWeatherMap API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();

    return {
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      condition: data.weather[0].main,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
      location: data.name,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    // Return mock data for demo purposes
    console.warn('Using mock weather data');
    return getMockWeatherData(city);
  }
}

export async function getWeatherByLocation(lat: number, lon: number): Promise<WeatherData> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();

    return {
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      condition: data.weather[0].main,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6),
      location: data.name,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    console.warn('Using mock weather data');
    return getMockWeatherData('Current Location');
  }
}

function getMockWeatherData(city: string): WeatherData {
  const conditions = ['Clear', 'Clouds', 'Rain', 'Snow', 'Thunderstorm'];
  const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
  const temp = Math.floor(Math.random() * 30) + 5; // 5-35°C

  return {
    temperature: temp,
    feelsLike: temp + Math.floor(Math.random() * 5) - 2,
    condition: randomCondition,
    description: randomCondition.toLowerCase(),
    humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
    windSpeed: Math.floor(Math.random() * 30), // 0-30 km/h
    location: city,
    icon: '01d',
  };
}
