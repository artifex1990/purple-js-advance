'use strict';

const CartProducts = function() {
}

CartProducts.prototype.products = [];

CartProducts.prototype.addProduct = function (product) {
    if (this.products.some(p => p.id === product.id)) {
        return;
    }
    this.products.push(product);
}

CartProducts.prototype.increaseAmount = function (id) {
    this.products = this.products.map(product => {
        if (product.id === id) {
            product.count++;
            return product;
        }
        return product
    });
}

CartProducts.prototype.decreaseAmount = function (id) {
    this.products = this.products.map(product => {
        if (product.id === id) {
            product.count--;
            return product;
        }
        return product
    }).filter(product => product.count > 0);
}


const product = {id: 1, name: 'Молоко', count: 1};

console.log(CartProducts);
debugger;
const cartProducts = new CartProducts();
cartProducts.addProduct(product);
cartProducts.increaseAmount(1);
cartProducts.increaseAmount(1);
cartProducts.decreaseAmount(1);
cartProducts.decreaseAmount(1);
cartProducts.decreaseAmount(1);

console.log(cartProducts);