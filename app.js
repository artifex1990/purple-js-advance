'use strict';

console.log(10 === 10.0);

console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);

console.log(Number('100'));
console.log(+'100');

console.log(Number.parseInt('101 sec', 2));
console.log(Number.parseInt('fds 101 sec', 2));

console.log(Number.parseFloat('101.23 sec', 2));
console.log(Number.parseFloat('fds 101.23 sec', 2));


console.log(Number.isNaN(Number('324gdfgfdg')));
console.log(Number.isNaN(10 / 0));
console.log(Number.isFinite(10 / 0));
console.log(Number.isFinite(10));
console.log(Number.isFinite(Number('324gdfgfdg')));

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.23));