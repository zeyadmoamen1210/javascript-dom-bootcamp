const newYears = '1 jan 2022';

const dayEl = document.getElementById('dayEl');
const hourEl = document.getElementById('hourEl');
const minEl = document.getElementById('minEl');
const secEl = document.getElementById('secEl');

function countdown() {
    const curr = new Date();
    const theNewYear = new Date(newYears);


    const totalSeconds = (theNewYear - curr) / 1000;
    const totalMins = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMins / 60);
    const days = Math.floor(totalHours / 24);

    const Hours = Math.floor(totalSeconds / 3600) % 24;
    const Min = Math.floor(totalSeconds / 60) % 60;
    const Sec = Math.floor(totalSeconds % 60);


    dayEl.textContent = days;
    hourEl.textContent = Hours;
    minEl.textContent = Min;
    secEl.textContent = Sec;
};

countdown();

setInterval(countdown, 1000)