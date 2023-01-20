let myLibrary = [];

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
