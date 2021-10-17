import React from "react";
import "./Current.css";
import UpdateInfo from "./UpdateInfo";
import CurrentTemperature from "./CurrentTemperature";
import { FormattedDate } from "./FormattedDate";

export default function Current(props) {
  console.log(props);
  return (
    <div className="Current">
      <UpdateInfo date = {props.data.date}/>
      <h1> {props.data.city} </h1>
      <span className="country" id="country">
        {props.data.country}
      </span>
      <p className="info" id="locale-date">
        <FormattedDate date = {props.data.date}/>
      </p>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul className="overview-info">
              <li>Today: </li>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Feels like {props.data.feels}°C</li>
            </ul>
          </div>
          <div className="col-md-4">
            <CurrentTemperature temperature = {props.data.temperature} icon = {props.data.icon} description = {props.data.description}/>
          </div>
          <div className="col-md-3">
            <ul className="overview-details">
              <li>{props.data.minTemp}°C / {props.data.maxTemp}°C</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
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
