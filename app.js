'use strict';

const User = function(email, password) {
    this.email = email;
    this.password = password;
}

const user1 = new User('a@a.ru', '123456');
console.log(user1);
const user2 = new User('a2@a.ru', '12345');
console.log(user2);

console.log(user2 instanceof User);