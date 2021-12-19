import React from "react";
import cloudy from "./cloudy.png";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <WeatherIcon code={props.data.icon} size={52}/>
              <div className="float-left">
                <span className="temperature">{props.data.temperature}</span>
                <span className="units">°F</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} mph</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
