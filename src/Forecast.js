import React from "react";
import "./Forecast.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(){
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