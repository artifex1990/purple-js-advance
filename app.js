'use strict';

console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve(3).then((n) => {
    console.log(n);
    for (let i = 0; i < 5000000000; i++) {

    }
});

console.log(4);

for (let i = 0; i < 5000000000; i++) {

}