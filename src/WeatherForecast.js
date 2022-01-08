import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response);
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(forecast);
    console.log(loaded);
  }

  function load() {
    let apiKey = "96419952d8c185a058265bff1346020d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="13n" size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperatures-max">50</span>
              <span className="WeatherForecast-temperatures-min">42</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
