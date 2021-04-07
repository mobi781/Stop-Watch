var sec = 0;
var min = 0;
var msec = 0;
var msech = document.getElementById("msec");
var sech = document.getElementById("sec");
var minh = document.getElementById("min");

var timer;

// console.log(timer);
function msecf() {
    msec++
    msech.innerHTML = msec;
    if (msec > 100) {
        sec++
        sech.innerHTML = sec;
        msec = 0;
    } else if (sec > 60) {
        min++
        minh.innerHTML = min;
        sec = 0;
    }


}

function Start() {
    timer = setInterval(msecf, 10);
    var button = document.querySelector('button');
    button.disabled = true;



}
function Stop() {
    setTimeout(stoptimer);
    var button = document.querySelector('button');
    button.disabled = false;
}
function reset() {
    setTimeout(stoptimer);
    msech.innerHTML = 0;
    minh.innerHTML = 0;
    sech.innerHTML = 0;
}


function stoptimer() {

    clearInterval(timer);
}

