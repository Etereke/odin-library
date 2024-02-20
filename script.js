const tBody = document.querySelector('tbody');

const myLibrary = [];

addBookToLibrary('The Hobbit', 'J. R. R. Tolkien', 432);
addBookToLibrary('The Hobbit', 'J. R. R. Tolkien', 432);
addBookToLibrary('The Hobbit', 'J. R. R. Tolkien', 432);
addBookToLibrary('The Hobbit', 'J. R. R. Tolkien', 432);
addBookToLibrary('The Hobbit', 'J. R. R. Tolkien', 432);

displayBooks();

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}`;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

function displayBooks() {
    for (book of myLibrary) {
        const tr = document.createElement('tr');
        for (key in book) {
            const td = document.createElement('td');
            if (key === 'read') {
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = "Delete";
                const readBtn = document.createElement('button');
                readBtn.textContent = "Toggle read";
                td.appendChild(readBtn);
                td.appendChild(deleteBtn);
            } else {
                td.textContent = book[key];
            }
            tr.appendChild(td);
        }
        tBody.appendChild(tr);
    }
}