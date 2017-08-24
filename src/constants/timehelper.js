
export default function TimePassed(locationHistory1, locationHistory2){
var startTimestamp = locationHistory1.location.timestamp
var endTimestamp = locationHistory2.location.timestamp
var ms = endTimestamp - startTimestamp
temp =  millisecondsToHoursMinutesSeconds(endTimestamp - startTimestamp)
return(temp);
}

function millisecondsToHoursMinutesSeconds(ms) {
    var time = {
        milliseconds: (ms%1000)/100,
        seconds: (ms/1000)%60,
        minutes: (ms/(1000*60))%60,
        hours: (ms/(1000*60*60))%24}

    return time
}
