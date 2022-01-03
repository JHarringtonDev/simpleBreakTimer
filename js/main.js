function resetTime(){
    window.location.reload();
}

function startTime(){
let startingMinutes = Number(document.getElementById("hours").value * 60) + Number(document.getElementById("minutes").value) ;
let time = startingMinutes * 60



const countdownEl = document.getElementById('countdown');
  
    setInterval(updateCountdown, 1000)
function updateCountdown() {
    let adjustMinutes
const minutes = Math.floor(time/60);
if(minutes % 60 == 0){
    adjustMinutes = "00"
} else if((minutes%60) < 10){
    adjustMinutes = `0${minutes%60}`
} else {
    adjustMinutes = minutes % 60
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
    }else if(countdownEl.innerHTML.includes("-")){
    countdownEl.innerHTML = `0:00:00`
}
}
}



document.querySelector('#start').addEventListener("click", startTime)
document.quereSelector('#reset').addEventListener("click", resetTime)