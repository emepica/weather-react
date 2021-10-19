import React from "react";
import "./CurrentTemperature.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
     
        <WeatherIcon data = {props.icon}/>
      
      <span className="current temperature float-right">
        <span className="current-temperature">{props.temperature}</span>
        <span className="units right">°C</span>
      </span>
    </div>
  );
}
