// server/index.js
import express from "express";
import fetch from "node-fetch";
import * as dotenv from 'dotenv' 
dotenv.config()


console.log(`Your api key is ${process.env.API_KEY}`);

const app = express();

//Set the port that you want the server to run on
const PORT = process.env.PORT || 8080;

app.get('/weather', (req, res) => {
	//build api URL with lat / long
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.API_KEY}`

	fetch(apiUrl)
	.then(res => res.json())
	.then(data => {
		res.send({ data });
	})
	.catch(err => {
		res.redirect('/error');
	});
})

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});