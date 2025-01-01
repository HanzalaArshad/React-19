import React, { useEffect, useState } from "react";

const Weather = () => {
  const [apidata, setApidata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const API_KEY = "a82e483ff5664f41b40f2710c36ac6c6";

  // Helper function to convert Kelvin to Celsius
  const toCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  // Fetch weather data using coordinates (lat, lon)
  const fetchWeather = async (lat, lon) => {
    const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    try {
      const res = await fetch(API);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setApidata(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

  // Get current location using the Geolocation API
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation({ lat, lon });
        },
        (error) => {
          setError("Failed to get location");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeather(location.lat, location.lon);
    }
  }, [location]);

  if (loading) {
    return <h1>LOADING ......</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Weather Details</h1>
      {apidata && (
        <ul>
          <li>Temperature: {toCelsius(apidata.main.temp)}°C</li>
          <li>Feels Like: {toCelsius(apidata.main.feels_like)}°C</li>
          <li>Humidity: {apidata.main.humidity}%</li>
        </ul>
         
         
      )}
    </>
  );
};

export default Weather;
