'use strict';

function createSelect(array) {
    const el = document.querySelector('.filter');
    el.innerHTML = `<select>
        ${array.map(arrEl => `<option value=${arrEl.name}>${arrEl.name}</option>`)}
    </select>`;
}

function getCategories() {
    fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(data => createSelect(data))
    .catch(error => console.log(error));
}

getCategories();



