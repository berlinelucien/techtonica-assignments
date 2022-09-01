import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import books from "./books.js";
import path from 'path';


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
    resp.sendFile(path.join(__dirname, 'client', 'index.html'));
})

// /api/books
//creates an endpoint for the route `/api/books` that prints all the books 
app.get('/books', (req, resp) =>{
    resp.json(books);

})

// GET method - retrieve by book ISBN
// do not change params.id to isbn it will not work
// THIS WORKS!!!
app.get('/books/:isbn',(req, res) => {
    let books_isbn = req.params.id;
    let status = 400;
    let response = 'Unable to fetch data!';
    books.forEach((book) => {
        console.log(books_isbn);
        if (books['isbn'] == books_isbn) {
            res.status(200).send(book);
        }
    });
    res.status(status).send(response)
}); 

// retrieve by book author name
app.get('/books/:author',(req, res) => {
    let books_author = req.params['author'];
    //console.log(req.params['author']);
    let status = 400;
    let response = 'Unable to fetch data!';
    let booklist = [];
    books.forEach((book) => {
        if (book['author'] == books_author) {
            console.log("‘************************’");
            res.send(books['author']);
            console.log("‘************************’");
            booklist.push(book);  
        }   
    });
    
    res.status(200).send(booklist);
    //res.status(status).send(response)
}); 

// create a new book into database
// needs work
app.post('/books', (req, res) => {
    let newBook = req.body;
    // Output the book to the console for debugging
    console.log(books);
    books.push(newBook);

  
    res.status(200).send(books);
    res.send('Book is added to the database');
});

app.delete('/books/:isbn', (req, res) => {
    // reading the isbn from the URL
    let books_isbn = req.params.id;
    let status = 400;
    let response = 'Unable to fetch data!';
    let newBooks = books.filter((book) => {
        if (books['isbn'] == books_isbn) {
            return books
            //res.status(200).send(book);
        }
    })
    status = 200;
    response = newBooks;
    res.status(status).send('book is deleted');
});
