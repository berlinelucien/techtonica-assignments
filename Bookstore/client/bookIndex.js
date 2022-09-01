

async function showBooks(){
    const URL = 'http://localhost:3000/books/';
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

function deleteBook (){
    alert("delete")
}