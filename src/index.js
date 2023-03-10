let myLibrary = [];

const bookContainer = document.querySelector('.books-container');
const header = document.querySelector('header');
const addBook = document.querySelector('.add-button');
const bookForm = document.createElement('form');
const formTitle = document.createElement('input');
const formAuthor = document.createElement('input');
const formPages = document.createElement('input'); 
const formReadLabel = document.createElement('label');
const formRead = document.createElement('input');
const formSubmit = document.createElement('button');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  if (myLibrary.filter(e => e.title === book.title && e.author === book.author).length > 0) {
    alert('This book is already in the library.');
    return;
  }
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
  const cardRead = document.createElement('button');
  const cardRemove = document.createElement('button');

  cardHeading.textContent = `"${book.title}"`;
  cardAuthor.textContent = `by ${book.author}`;
  cardPages.textContent = `Pages: ${book.pages}`;
  cardRemove.textContent = 'Remove';

  if (book.read) {
    cardRead.textContent = 'Read';
    cardRead.style.backgroundColor = 'rgb(119, 255, 119)';
    
  } else {
    cardRead.textContent = 'Not Read';
    cardRead.style.backgroundColor = 'rgb(255, 119, 119)';
  }

  cardRead.setAttribute('class', 'read-button');
  cardRemove.setAttribute('class', 'remove-button');

  cardRead.addEventListener('click', () => {
    if (cardRead.innerText === 'Read') { 
      cardRead.style.backgroundColor = 'rgb(255, 119, 119)';
      cardRead.innerText = 'Not read';
    } else {
      cardRead.style.backgroundColor = 'rgb(119, 255, 119)';
      cardRead.innerText = 'Read';
    }
  });

  cardRemove.addEventListener('click', () => {
    bookContainer.removeChild(card);
    myLibrary.splice(myLibrary.indexOf(book), 1);
  });

  card.appendChild(cardHeading);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardRead);
  card.appendChild(cardRemove);
}

formTitle.setAttribute('type', 'text');
formTitle.placeholder = 'Title';
formTitle.required = true;
formAuthor.setAttribute('type', 'text');
formAuthor.placeholder = 'Author';
formAuthor.required = true;
formPages.setAttribute('type', 'number');
formPages.setAttribute('min', '1');
formPages.placeholder = 'Pages';
formPages.required = true;
formReadLabel.textContent = 'Have you read it?';
formRead.setAttribute('type', 'checkbox');
formSubmit.setAttribute('type', 'submit');
formSubmit.textContent = 'Submit';

bookForm.appendChild(formTitle);
bookForm.appendChild(formAuthor);
bookForm.appendChild(formPages);
bookForm.appendChild(formReadLabel);
bookForm.appendChild(formRead);
bookForm.appendChild(formSubmit);

formSubmit.addEventListener('click', () => {
  if (formTitle.value === '' || formAuthor.value === '' || formPages.value === '') return;
  const addedBook = new Book(formTitle.value, formAuthor.value, formPages.value, formRead.checked);
  addBookToLibrary(addedBook);
  displayBooks(myLibrary);
  document.body.removeChild(bookForm);
  bookContainer.removeAttribute('style', 'filter: brightness(50%)');
  header.removeAttribute('style', 'filter: brightness(50%)');
  addBook.removeAttribute('style', 'filter: brightness(50%)');
  document.body.style.backgroundColor = 'rgb(249,247,247)';
});


addBook.addEventListener('click', () => {
  document.body.appendChild(bookForm);
  bookContainer.setAttribute('style', 'filter: brightness(50%)');
  header.setAttribute('style', 'filter: brightness(50%)');
  addBook.setAttribute('style', 'filter: brightness(50%)');
  document.body.style.backgroundColor = 'rgb(200, 200, 200)';
});
