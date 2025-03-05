'use strict';

const wetherMap = new Map([
    ['Moscow', 10], 
    ['London', 8]
]);


console.log(wetherMap);

const wetherObject = {
    london: 10,
    moscow: 7,
    paris: 14
};

console.log(Object.entries(wetherObject));
const wetherMap2 = new Map(Object.entries(wetherObject));
console.log(wetherMap2);