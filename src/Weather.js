import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

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

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "eaf7d01f74cab187ef4b58c7a2bb6662";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
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
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <h1>Loading...</h1>;
  }
}
