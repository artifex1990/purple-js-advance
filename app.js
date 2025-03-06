'use strict';

const data1 = new Date(2024, 10, 15);
const data2 = new Date(2024, 11, 15);
console.log(Number(data1));
console.log(data2 - data1);

function getDaysBetweenDates(dateFirst, dateSecond) {
    return (dateSecond - dateFirst) / (1000 * 60 * 60 * 24);
}

console.log(getDaysBetweenDates(data1, data2));