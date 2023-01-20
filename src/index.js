let myLibrary = [];

const bookContainer = document.querySelector('.books-container');
const bookCard = bookContainer.querySelector('div');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(library) {
  bookContainer.replaceChildren();
  library.forEach((book) => {
    const card = document.createElement('div');
    bookContainer.appendChild(card);
    displayInfo(card, book);
  });
}

function displayInfo(card, book) {
  const cardHeading = document.createElement('h1');
  const cardAuthor = document.createElement('h2');
  const cardPages = document.createElement('h3');
  const cardRead = document.createElement('h4');

  cardHeading.textContent = `Title: ${book.title}`;
  cardAuthor.textContent = `Author: ${book.author}`;
  cardPages.textContent = `Pages: ${book.pages}`;
  (book.read) ? cardRead.textContent = 'Read' : cardRead.textContent = 'Not Read';
  
  card.appendChild(cardHeading);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardRead);
}
