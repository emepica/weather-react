import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";


export default function Forecast(props){
    let [loaded, setLoaded]=useState(false);
    let [forecastData,setForecastData]=useState(null);
    console.log(props);

    function handleResponse(response){
        setForecastData(response.data.daily);
        setLoaded(true);
    }

    if (loaded){

    return(
        <div className="Forecast">
        <div className="row">
              {forecastData.map(function(dailyForecast, index){
                  if (index<5){
                  return(
                    <div className="col" key={index}>
                    <ForecastDay data={dailyForecast}/>
                    </div>
                  );
                } else{return("")}
              })}
          
        </div>
        </div>
    );

    }
    else {
        let unit = props.unit.system;
        let lat = props.coord.lat;
        let lon = props.coord.lon;

        if (unit==="metric"){
            let apiURL=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=d35f82d5a9018cc282cfa53744dd6b26`;
            axios.get(apiURL).then(handleResponse);
            return(null);
        } else if (unit!=="metric"){
                let apiURL=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=d35f82d5a9018cc282cfa53744dd6b26`;
                axios.get(apiURL).then(handleResponse);
                return(null);}
        }
    
}