const express = require("express");

//determine your port
const PORT = process.env.PORT || 4000;

//create an express app for you
const app = express();

//create a get request router this prints something to the website
app.get("/", (req, res) => {
    res.json("Hello from Techtonica");
});

// this prints into the console
app.listen(PORT, () => {
    console.log(`Hola server is listening on ${PORT}`);
});