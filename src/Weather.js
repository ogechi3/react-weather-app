import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function getData(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: "Sunday:23:00",
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="w-100"
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary w-100 p-1" />
            </div>
          </div>
        </form>
        <h1>{props.defaultCity}</h1>

        <div className="row">
          <div className="col-1 p-0">
            <div className="clearfix">
              <div className="float-left">
                <img src={weatherData.iconUrl} className="float-left" />
              </div>
            </div>
          </div>
          <div className="temp-info col-2 p-0 ">
            <span className=" temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">℃</span>
          </div>

          <div className="col-4 p-0">
            <ul>
              <li>Feels like:{Math.round(weatherData.feelsLike)}℃</li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
          <div className="col-4 p-0">
            <h1>Weather</h1>
            <ul>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `7fa2303eo545aaff0tfbf93c4ef484a6`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(getData);
  }
}
