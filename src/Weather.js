import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");
  function getData(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      city: response.data.city,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    });
  }

  function search() {
    let apiKey = `7fa2303eo545aaff0tfbf93c4ef484a6`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(getData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="w-100"
                onChange={handleChangeCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary w-100 p-1" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
