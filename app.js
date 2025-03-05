'use strict';

const wetherMap = new Map([
    ['Moscow', 10], 
    ['London', 8],
    ['Paris', 14]
]);


for (const [key, value] of wetherMap) {
    console.log(key);
    console.log(value);
}

console.log([...wetherMap]);
console.log([...wetherMap.keys()]);
console.log([...wetherMap.values()]);