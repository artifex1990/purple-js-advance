'use strict';


function req(id) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products/'+id);
    request.send();

    request.addEventListener('load', function () {
        const {products} = JSON.parse(this.responseText);
        console.log(products);
        console.log(productsAvgPrice(products).toFixed(2))
    });
}

function productsAvgPrice(products) {
    return products.reduce((sum, product) => sum + product.price, 0) / products.length;
}

req('');

console.log('end');