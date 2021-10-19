import React, {useState} from "react";
import "./Search.css";
import axios from "axios";
import Current from "./Current";


 function Search(props){
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function updateWeatherInfo (response){
      console.log(response.data);  
       setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: Math.round(response.data.main.temp),
        feels: Math.round(response.data.main.feels_like),
        minTemp: Math.round(response.data.main.temp_min),
        maxTemp: Math.round(response.data.main.temp_max),
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
        country: response.data.sys.country,
      });
    }
  
    function searchCity(){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7f10d25441a1a7ff7317938abc53019d`;
      axios.get(url).then(updateWeatherInfo);
    }

    function handleSubmit(event){
      event.preventDefault();
      searchCity(); 
    }
    function handleCity(event){
    setCity(event.target.value);

    }

  
    if (weatherData.ready) {return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="input-form mt-20 mb-3 shadow-sm search-bar"
              placeholder="Type a city"
              id="city-text-input"
              aria-label="Type a city"
              autoComplete="off"
              autoFocus="off"
              onChange={handleCity}
            />
            <button
              type="submit"
              className="btn btn-outline-secondary mt-20 mb-3 shadow-sm search-bar "
              id="button-search-submit"
            >
              Search
            </button>
  
            <button
              type="submit"
              className="btn btn-outline-secondary mt-20 mb-3 shadow-sm search-bar right "
              id="button-current-location-submit"
            >
              Current Location
            </button>
          </div>
        </form>
        <Current data = {weatherData}/>
      </div>
    );} else {
      searchCity();
      return ("Loading...");
    }
}

export default Search;