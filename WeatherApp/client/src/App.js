import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/Weather.js";
import vecteezy from "./videos/vecteezy.mp4";
//import Welcome from "./components/Welcome";

export default function App() {
  //We get our latitude and longitude using navigator.geolocation and we use setLong and setLat to set our longitude and latitude states.
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState(null);

  // create the useEffect function. Its goal is to load the functions when the application is loaded and reloaded.
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      // fetch the data from the weather
      // use setData to store our result into the data object.
      //  await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99=${process.env.API_KEY}`)
      await fetch("http://localhost:8080/weather")
        .then((res) => res.json())
        .then((results) => {
          setData(results);
          console.log(results);
        });
    };
    fetchData();
  }, [lat, long]);



  return (
    <div className="App">
      {/* call weather app component */}
      <video
        autoPlay
        loop
        muted
        controls
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={vecteezy} type="video/mp4" />
      </video>
      {data != null ? <Weather weatherData={data} /> : <div></div>}
      <div></div>
    </div>
  );
}
