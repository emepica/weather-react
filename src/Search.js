import React, {useState} from "react";
import "./Search.css";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";


 function Search(props){
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    const [lat,setLat] = useState(props.lat);
    const [lon, setLon]= useState(props.lon);
    const [unit, setUnit] = useState({
      system:"metric",
      format:"°C",
      speed:"km/h",
      fahrenheit:false,
      celcius:true});

   
    function updateWeatherInfo (response){
      console.log(response.data);
       setWeatherData({
        ready: true,
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
        sunrise:response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        coord: response.data.coord,
      });
      setLat(response.data.coord.lat);
      setLon(response.data.coord.lon);
    }
  
    function searchCity(){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit.system}&appid=2156881d774b71e347c0c828ad86a5bf`;
      axios.get(url).then(updateWeatherInfo);
    }

    function searchCurrentCity(position){
      console.log(position)
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit.system}&appid=2156881d774b71e347c0c828ad86a5bf`;
      axios.get(url).then(updateWeatherInfo);
    }

    function handleSubmit(event){
      event.preventDefault();
      searchCity(); 
    }

    function retrieveCurrentLocation(event){
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(searchCurrentCity);
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
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d35f82d5a9018cc282cfa53744dd6b26`;
      axios.get(url).then(updateWeatherInfo);
    }

    function showFahrenheit(event){
      event.preventDefault();
      setUnit({
        system:"imperial",
        format:"°F",
        speed:"mph",
        fahrenheit:true,
        celcius:false})
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=7f10d25441a1a7ff7317938abc53019d`;
    axios.get(url).then(updateWeatherInfo);
    }

   // useEffect(() => {
    //  searchCity();
    //}, [unit]);
  
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
        <form className="search-form" onSubmit={handleSubmit}>
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
        </form>
        <form className="current-location-form" onSubmit={retrieveCurrentLocation}>
        <button
              type="submit"
              className="btn btn-outline-secondary mb-3 shadow-sm search-bar right "
              id="button-current-location-submit"
            >
              Current Location
            </button>
        </form>
        <Current data = {weatherData} unit={unit}/>
        <Forecast coord = {weatherData.coord} unit={unit}/>
      </div>
    );} else {
      searchCity();
      return ("Loading...");
    }
}

export default Search;