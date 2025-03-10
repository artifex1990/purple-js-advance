'use strict'

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);

/* Вниз по дереву */
const inner = wrapper.querySelector('.inner');
const button = inner.querySelector('.button');
console.log(inner);
console.log(inner.childNodes);
console.log(inner.children);

console.log(inner.parentElement);
console.log(inner.parentNode);

/* Наверх по дереву */
console.log(button.closest('.wrapper'));


/* Сбоку */
console.log(button.previousElementSibling);
console.log(button.previousSibling);
console.log(button.nextElementSibling);
console.log(button.nextSibling);

/* Из массива */
console.log(button.parentElement.children[2]);