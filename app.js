'use strict';

function setSelect(arr) {
    const filters = document.querySelector('.filter');
    filters.innerHTML = `<select>
        ${arr.map(el => `<option value="${el.name}">${el.name}</option>`)}
    </select>`;
}

function getData(URL, errorMessage) {
    return fetch(URL)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(errorMessage);
            }
            return resp.json();
        })
        .then(data => setSelect(data))
        .catch(error => {
            const el = document.querySelector('.filter');
            el.innerHTML = error.message;
        });
}

getData('https://dummyjson.com/products/categordies', 'Ошибка при загрузке данных');

/* fetch('https://dummyjson.com/products/')
    .then(
        response => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            return response.json();
        }
    )
    .then(({ products }) => {
        console.log(products);
        return fetch('https://dummyjson.com/products/'+products[5].id);
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }
        response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        const el = document.querySelector('.filter');
        el.innerHTML = error.message;
    }); */