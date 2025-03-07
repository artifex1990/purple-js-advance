'use strict';

class Car {
    #vin = 6;
    speed;

    constructor() {
        // delete this.#vin;
        // this.#test2 - 4;
        this.test3 = 4;
    }

    #changeVin() {
        console.log('Вин изменен!');
    }

    test() {
        this.#changeVin();
    }

    static #field = 3;
}

const car = new Car();
car.test();