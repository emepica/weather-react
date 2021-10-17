import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <img src="http://openweathermap.org/img/wn/10d@2x.png" alt={props.description} title={props.description} id="current-icon" width="100px" />
      <span className="current temperature right">
        <span className="current-temperature">{props.temperature}</span>
        <span className="units right">°C</span>
      </span>
    </div>
  );
}
