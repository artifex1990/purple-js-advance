'use strict'

document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOMContentLoaded');
    console.log(e);
});
window.addEventListener('load', (e) => {
    console.log('load');
    console.log(e);
});

// window.addEventListener('beforeunload', (e) => {
//     e.preventDefault();
//     e.returnValue = '';
// });