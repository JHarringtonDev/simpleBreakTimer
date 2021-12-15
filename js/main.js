const startingMinutes = 120;
let time = startingMinutes * 60

const countdownEl = document.getElementById('countdown');

function startTime(){
    setInterval(updateCountdown, 1000)

function updateCountdown() {
    let adjustMinutes
const minutes = Math.floor(time/60);
if(minutes % 60 == 0){
    adjustMinutes = "00"
}
else if (minutes > 60){
    adjustMinutes = minutes - (Math.trunc(minutes / 60) * 60)  
} else if(minutes < 10){
    adjustMinutes = `0${minutes}`
}  else {
    adjustMinutes = minutes
}

let hours = Math.trunc(minutes / 60)

let seconds = time % 60
if(seconds < 10){
    seconds = `0${time%60}`
}

countdownEl.innerHTML = `${hours}:${adjustMinutes}:${seconds}`
time--;

if(hours == 0 && adjustMinutes == 00 && seconds == 00){
    alert('Break Time!!!')
    }
}
// if(hours == 1 && adjustMinutes == 58 && seconds == 30){
//     alert('Break Time!!!')
}

document.querySelector('button').addEventListener("click", startTime)
