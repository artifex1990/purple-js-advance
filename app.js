'use strict';

const Book = function (title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.isRead = false;

const lordsOfTheRings = new Book('The Lord of the Rings', 'J. R. R. Tolkien');
console.log(lordsOfTheRings);
console.log(lordsOfTheRings.hasOwnProperty('author'));
console.log(Book.prototype.__proto__);