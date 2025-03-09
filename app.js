'use strict';

function generate(event) {
    console.log(event.target.getBoundingClientRect());

    console.log('Page X offset ' + window.pageXOffset);
    console.log('Page Y offset ' + window.pageYOffset);
    console.log('Client width ' + document.documentElement.clientWidth);
    console.log('Client height ' + document.documentElement.clientHeight);

    const el = document.querySelector('.down');
    const rect = el.getBoundingClientRect();

    window.scrollTo({
        left: pageXOffset + rect.left,
        top: pageYOffset + rect.top,
        behavior: 'smooth'
    });
}