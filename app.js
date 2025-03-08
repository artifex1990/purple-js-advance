'use strict';

function myFetch(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();

        request.addEventListener('load', function() {
            try {
                resolve(this.response);
            } catch (e) {
                reject(new Error(e.message));
            }
        });
    });
}


myFetch('https://dummyjson.com/products/categories')
    .then(resp => JSON.parse(resp))
    .then(data => console.log(data))
    .catch(err => console.log(err.message));