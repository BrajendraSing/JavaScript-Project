var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var median = document.querySelector(".median").firstElementChild;


setInterval(() => {
    var date = new Date();
    var hr = date.getHours();
    var mi = date.getMinutes();
    var sec = date.getSeconds();
    var med = "AM";

    if (hr < 10) {
        hr = `0${hr}`;
    }
    if (mi < 10) {
        mi = `0${mi}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }
    if (hr >= 12) {
        hr = hr - 12;
        med = "PM";
    }
    hours.innerHTML = hr;
    minutes.innerHTML = mi;
    seconds.innerHTML = sec;
    median.innerHTML = med;
}, 1000);
