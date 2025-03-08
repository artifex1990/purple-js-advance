'use strict';

function setSelect(arr) {
    const filters = document.querySelector('.filter');
    filters.innerHTML = `<select>
        ${arr.map(el => `<option value="${el.name}">${el.name}</option>`)}
    </select>`;
}

function getCategories() {
    fetch('https://dummyjson.com/products/categories')
        .then(resp => resp.json())
        .then(data => setSelect(data));  
}

getCategories();



