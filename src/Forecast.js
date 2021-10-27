import React from "react";
import "./Forecast.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import WeatherIcon from "./WeatherIcon";
import { Axios } from "axios";

export default function Forecast(props){
    function handleResponse(response){
        console.log(response);
    }

    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiURL=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&unit=metric&appid=d35f82d5a9018cc282cfa53744dd6b26`;
    
    Axios.get(apiURL).then(handleResponse);

    return(
        <div className="Forecast">
            Forecast under construction
            <Loader
        type="ThreeDots"
        color= "thistle"
        height={100}
        width={100}
      />
      <div className="row">
          <div className="col">
              <div className="Forecast-day">Thu</div>
              <div className="Forecast-icon"><WeatherIcon data="01d"/></div>

              <div className="Forecast-temperature">
                  <span className="forecast-minTemp">9</span> | <span className="forecast-maxTemp">14</span>
              </div>
          </div>
      </div>
        </div>
    )
}