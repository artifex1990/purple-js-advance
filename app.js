'use strict';

function cubeRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const set = new Set();
for (let i = 0; i < 1000; i++) {
    set.add(cubeRandom(1, 20));
    if (set.size === 20) {
        console.log(i);
        break;
    }
}
console.log(set);
