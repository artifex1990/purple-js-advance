'use strict';

const CartProducts = function() {
}

CartProducts.prototype.products = [];

CartProducts.prototype.addProduct = function (product) {
    if (this.products.some(p => p.id === product.id)) {
        console.log('Продукт с таким id уже существует!');
        return;
    }

    if (product.name == '' || product.count == '') {
        console.log('Поля не должны быть пустыми!');
        return;
    }

    this.products.push(product);
    console.log(this.cartProducts);
}

CartProducts.prototype.upGoods = function (id) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
        console.log('Продукт с таким id уже существует!');
        return;
    }
    product.count++;
    console.log('Увеличили количество товара!');
    console.log(`Товара: ${product.count} шт.`);
}

CartProducts.prototype.upGoods = function (id) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
        console.log('Продукт с таким id уже существует!');
        return;
    }
    product.count++;
    console.log('Увеличили количество товара!');
    console.log(`Товара: ${product.count} шт.`);
}

CartProducts.prototype.downGoods = function (id) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
        console.log('Продукт с таким id уже существует!');
        return;
    }
    product.count--;

    console.log('Уменьшили количество товара!');
    if (product.count === 0) {
        this.products.splice(this.products.indexOf(product), 1);
        console.log('Товар удален из корзины!');
    } else {
        console.log(`Товара: ${product.count} шт.`);
    }
}




const product = {id: 1, name: 'Молоко', count: 1};

console.log(CartProducts);


const cartProducts = new CartProducts();
cartProducts.addProduct(product);
cartProducts.upGoods(1);
cartProducts.upGoods(1);
cartProducts.downGoods(1);
cartProducts.downGoods(1);
cartProducts.downGoods(1);

console.log(cartProducts);