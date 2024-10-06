const date = document.querySelector("#date");
const time = document.querySelector("#time");
let [seconds, minutes, hours] = [0, 0, 0];
let dt = document.querySelector("#clock");
let timer = null;

setInterval(function() {
    let date1 = new Date();
    date.innerHTML = date1.toLocaleDateString();
}, 1000);

setInterval(function() {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();
}, 1000);

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    dt.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function watchStop() {
    clearInterval(timer);
    timer = null;
}

function resetWatch() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    dt.innerHTML = "00:00:00";
    timer = null;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("startBtn").addEventListener("click", watchStart);
    document.getElementById("stopBtn").addEventListener("click", watchStop);
    document.getElementById("resetBtn").addEventListener("click", resetWatch);
});

