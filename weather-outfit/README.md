# Weather Outfit Recommender

A mobile-first React TypeScript application that recommends outfit styles based on current weather conditions.

## Features

- Real-time weather information display
- Smart outfit recommendations based on temperature and weather conditions
- Beautiful, responsive card-based UI
- Mobile-first design with Tailwind CSS
- City search functionality

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Vite

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

## How It Works

1. Enter a city name in the search box
2. View current weather information including:
   - Temperature
   - Feels like temperature
   - Humidity
   - Wind speed
   - Weather condition
3. Get personalized outfit recommendations based on:
   - Current temperature
   - Weather conditions (rain, snow, etc.)
   - Wind speed

## Outfit Categories

- Arctic Explorer (< 0°C)
- Cozy Winter (0-10°C)
- Cool & Casual (10-15°C)
- Spring Comfort (15-20°C)
- Pleasant & Light (20-25°C)
- Summer Breeze (25-30°C)
- Heat Wave Survival (> 30°C)

## API

The app uses OpenWeatherMap API for weather data. For demo purposes, it falls back to mock data if the API is unavailable.
