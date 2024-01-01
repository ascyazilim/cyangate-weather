import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const cities = ["Ankara", "Istanbul", "Izmir", "Antalya", "Bursa"]; // İstediğiniz şehirleri ekleyebilirsiniz

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/weather?city=${city}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Hava durumu bilgisi alınamadı", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row weather-select">
        <div className="col">
          <select
            className="form-select"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Bir şehir seçiniz</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={fetchWeather}>
            Hava Durumunu Getir
          </button>
        </div>
      </div>
      {weather && (
        <div className="weather-container">
          <div className="weather-header">
            <h3>
              {weather.name}, {weather.sys.country}
            </h3>
          </div>
          <p className="weather-info">
            Sıcaklık: <span>{weather.main.temp} °C</span>
          </p>
          <p className="weather-info">
            Nem: <span>{weather.main.humidity}%</span>
          </p>
          <p className="weather-info">
            Rüzgar Hızı: <span>{weather.wind.speed} m/s</span>
          </p>
          <p className="weather-info">
            Son 1 Saatteki Yağış:{" "}
            <span>{weather.rain ? weather.rain.oneHour + " mm" : "Yok"}</span>
          </p>
          <p className="weather-info">
            Açıklama: <span>{weather.weather[0].description}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
