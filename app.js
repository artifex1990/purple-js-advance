'use strict';

function getMyCoordinate() {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                });
            },
            error => reject(error)
        )
    )
}

async function getMyCity() {
    try {
        const {latitude, longitude} = await getMyCoordinate();
        const response = await fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
        
        if (!response.ok) {
            throw new Error(location.status);
        }

        const data = await response.json();
        console.log(data.city);
    } catch (error) {
        console.log(error);
    }
}

getMyCity();

