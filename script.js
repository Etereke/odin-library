const tBody = document.querySelector('tbody');
const btnNewBook = document.querySelector('#new-btn');
const btnAddBook = document.querySelector('#add-btn');
const btnCancelForm = document.querySelector('#cancel-btn');
const dialog = document.querySelector('dialog');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');

btnNewBook.addEventListener('click', () => {
    dialog.showModal();
});
btnCancelForm.addEventListener('click', () => {
    dialog.close();
});
btnAddBook.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value);
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    dialog.close();
    displayBooks();
});

const myLibrary = [];

addBookToLibrary('The Hobbit', 'J. R. R. Tolkien', 432);
addBookToLibrary('Harry Potter and the Deathly Hallows', 'J. K. Rowling', 675);
addBookToLibrary('Animal Farm', 'George Orwell', 121);
addBookToLibrary('Brave New World', 'Aldous Huxley', 302);
addBookToLibrary('Overlord 1 - The Undead King', 'Kugane Maruyama', 237);

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
    tBody.replaceChildren();
    for (let i = 0; i < myLibrary.length; i++) {
        const tr = document.createElement('tr');
        tr.classList.add(myLibrary[i].read ? 'read' : 'not-read');
        for (key in myLibrary[i]) {
            const td = document.createElement('td');
            if (key === 'read') {
                const deleteBtn = document.createElement('button');
                const readBtn = document.createElement('button');
                deleteBtn.textContent = "Delete";
                readBtn.textContent = "Toggle read";
                deleteBtn.addEventListener('click', () => {
                    myLibrary.splice(i, 1);
                    displayBooks();
                });
                readBtn.addEventListener('click', () => {
                    myLibrary[i].read = !myLibrary[i].read;
                    displayBooks();
                });
                td.appendChild(readBtn);
                td.appendChild(deleteBtn);
                tr.appendChild(td);
            } else if (myLibrary[i].hasOwnProperty(key)){
                td.textContent = myLibrary[i][key];
                tr.appendChild(td);
            }
            
        }
        tBody.appendChild(tr);
    }
}