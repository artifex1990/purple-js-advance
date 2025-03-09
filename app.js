'use strict';

async function getProducts(){
    try {
        const productsResponse = await fetch('https://dummyjson.com/products');
        if (!productsResponse.ok) {
            throw new Error(productsResponse.status);
        }
        const { products } = await productsResponse.json();
        console.log(products);

        const productResponse = await fetch('https://dummyjson.com/products/' + products[0].id);
        const product = await productResponse.json();
        console.log(product);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('finally');
    }
}
try {
    const a = 5;
    a = 10;
} catch (error) {
    console.log(error);
}
getProducts();
console.log('end');
