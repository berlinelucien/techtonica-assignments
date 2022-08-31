import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import books from "./books.js";
import path from 'path';
import BOOKS from "./books.js";

const app = express();
const port = 3000;



app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// listening to server to terminal
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

const __dirname = path.resolve();
app.use(express.static('client'));

//this is route
app.get('/', (req, resp) =>{
    // resp.send("Hello Techtonica this will be my first REST API");
    // open the index.html file that is in the client folder in your path
    resp.sendFile(path.join(__dirname, 'client', 'index.html','new-book.html'));
})

// /api/books
//creates an endpoint for the route `/api/books` that prints all the books 
app.get('/books', (req, resp) =>{
    resp.json(books);

})

// create a new book into database
app.post('/book', (req, res) => {
    let newBook = req.body;
    // Output the book to the console for debugging
    console.log(book);
    books.push(newBook);

  
    res.status(200).send(newBook);
    res.send('Book is added to the database');
});

// GET method - retrieve by book ISBN
// THIS WORKS!!!
app.route('/books/:isbn').get((req, res) => {
    let books_isbn = req.params.id;
    let status = 400;
    let response = 'Unable to fetch data!';
    BOOKS.forEach((book) => {
        if (books['isbn'] == books_isbn) {
            res.status(200).send(book);
        }
    });
    res.status(status).send(response)
})