let twenty_button = document.getElementById("twentySecondsBtn");
let thirty_button = document.getElementById("thirtySecondsBtn");
let forty_button = document.getElementById("fortySecondsBtn");
let one_minute_button = document.getElementById("oneMinuteBtn");
let timer_text = document.getElementById("timerText");
let counter_id;
let timer_completed_text = "Your Moment is Completed"
let seconds_left = 0

function close_timers() {
    clearInterval(counter_id);
}

function startTimer() {
    if (seconds_left > 1) {
        seconds_left = seconds_left - 1;
        timer_text.textContent = seconds_left + " seconds left"
    } else {
        close_timers();
        timer_text.textContent = timer_completed_text
    }
}

function setTimerAndShow() {
    timer_text.textContent = seconds_left + " seconds left";
    counter_id = setInterval(startTimer, 1000)
}

twenty_button.onclick = function() {
    seconds_left = 20;
    close_timers();
    setTimerAndShow();
}
thirty_button.onclick = function() {
    seconds_left = 30;
    close_timers();
    setTimerAndShow();
}
forty_button.onclick = function() {
    seconds_left = 40;
    close_timers();
    setTimerAndShow();
}
one_minute_button.onclick = function() {
    seconds_left = 60;
    close_timers();
    setTimerAndShow();
}