import React from "react";
import "./Current.css";
import UpdateInfo from "./UpdateInfo";
import CurrentTemperature from "./CurrentTemperature";
import FormattedDate from "./FormattedDate";
import Day from "./Day";

export default function Current(props) {

  let sunrise = props.data.sunrise*1000;
  let sunset = props.data.sunset*1000;
  let timeOffset = props.data.date.getTimezoneOffset()*60000;
  let timezone = props.data.timezone*1000;

  //Sunrise setting up
  const sunriseTime = new Date (sunrise+timeOffset+timezone);
  let sunriseMin = sunriseTime.getMinutes();
  if (sunriseMin<10) {
    sunriseMin =`0${sunriseMin}`;  
  }
  let sunriseHour = sunriseTime.getHours();
  if (sunriseHour<10) {
    sunriseHour =`0${sunriseHour}`;  
  }

  //Sunset setting up
  const sunsetTime = new Date (sunset+timeOffset+timezone);
  let sunsetMin = sunsetTime.getMinutes();
  if (sunsetMin<10) {
    sunsetMin =`0${sunsetMin}`;  
  }
  let sunsetHour = sunsetTime.getHours();
  if (sunsetHour<10) {
    sunsetHour =`0${sunsetHour}`;  
  }

  return (
    <div className="Current">
      <UpdateInfo date = {props.data.date} timezone={props.data.timezone}/>
      <h1> {props.data.city} </h1>
      <span className="country" id="country">
        {props.data.country}
      </span>
      <p className="info" id="locale-date">
      <Day date = {props.data.date} timezone={props.data.timezone}/>
      </p>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul className="overview-info">
              <li><FormattedDate date = {props.data.date} timezone={props.data.timezone}/> </li>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Feels like {props.data.feels}{props.unit.format}</li>
            </ul>
          </div>
          <div className="col-md-4">
            <CurrentTemperature temperature = {props.data.temperature} icon = {props.data.icon} description = {props.data.description} unit={props.unit}/>
          </div>
          <div className="col-md-3">
            <ul className="overview-details">
              <li>{props.data.minTemp} {props.unit.format} | {props.data.maxTemp}{props.unit.format}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} {props.unit.speed}</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="overview-details">
             <li>Sunrise {sunriseHour}:{sunriseMin}</li>
              <li>Sunset {sunsetHour}:{sunsetMin}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
