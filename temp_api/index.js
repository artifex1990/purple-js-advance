import 'temporal-polyfill/global';

console.log(Temporal.Now.instant().toString());
console.log(Temporal.Now.instant().epochSeconds);
console.log(Temporal.Now.timeZoneId());
console.log(Temporal.Now.zonedDateTimeISO().toString());
console.log(Temporal.Now.zonedDateTimeISO('Europe/London').toString());

const date = new Date();
const instant = date.toTemporalInstant();
console.log(instant.toString());