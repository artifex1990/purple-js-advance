'use strict'

let v = 123;
let n = 123;

const button = document.querySelector('.button');

const eventHandler = function (event) {
    console.log('event 1');
};
button.addEventListener('mouseover', eventHandler);
button.addEventListener('click', (event) => {
    console.log('event 2');
    button.removeEventListener('click', eventHandler);
});

const ob = {
    name: 'ob',
    a: () => {
        console.log(this);
    },
    b: function () {
        console.log(this);
    },
    m() {
        console.log(this);
    }
}
const a = () => {
    console.log(this);
};

const b = function () {
    console.log(this);
};

a();
b();

ob.a();
ob.b();
ob.m();


/* if (true) {
    function c() {
        console.log(this);
    };
}
console.log(c); */