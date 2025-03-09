'use strict';

async function getIdea() {
    const response = await fetch('https://bored.api.lewagon.com/api/activity');
    return response.json();
}

async function main() {
    const ideas = await Promise.all([
        getIdea(),
        getIdea(),
        getIdea()
    ]);
    document.querySelectorAll('.card').forEach((card, index) => {
        card.innerText = ideas[index].activity;
    });
}

document.querySelector('.btn').addEventListener('click', main);

main();