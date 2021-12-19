import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import cloudy from "./cloudy.png";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
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
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
          <div className="row mt-3">
            <div className="col-6">
              <div className="d-flex">
                <img src={cloudy} alt="weather icon" className="float-left" />
                <div className="float-left">
                  <span className="temperature">{weatherData.temperature}</span>
                  <span className="units">°F</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} mph</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    );
  } else {
    let apiKey = "eaf7d01f74cab187ef4b58c7a2bb6662";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return <h1>Loading...</h1>;
  }
}
