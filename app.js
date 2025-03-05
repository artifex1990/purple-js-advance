'use strict';

const wetherMap = new Map();
wetherMap
    .set('London', '10')
    .set('Moscow', '7');

console.log(wetherMap.get('London')); //10
console.log(wetherMap.get('not found')); //undefined

console.log(wetherMap.has('Moscow')); //true
console.log(wetherMap.has('not found')); //false

console.log(wetherMap.delete('London')); //true

const arr = [1, 2, 3];
const obj = {a:1};
wetherMap
    .set(1, 5)
    .set(1, 6)
    .set(true, 'yes')
    .set(false, 'no')
    .set(arr, 'array')
    .set(obj, {b:2});

console.log(wetherMap);
console.log(wetherMap.size);

console.log(wetherMap.get(arr));
console.log(wetherMap.get(obj));