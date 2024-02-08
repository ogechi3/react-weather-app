import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <div className="row">
        <div className="col-1 p-0">
          <div className="clearfix">
            <div className="float-left">
              <img src={props.data.iconUrl} className="float-left" alt="" />
            </div>
          </div>
        </div>
        <div className="temp-info col-2 p-0 ">
          <span className=" temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">℃</span>
        </div>

        <div className="col-4 p-0">
          <ul>
            <li>Feels like:{Math.round(props.data.feelsLike)}℃</li>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind}km/h</li>
          </ul>
        </div>
        <div className="col-4 p-0">
          <h1>Weather</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
