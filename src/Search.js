import React, {useState, useEffect} from "react";
import "./Search.css";
import axios from "axios";
import Current from "./Current";


 function Search(props){
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    const [unit, setUnit] = useState({
      system:"metric",
      format:"°C",
      speed:"km/h",
      fahrenheit:false,
      celcius:true});
      //let now = new Date();
      //let time = now.getTime();
      //let timeOffset = now.getTimezoneOffset()*60000;
      //let currentTime = Date(time + timeOffset);

   
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
        timezone: response.data.timezone,
      });
    }
    //sunrise: response.data.sys.sunrise,
        //sunset: response.data.sys.sunset,
        //sunriseTime: (response.data.sys.sunrise*1000+(timeOffset))+(response.data.timezone*1000),
        //sunsetTime: (response.data.sys.sunset*1000+(timeOffset))+(response.data.timezone*1000),
  
    function searchCity(){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit.system}&appid=7f10d25441a1a7ff7317938abc53019d`;
      axios.get(url).then(updateWeatherInfo);
    }

    function handleSubmit(event){
      event.preventDefault();
      searchCity(); 
    }
    function handleCity(event){
    setCity(event.target.value);
    }

    function showCelcius(event){
      event.preventDefault();
      setUnit({
        system:"metric",
        format:"°C",
        speed:"km/h",
        fahrenheit:false,
        celcius:true});
    }

    function showFahrenheit(event){
      event.preventDefault();
      setUnit({
        system:"imperial",
        format:"°F",
        speed:"mph",
        fahrenheit:true,
        celcius:false})
    }

    useEffect(() => {
      searchCity();
    }, [unit]);
  
    if (weatherData.ready) {return (
      <div className="Search">
        <div className="d-flex justify-content-end me-3">
        <button 
            type="checkbox"
            className={`btn btn-outline-secondary mt-3 me-2 shadow-sm celciusBtn ${unit.celcius ? "active":""}`}
            onClick={showCelcius}> °C </button>
        <button 
            type="checkbox"
            className={`btn btn-outline-secondary mt-3 ms-2 shadow-sm fahrenheitBtn ${unit.fahrenheit ? "active":""}`}
            onClick={showFahrenheit}> °F </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="input-form mb-3 shadow-sm search-bar"
              placeholder="Type a city"
              id="city-text-input"
              aria-label="Type a city"
              autoComplete="off"
              autoFocus="off"
              onChange={handleCity}
            />
            <button
              type="submit"
              className="btn btn-outline-secondary mb-3 shadow-sm search-bar "
              id="button-search-submit"
            >
              Search
            </button>
  
            <button
              type="submit"
              className="btn btn-outline-secondary mb-3 shadow-sm search-bar right "
              id="button-current-location-submit"
            >
              Current Location
            </button>
          </div>
        </form>
        <Current data = {weatherData} unit={unit}/>
      </div>
    );} else {
      searchCity();
      return ("Loading...");
    }
}

export default Search;