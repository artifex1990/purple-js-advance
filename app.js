'use strict';


function req(id) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products/'+id);
    request.send();

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        console.log(data);
        console.log(productsAvgPrice(data.products).toFixed(2))
    });
}

function productsAvgPrice(products) {
    return products.reduce((sum, product) => sum + product.price, 0) / products.length;
}

req('');

console.log('end');