import React, {useState} from "react";
import "./Search.css";
import axios from "axios";
import Current from "./Current";


 function Search(){
    const [city, setCity] = useState("Brussels");
  
    function updateCity (event){
      event.preventDefault();
      setCity(event.target.value);
    };

    function updateWeatherInfo (response){
      <Current response="response"/>

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
              className="input-form mt-20 mb-3 shadow-sm search-bar w-100"
              placeholder="Type a city"
              id="city-text-input"
              aria-label="Type a city"
              autocomplete="off"
              autofocus="off"
              onChange={updateCity}
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
      </div>
    );
}

export default Search;