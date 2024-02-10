import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function FahrenhietTemperature(event) {
    event.preventDefault();
    setUnit("fahrenhiet");
  }
  function fahrenhiet() {
    return (props.celsius * 9) / 5 + 32;
  }

  function celsiusTemperature(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className=" temperature">{Math.round(props.celsius)}</span>

        <span className="unit p-0">
          ℃|
          <a href="/" onClick={FahrenhietTemperature}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className=" temperature">{Math.round(fahrenhiet())}</span>

        <span className="unit">
          <a href="/" onClick={celsiusTemperature}>
            {" "}
            ℃|
          </a>
          ℉
        </span>
      </div>
    );
  }
}
