var moment = require('moment');

const roundToNearestXXMinutes = (dateTime, roundTo) => {
	const start = moment(dateTime);
	let remainder = roundTo - (start.minute()+ start.second()/60) % roundTo ;
	//console.log(moment(start).format("DD.MM.YYYY HH:mm:ss"));
	remainder = (remainder >  roundTo/2) ? remainder = -roundTo + remainder : remainder;
	const changedDate =	moment(start).add(remainder, "minutes" ).seconds(0).format("DD.MM.YYYY HH:mm:ss");
	//console.log('is changed to');
	console.log(changedDate);
	//console.log('----------------------------------------------');
}

roundToNearestXXMinutes(new Date("October 13, 2014 23:46:00"), 10);

