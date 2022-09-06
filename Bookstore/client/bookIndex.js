


async function showBooks() {

    const URL = 'http://localhost:8080/api/books';
    const response = await fetch(URL);
    const responseBooks = await response.json();
    console.log(responseBooks); 
    for (let book of responseBooks){
        const card = `
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>

                    <div>Author: ${book.author}</div>
                    <div>Format: ${book.format}</div>

                    <hr>
                    <button type="button" class="btn btn-danger" onClick="deleteBook(${book.isbn})">Delete</button>
                    <button types="button" class="btn btn-primary" data-toggle="modal"
                        data-target="#editBookModal" onClick="setEditModal(${book.isbn})">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    `
        document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card;
    }
    
}

showBooks();


async function deleteBook(isbn){
    // console.log(isbn)
    const URL = "http://localhost:8080/api/books/"
    const response = await fetch(URL + "/" + isbn, {method: 'DELETE'});
    // console.log(response)
    location.reload()
    alert("book deleted")
}


async function editBook(isbn){
    const URL = "http://localhost:8080/api/books/"
    const response = await fetch(URL + "/" + isbn, {method: 'GET'});
    const book = await response.json();
    console.log(book)
    const {
        author,
        format,
        title
    } = book;

    // Filling information about the book in the form inside the modal
    document.getElementById('isbn').value = isbn;
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    document.getElementById('format').value = format;

    // Setting up the action url for the book
    document.getElementById('editForm').action = `http://localhost:8080/api/books/${isbn}`;

}


// async function addBook(){
//     const URL = "http://localhost:8080/api/books/"
//     const response = await fetch(URL + "/" + isbn, {method: 'GET'});
//     const book = await response.json();
//     console.log(book)
//     const {
//         author,
//         format,
//         title
//     } = book;

//     // Filling information about the book in the form inside the modal
//     document.getElementById('isbn').value = isbn;
//     document.getElementById('title').value = title;
//     document.getElementById('author').value = author;
//     document.getElementById('format').value = format;

//     // Setting up the action url for the book
//     document.getElementById('addForm').action = `http://localhost:8080/api/books/${isbn}`;

// }