'use strict';

const prom = new Promise((resolve, reject) => {
    if (new Date() > new Date('2019-05-29')) {
        reject(new Error('Way way'));
    }
    resolve('Success');
});

prom
    .then(data => console.log(data))
    .catch(error => console.log(error));

function timeout(sec) {
    sec *= 1000;
    return new Promise((resolve) => setTimeout(resolve, sec));
}

timeout(1)
    .then(() => {
        console.log('Time is over 1');
        return timeout(2);
    })
    .then(() => console.log('Time is over 2'));