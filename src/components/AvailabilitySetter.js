//Import external library
const AvailabilitySchedule = require('availability-schedule');

export default function AvailabilitySetter() { 

const schedule = new AvailabilitySchedule('2017-01-09T00:00:00Z', '2017-01-16T00:00:00Z'); // Second week of Jan 2017
schedule.addWeeklyRecurringAvailability('2017-01-04T09:00:00Z', '2017-01-04T17:00:00Z', [1, 2, 3, 4, 5]); // Mon-Fri 9am-5pm UTC, starting on Wed Jan 4th
schedule.addAvailability('2017-01-14T12:00:00Z', '2017-01-14T15:00:00Z'); // Sat Jan 14 12pm-3pm UTC

schedule.getAvailabilities('+0100');
/*
[
  {start: '2017-01-09T10:00:00+01:00', end: '2017-01-09T18:00:00+01:00'},
  {start: '2017-01-10T10:00:00+01:00', end: '2017-01-10T18:00:00+01:00'},
  {start: '2017-01-11T10:00:00+01:00', end: '2017-01-11T18:00:00+01:00'},
  {start: '2017-01-12T10:00:00+01:00', end: '2017-01-12T18:00:00+01:00'},
  {start: '2017-01-13T10:00:00+01:00', end: '2017-01-13T18:00:00+01:00'},
  {start: '2017-01-14T13:00:00+01:00', end: '2017-01-14T16:00:00+01:00'}
]
*/

schedule.isAvailable('2017-01-14T15:00:00+01:00', '2017-01-14T16:00:00+01:00'); // true

};