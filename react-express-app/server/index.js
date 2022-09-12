// server / index.js
import express from "express";
import cors from "cors";

const app = express()
// set the port that you want the server to run on
const PORT = process.env.PORT || 8080;
app.use(cors());

// creates an endpoint for the route/api
app.get('/api', (req, res) => {
    res.json({ message: "Bonjour from Techtonica" });
});
//hardcode the user response
//Create an endpoint /api/users' with some JSON data to get all users from the API.
app.get('/api/users', (req, res) => {
    console.log('api/users called!');
    const users = [
        { name: 'Ram', email: 'Ram@gmail.com' },
        { name: 'Bob', email: 'bob@gmail.com' },
        { name: 'Lauren', email: 'techtonica89@gmail.com' }
    ]
    res.json(users);
});






// console.log that your server is up and running 
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});