import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/Weather.js";

export default function App() {
  //We get our latitude and longitude using navigator.geolocation and we use setLong and setLat to set our longitude and latitude states.
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  // create the useEffect function. Its goal is to load the functions when the application is loaded and reloaded.
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      // fetch the data from the weather
      // use setData to store our result into the data object.
      // await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}`)
      await fetch("/weather")
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {/* call weather app component */}
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
