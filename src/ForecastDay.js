import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props){
    let minTemp=Math.round(props.data.temp.min);
    let maxTemp=Math.round(props.data.temp.max);
    function day (){
       let date = new Date (props.data.dt*1000);
       let day = date.getDay();
       let days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
       return days[day];
    }
    return(
    <div className="ForecastDay">
        <div className="Forecast-day">{day()}</div>
              <div className="Forecast-icon"><WeatherIcon data={props.data.weather[0].icon}/></div>
              <div className="Forecast-temperature">
                  <span className="forecast-minTemp">{minTemp}°C</span> | <span className="forecast-maxTemp">{maxTemp}°C</span>
              </div>
    </div>)
    ;
}