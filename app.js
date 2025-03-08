'use strict';

const prom = new Promise((resolve) => {
    console.log('Constructor');
    // for (let i = 0; i < 10000000000; i++);
    setTimeout(() => resolve('Timer'), 1000);
});


prom.then((res) => console.log(res));
Promise.reject(new Error('Error')).catch((error) => console.log(error));
Promise.resolve('Instant').then((res) => console.log(res));