'use strict';

console.log('1');

const messages = ['2-1', '2-2'];

const timer = setTimeout((a, b) => {
    console.log(a);
    console.log(b);
}, 1000, ...messages);

//clearTimeout(timer);

console.log('3');