'use strict';

function getData(URL, errorMessage, method = 'GET') {
    return fetch(URL, {
        method
    })
    .then(resp => {
        if (!resp.ok) {
            throw new Error(`${errorMessage}: ${resp.status}`);
        }
        return resp.json();
    });
}

getData('https://dummyjson.com/products', 'Ошибка при загрузке данных продуктов')
    .then(({ products }) => {
        console.log(products)
        return getData('https://dummyjson.com/products/' + products[0].id, 'Ошибка при получении данных о продукте');
    })
    .then(product => console.log(product))
    .catch(errorMessage => {
        const el = document.querySelector('.filter');
        el.innerHTML = errorMessage.message;
    });