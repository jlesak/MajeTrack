async function fetchWeather(city: string): Promise<WeatherData> {
    const res = await fetch(`http://localhost:3000/api/weather?city=${city}`);
    if (!res.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return res.json();
  }

  export interface WeatherData {
    temperatureC: number;
    date: string;
    city: string;
  }
  
  export default async function WeatherServer({ city }: { city: string }) {
    try {
      const weatherData = await fetchWeather(city);
      return (
        weatherData
      );
    } catch (error) {
      return <p className="text-red-500">Error fetching weather data</p>;
    }
  }