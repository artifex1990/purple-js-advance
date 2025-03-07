'use strict';

const User = {
    init(email, password) {
        this.email = email;
        this.password = password;
    },

    log() {
        console.log('Hello world!');
    }
};

const user = Object.create(User);

user.log();
user.init('test@test.com', '123');
console.log(user.__proto__ === User);
console.log(user);

const admin = Object.create(user);
console.log(admin);