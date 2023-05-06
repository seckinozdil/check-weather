import axios from "axios";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import City from "./components/City";

function App() {
  const key = process.env.REACT_APP_API_KEY;
  const [city, setCity] = useState();
  const [search, setSearch] = useState();

  async function getRequest() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
      );
      setCity(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="App">
        <div>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="placeholder:italic border-8 bg-slate-100;"
            placeholder="Type your city"
            type="text"
          ></input>
        </div>
        <div>
          <button className="input-search" onClick={getRequest}>
            Search
          </button>
        </div>
        {city && <City city={city}/>}    
      </div>
    </>
  );
}

export default App;
