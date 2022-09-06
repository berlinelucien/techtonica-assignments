import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./bookRoute.js";
import path from "path";

const app = express();
const port = 8080;

app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/books', router);

const __dirname = path.resolve();
app.use(express.static('client'));

//this is route
app.get("/", (req, res) => {
  // resp.send("Hello Techtonica this will be my first REST API");
  // open the index.html file that is in the client folder in your path
  res.send('Hello World, from express');
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
})
// path to create new book 
app.get('/newBook', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'newBook.html'))
})

// listening to server to terminal
app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
// // /api/books
// //creates an endpoint for the route `/api/books` that prints all the books
// app.get("/books", (req, resp) => {
//   resp.json(books);
// });

// // GET method - retrieve by book ISBN
// // retrieve by book author name
// app.get("/books/search", (req, res) => {
//     let books_isbn = req.query.isbn;
//     let books_author = req.query.author;

//     let status = 400;
//     let response = "Unable to fetch data!";
    
//     let booklist = [];
 
//   books.forEach((book) => {
//     if (book["isbn"] == books_isbn) {
//       booklist.push(book);
//     }
//       if (book['author'] == books_author) {
//           booklist.push(book);
//       }
//   });
//     res.status(status).send(booklist);
    
// });

// // create a new book into database
// // needs work
// app.post("/books", (req, res) => {
//     let newBook = req.body;
//     // Output the book to the console for debugging
//     console.log(books);
//     books.push(newBook);

//     res.status(200).send(newbooks);
//     res.send("Book is added to the database");
// });

// app.delete("/books", (req, res) => {
//   // reading the isbn from the URL
//   let books_isbn = req.params.id;
//   let status = 400;
//   let response = "Unable to fetch data!";
//   let newBooks = books.filter((book) => {
//     if (book["isbn"] == books_isbn) {
//       return books;
//       //res.status(200).send(book);
//     }
//   });
//   status = 200;
//   response = newBooks;
//   res.status(status).send("book is deleted");
// });

