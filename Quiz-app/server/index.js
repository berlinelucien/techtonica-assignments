import express from "express";
import cors from "cors";
//import axios from "axios"
import bodyParser from "body-parser";
import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Bonjour " });
});
// `https://opentdb.com/api.php?amount=10&category=31&type=boolean`
// GET request for the GAME api
app.get("/quiz", cors(), async (req, res) => {
  const url = `https://opentdb.com/api.php?amount=10&category=26&type=multiple`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log("Line 27 server.js", data);
    res.send(data);
  } catch (err) {
    console.error("Fetch error: ", err);
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
