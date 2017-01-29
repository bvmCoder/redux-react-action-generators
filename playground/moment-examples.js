var moment = require('moment');
// moment is a JavaScript Module
console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0 second
// January 1st 1970 @ 12:01am -> -60 seconds

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1459111648;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
