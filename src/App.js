import './App.css';

import "bootstrap/dist/css/bootstrap.css";
import Search from './Search';
import UpdateInfo from './UpdateInfo';
import Current from './Current';


function App() {
  return (
    <div className="App">
     <div className="container">
        <div className="card shadow">
          <Search />
          <UpdateInfo/>
          <Current/>
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
