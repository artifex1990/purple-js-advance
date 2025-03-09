'use strict';

const wrapper = document.querySelector('.wrapper');

async function getActivity() {
    const response = await fetch('https://bored.api.lewagon.com/api/activity');
    return response.json();
}

async function generate() {
    try {
        wrapper.innerHTML = '';
        const data = await Promise.all([
            getActivity(),
            getActivity(),
            getActivity()
        ]);
        for (const el of data) {
            const element = document.createElement('div');
            element.innerHTML = `${el.activity}`;
            wrapper.appendChild(element);
        }  
    } catch(err) {
        console.log(err);
    }
}
