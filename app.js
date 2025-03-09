'use strict';

async function getLocalGeo() {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
            (error) => reject(error)
        )
    )
}

async function getLocation() {
    try {
        const {latitude, longitude} = await getLocalGeo();
        const location = await fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
        
        if (!location.ok) {
            throw new Error(location.status);
        }

        const { city } = await location.json();
        return city;
    } catch (error) {
        console.log(error);
    }
}

(async () => {
    console.log(await getLocation());
    console.log('end');
})();
