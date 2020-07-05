const secounedHand = document.querySelector('.secouned');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setTime(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) - 90;
    secounedHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minute = now.getMinutes();
    const minsDegrees = ((minute / 60) * 360) + ((seconds/60)*6) +270;
    minuteHand .style.transform = `rotate(${minsDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) + 270;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setTime, 1000);
setTime()
