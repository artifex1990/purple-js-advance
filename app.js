'use strict';

let wetherMap = new Map([
    ['Moscow', 10], 
    ['London', 8],
    ['Paris', 14]
]);

wetherMap = new Map([...wetherMap].map(arr => arr.reverse()));
console.log(wetherMap);
