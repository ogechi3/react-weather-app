import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <form>
        <input type="search" placeholder="Enter a city..." autoFocus />
        <input type="submit" className="btn btn-primary" />
      </form>
      <div className="row">
        <div className="col-1">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear-sky"
          />
        </div>
        <div className="col-1">
          <h1>2℃</h1>
        </div>
        <div className="col-5">
          <ul>
            <li>Precipitation:0%</li>
            <li>Humidity:51%</li>
            <li>Wind:11km/h</li>
          </ul>
        </div>
        <div className="col-5">
          <h1>Weather</h1>
          <ul>
            <li>sunday:23:00</li>
            <li>Clear</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
