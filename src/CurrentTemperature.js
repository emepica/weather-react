import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <div className="float-left">
      <img src={props.icon} alt={props.description} title={props.description} id="current-icon" width="100px" />
      </div>
      <span className="current temperature float-right">
        <span className="current-temperature">{props.temperature}</span>
        <span className="units right">°C</span>
      </span>
    </div>
  );
}
