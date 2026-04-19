import { useState, useEffect } from "react";

const API = "http://localhost:3001/api";

export default function useWeather(latitude, longitude) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (latitude == null || longitude == null) return;

    setLoading(true);
    setError(null);

    fetch(`${API}/weather?lat=${latitude}&lon=${longitude}`, { credentials: "include" })
      .then((res) => {
        if (!res.ok) throw new Error("Weather unavailable");
        return res.json();
      })
      .then((data) => {
        setWeather({
          temp: Math.round(data.main.temp),
          feels: Math.round(data.main.feels_like),
          humidity: data.main.humidity,
          wind: Math.round(data.wind.speed * 3.6), // m/s → km/h
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [latitude, longitude]);

  return { weather, loading, error };
}
