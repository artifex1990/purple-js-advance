'use strict';

function timerOfPizza(time) {
    const localTimeStep = 1000;
    let minutes = Math.floor(time / localTimeStep / 60);
    let second = time / localTimeStep % 60;
    const interval = setInterval(() => {
        console.log(`${String(minutes).padStart(2, 0)}:${String(second).padStart(2, 0)}`);
        if (second === 0) {
            minutes--;
            second = 60;
        } else {
            second--;
        }
    }, localTimeStep);

    setTimeout(() => {
        clearInterval(interval);
        console.log('🍕!!!');
    }, time);
}

timerOfPizza(61000);