const dateBegan = new Date('September 6, 2020 00:00:01');

const daysDisplay = document.querySelector('#days-display');
const hoursDisplay = document.querySelector('#hours-display');
const minutesDisplay = document.querySelector('#minutes-display');
const secondsDisplay = document.querySelector('#seconds-display');


let counter = setInterval(countFromDate, 1000);

function countFromDate() {
    let timeSinceMilli = Date.now() - dateBegan;

    timeSinceMilli = timeSinceMilli / 1000;
    let timeSinceSeconds = Math.floor(timeSinceMilli % 60);
    secondsDisplay.innerHTML = timeSinceSeconds;

    timeSinceMilli = timeSinceMilli / 60;
    let timeSinceMinutes = Math.floor(timeSinceMilli % 60);
    minutesDisplay.innerHTML = timeSinceMinutes;

    timeSinceMilli = timeSinceMilli / 60;
    let timeSinceHours = Math.floor(timeSinceMilli % 24);
    hoursDisplay.innerHTML = timeSinceHours;

    let timeSinceDays = Math.floor(timeSinceMilli / 24);
    daysDisplay.innerHTML = timeSinceDays;


}