import React, {useState} from "react";
import "./Search.css";
import axios from "axios";
import Current from "./Current";
import UpdateInfo from "./UpdateInfo";

 function Search(){
    const [city, setCity] = useState(null);
    const [current, setCurrent] = useState(null);
  
    function updateCity (event){
      event.preventDefault();
      setCity(event.target.value);
    };

    function updateWeatherInfo (response){
      setCurrent(
        <div className="Current">
        <ul>
          <li>{response.data.name}</li>
          <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
          <li>Description: {response.data.weather[0].description} </li>
          <li>Humidity: {response.data.main.humidity} %</li>
          <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
          <li>
            <img src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`} alt={response.data.weather[0].description} />{" "}
          </li>
        </ul>
      </div>
      );

    }
  
    function handleSubmit (event) {
      event.preventDefault();
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7f10d25441a1a7ff7317938abc53019d`;
      axios.get(url).then(updateWeatherInfo);
    };
  
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="input-form mt-20 mb-3 shadow-sm search-bar"
              placeholder="Type a city"
              id="city-text-input"
              aria-label="Type a city"
              autocomplete="off"
              autofocus="off"
              onChange={updateCity}
            />
            <button
              type="submit"
              className="btn btn-outline-secondary mt-20 mb-3 shadow-sm search-bar"
              type="button"
              id="button-search-submit"
            >
              Search
            </button>
  
            <button
              type="submit"
              className="btn btn-outline-secondary mt-20 mb-3 shadow-sm search-bar right"
              type="button"
              id="button-current-location-submit"
            >
              Current Location
            </button>
          </div>
        </form>
      </div>
    );
}

export default Search;