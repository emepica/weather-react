import React from "react";
import "./CurrentTemperature.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      
      <div className="clearfix">
        <div className="float-left">
        <WeatherIcon data = {props.icon}/>
        </div>
      <div className="current temperatures">
        <span className="current-temperature">{props.temperature}</span>
        <span className="units">°C</span>
      </div>
      </div>
    </div>
  );
}
