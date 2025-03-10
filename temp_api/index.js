import 'temporal-polyfill/global';

console.log(Temporal.Now.instant().toString());
console.log(Temporal.Now.instant().epochSeconds);
console.log(Temporal.Now.timeZoneId());
console.log(Temporal.Now.zonedDateTimeISO().toString());
console.log(Temporal.Now.zonedDateTimeISO('Europe/London').toString());

const date = new Date();
const instant = date.toTemporalInstant();
console.log(instant.toString());

const t1 = Temporal.Instant.from('2025-03-10T23:43:59.136+03:00');
const t2 = Temporal.Instant.from('2025-04-10T23:43:59.136+03:00[Europe/Moscow]');
const t3 = Temporal.Instant.fromEpochSeconds(10e8);

const res = new Temporal.ZonedDateTime(
    Temporal.Now.instant().epochNanoseconds, 
    Temporal.TimeZone.from('Europe/London'),
    Temporal.Calendar.from('iso8601')
);

console.log(res.toString());
console.log(Temporal.PlainDateTime.from('2024-04-18').toString());
console.log(Temporal.PlainDateTime.from('2024-04-18').dayOfWeek);
console.log(Temporal.PlainDateTime.from('2024-04-18').day);
console.log(Temporal.PlainDateTime.from('2024-04-18').dayOfYear);


console.log(res.add({
    days: 2,
    month: 1
}).subtract({
    weeks: 1
}).toString());

console.log(Temporal.Instant.compare(t1, t2));
console.log(res.equals(res));