const startTime = 10;
let time = startTime * 60;

const countdownEL = document.getElementById('countdown');

setInterval(Countdown, 1000);

function Countdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    countdownEL.innerHTML = `${minutes}:${seconds}`;
    time--;
}