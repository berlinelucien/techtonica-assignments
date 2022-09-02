import express from 'express';
import books from './books.js';

const router = express.Router();

// /api/books
//creates an endpoint for the route `/api/books` that prints all the books
router.get("/", (req, res) => {
    res.json(books);
  })
  
  // GET method - retrieve by book ISBN
  // retrieve by book author name
 router.get("/search", (req, res) => {
      let books_isbn = req.query.isbn;
      let books_author = req.query.author;
  
      let status = 400;
      let response = "Unable to fetch data!";
      
      let booklist = [];
   
    books.forEach((book) => {
      if (book["isbn"] == books_isbn) {
        booklist.push(book);
      }
        if (book['author'] == books_author) {
            booklist.push(book);
        }
    });
      res.status(status).send(booklist);
      
  })
  
  // create a new book into database
  // works
  router.post("/", (req, res) => {
      let book = req.body;
      // Output the book to the console for debugging
      console.log(books);
      books.push(book);
  console.log(books)
      res.status(200).send(books);
      res.send("Book is added to the database");
  })
  
router.delete("/", (req, res) => {
    // reading the isbn from the URL
    let books_isbn = req.params.id;
    let status = 400;
    let response = "Unable to fetch data!";
    let newBooks = books.filter((book) => {
      if (book["isbn"] == books_isbn) {
        return books;
        //res.status(200).send(book);
      }
    });
    status = 200;
    response = newBooks;
    res.status(status).send("book is deleted");
  });
  


export default router;