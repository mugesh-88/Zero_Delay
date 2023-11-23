const timerElement = document.getElementById('timer');
const startbuttonElement = document.getElementById('start-button');
const stopbuttonElement = document.getElementById('stop-button');
const resetbuttonElement = document.getElementById('reset-button');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer(){
    startTime = Date.now() - elapsedTime;
    console.log(startTime);
    timerInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timerElement.textContent = formatTime(elapsedTime);
    },10);
}

function formatTime(elapsedTime){

    const milliseconds =Math.floor((elapsedTime%1000)/10);
    const seconds = Math.floor((elapsedTime/1000)%3600%60);
    const minute = Math.floor(((elapsedTime/1000)%3600)/60);
    const hour = Math.floor((elapsedTime/1000)/3600);

    startbuttonElement.disabled=true;
    stopbuttonElement.disabled=false;

    return (hour=="0"?"00":hour>9?hour:"0"+hour)+":"+(minute=="0"?"00":minute>9?minute:"0"+minute)+":"+(seconds=="0"?"00":seconds>9?seconds:"0"+seconds)+"."+(milliseconds>9?milliseconds:"0"+milliseconds);

}

function stopTimer(){
    clearInterval(timerInterval);
    stopbuttonElement.disabled=true;
    startbuttonElement.disabled=false;
}

function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerElement.textContent="00:00:00";
    startbuttonElement.disabled=false;
    stopbuttonElement.disabled=true;
}

startbuttonElement.addEventListener("click",startTimer);
stopbuttonElement.addEventListener("click",stopTimer);
resetbuttonElement.addEventListener("click",resetTimer);