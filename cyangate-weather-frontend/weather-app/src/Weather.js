import React, { useState } from "react";
import axios from "axios";

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
      <div className="row">
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
        <div className="mt-3">
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p>Sıcaklık: {weather.main.temp} °C</p>
          <p>Açıklama: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
