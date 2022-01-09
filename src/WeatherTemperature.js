import React from "react";

export default function WeatherTemperature(props) {
  
    return (
      <div className="WeatherTemperature">
        <div className="float-left">
          <span className="temperature">{props.fahrenheit}</span>
          <span className="units">
            °F
          </span>
        </div>
      </div>
    );
  
}
