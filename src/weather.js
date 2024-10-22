import React, { useState } from "react";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const api = {
    key: "6b152890fa3f30bbe1b5c69c28b60d26",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const searchPressed = () => {
    if (search) {
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
            setWeather(result)
        })
  };
}

  return (
    <>
      <div className="weather-app">
        <h1>Weather App</h1>
        {/* Search Box */}
        <div className="input-group w-50 m-auto">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Enter Your City Name"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            style={{ backgroundColor: "#fff" }}
            type="button"
            className="btn btn-outline-primary ms-2"
            onClick={searchPressed}
            data-mdb-ripple-init
          >
            Search
          </button>
        </div>
        
        {/* Error Message */}
       <p style={{ color: "red" }}>{error}</p>
        
        {/* Location */}
        {weather.name && <p className="location">{weather.name}</p>}
        
        {/* Temperature */}
        {weather.main && <p className="temp">Temperature: {weather.main.temp}°C</p>}
        
        {/* Condition */}
        {weather.weather && (
          <>
            <p className="condition">Condition: {weather.weather[0].main}</p>
            <p className="condition">Description: {weather.weather[0].description}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Weather;
