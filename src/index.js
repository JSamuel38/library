let myLibrary = [];

const bookContainer = document.querySelector('.books-container');

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

  card.appendChild(cardHeading);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardRead);
  card.appendChild(cardRemove);
}


