'use strict';

const max = 2 ** 53 - 1;
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(max);
console.log(max + 1);
console.log(max + 2);
console.log(max + 3);


console.log(243242342343243243241421415n);
console.log(BigInt(243242342343243243241421415));
console.log(BigInt('243242342343243243241421415'));

console.log(10n + 10n);
//console.log(10n + 100);
console.log(10n + BigInt(10));
console.log(10n / BigInt(3));
console.log(10n * 10n);

console.log(243242342343243243241421415n * 243242342343243243241421415n);

console.log(10n < 20);
console.log(10n == 10);
console.log(10n === 10);
