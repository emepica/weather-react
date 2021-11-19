import React, {useState} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Search from './Search';


function App() {
  const [lat,setLat] = useState(null);
  const [lon, setLon]= useState(null);
  
  function identifyCurrentCity(position){
    console.log(position)
      setLat (position.coords.latitude);
      setLon (position.coords.longitude);
  }
  navigator.geolocation.getCurrentPosition(identifyCurrentCity);
  return (
    <div className="App">
     <div className="container">
        <div className="card shadow mx-auto d-flex">
          <Search defaultCity = "Brussels" lat={lat} lon={lon}/>
          
        </div>
      </div>
      <footer>
        This project was built by Emeline Picard and is {" "}
        <a href="https://github.com/emepica/weather-react" target="_blank" rel="noreferrer">open-sourced</a>
      </footer>
    </div>
  );
}

export default App;
