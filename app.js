'use strict';

const date = new Date();

console.log(date);
console.log(new Intl.DateTimeFormat(navigator.language).format(date));
console.log(new Intl.DateTimeFormat('ru-RU', {hour: 'numeric', minute: 'numeric'}).format(date));
console.log(new Intl.DateTimeFormat('en-US', {hour: 'numeric', minute: 'numeric', month: 'long'}).format(date));
console.log(new Intl.DateTimeFormat('ru-RU', {hour: 'numeric', minute: 'numeric', month: 'long', weekday: 'short', year: '2-digit'}).format(date));

console.log(navigator.language);
