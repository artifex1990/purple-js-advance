'use strict';

class User {
    #login;
    #password;
    
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }

    set login(login) {
        this.#login = login;
    }

    get login() {
        return this.#login;
    }

    set password(password) {
        this.#password = password.split('').reverse().join('');
    }

    #checkPassword(password) {
        return this.#password.split('').reverse().join('') === password;
    }

    changePassword(oldPassword, newPassword) {
        if (this.#checkPassword(oldPassword)) {
            this.password = newPassword;
        }
    }
}

const user = new User('John', '12345');
console.log(user.login);