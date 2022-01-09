import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "eaf7d01f74cab187ef4b58c7a2bb6662";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

<<<<<<< Updated upstream
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="13n" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">44</span>
            <span className="WeatherForecast-temperatures-min">42</span>
=======
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
              <WeatherForecastDay data={forecast}/>
          
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </div>
  );
}
