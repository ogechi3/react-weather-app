import React from "react";

import "./Weather.css";

export default function Weather() {
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
      <h1>New york</h1>

      <div className="row">
        <div className="col-2">
          <div className="clearfix">
            <div className="float-left">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="clear-sky"
                className="float-left"
              />
              <span className=" temperature">2</span>
              <span className="unit">℃</span>
            </div>
          </div>
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
