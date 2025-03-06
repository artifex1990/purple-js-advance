'use strict';

const user = {
    name: 'Max',
    birthday: '03/07/2000',
}

function isBirthday(user) {
    const userDate = new Date(user.birthday);
    const today = new Date();

    return userDate.getMonth() === today.getMonth() && userDate.getDate() === today.getDate();
}

console.log(isBirthday(user));