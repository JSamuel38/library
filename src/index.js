let myLibrary = [];

const bookContainer = document.querySelector('.books-container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  (this.read) ? this.read = 'has been read' : this.read = 'not read yet';
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(library) {
  library.forEach((book) => {
    const card = document.createElement('div');
    card.innerText = book.info();
    bookContainer.appendChild(card);
  });
}
