import React from "react";
import axios from "axios";
import "./Current.css";
import CurrentTemperature from "./CurrentTemperature";

export default function Current(response) {

  
  return (
    <div className="Current">
      <h1> Brussels </h1>
      <span className="country" id="country">
        Belgium
      </span>
      <p className="info" id="locale-date">
        Sunday 10:10
      </p>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul className="overview-info">
              <li>Clear </li>
              <li>Clear sky</li>
              <li>Feels like 21°C</li>
            </ul>
          </div>
          <div className="col-md-4">
            <CurrentTemperature />
          </div>
          <div className="col-md-3">
            <ul className="overview-details">
              <li>19 °c/ 22 °c</li>
              <li>Humidity 65%</li>
              <li>Wind 1 km/h</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="overview-details">
              <li>Sunrise 06:46</li>
              <li>Sunset 19:32</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
