import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event){
      event.preventDefault();
      setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <div className="float-left">
          <span className="temperature">{props.fahrenheit}</span>
          <span className="units">
            °F |{" "}
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let celsiusTemperature = Math.round((props.fahrenheit - 32) * (5 / 9));
    return (
      <div className="WeatherTemperature">
        <div className="float-left">
          <span className="temperature">{celsiusTemperature}</span>
          <span className="units">
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>{" "}
            | °C
          </span>
        </div>
      </div>
    );
  }
}
