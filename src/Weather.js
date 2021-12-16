import React from "react";
import "./Weather.css";
import cloudy from "./cloudy.png";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Seattle</h1>
      <ul>
        <li>Thursday 2:00pm</li>
        <li>Cloudy</li>
        <div className="row">
          <div className="col-6">
            <img src={cloudy} alt="weather icon" />
            43°F
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 9%</li>
              <li>Humidity: 79%</li>
              <li>Wind: 6 mph</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
