import React, {useState} from "react";
import axios from "axios";

 function Search(){
    const [city, setCity] = useState(null);
    const [forecast, setForecast] = useState(null);
  
    function updateCity (event){
      event.preventDefault();
      setCity(event.target.value);
    };

    function updateForecast (response){
      setForecast(
        <div className="Forecast">
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
      axios.get(url).then(updateForecast);
    };
  
    return (
      <div className="Search" onSubmit={handleSubmit}>
        <form>
          <input type="text" placeholder="Type a city" onChange={updateCity} />
          <input type="submit" value="Search" />
        </form>
        {forecast}
      </div>
    );
}

export default Search;