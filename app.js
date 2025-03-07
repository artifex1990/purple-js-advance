'use strict';

class User {
    #login;
    #_password;
    
    constructor(login, password) {
        this.#login = login;
        this.#password = password;
    }

    get login() {
        return this.#login;
    }

    set #password(password) {
        this.#_password = password.split('').reverse().join('');
    }

    get #password() {
        return this.#_password.split('').reverse().join('');
    }

    checkPassword(password) {
        return this.#password === password;
    }

    changePassword(oldPassword, newPassword) {
        if (!this.checkPassword(oldPassword)) {
            return false;
        }

        this.#password = newPassword;
        return true;
    }
}

const user = new User('John', '12345');
user.changePassword('12345', '54321');
console.log(user);