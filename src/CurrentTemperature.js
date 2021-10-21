import React from "react";
import "./CurrentTemperature.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      
      <div className="d-flex">
        <div className="d-vertical-center ">
        <WeatherIcon data = {props.icon}/>
        </div>
      <div className="current temperatures">
        <span className="current-temperature">{props.temperature}</span>
        <span className="units">{props.unit.format}</span>
      </div>
      </div>
    </div>
  );
}
