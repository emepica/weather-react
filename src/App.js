import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Search from './Search';


function App() {
  return (
    <div className="App">
     <div className="container">
        <div className="card shadow mx-auto d-flex">
          <Search defaultCity = "Brussels"/>
          
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
