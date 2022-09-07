import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(cors());
// main index
app.get("/", (req, res) => {
  res.json({ message: "Hello from ExpressJs" });
});
// path api
// app.get('/api', (req, res) => {
//     res.json({ message: 'Hello from ExpressJs' });
// });

/// weather api
app.get("/weather", (req, res) => {
  const city = req.query.cityName;
  const apiKey = process.env.API_KEY;
  const params = new URLSearchParams({
    q: req.query.cityName,
    appid: process.env.API_KEY,
    units: "imperial",
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
