'use strict';

function timerOfPizza(time) {
    const localTimeStep = 1000;
    const end = new Date().getTime() + time;
    const interval = setInterval(() => {
        console.log(
            new Intl.DateTimeFormat('ru', {
                minute: 'numeric',
                second: 'numeric'
            }).format(end + 100 - new Date())
        );
    }, localTimeStep);

    setTimeout(() => {
        clearInterval(interval);
        console.log('🍕!!!');
    }, time);
}

timerOfPizza(3000);