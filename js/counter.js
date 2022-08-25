const spanMinutes = document.getElementById('minutes');
const spanSeconds = document.getElementById('seconds');
const spanHours = document.getElementById('hours');
const spanDays = document.getElementById('days');

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 7;

function loadSeconds() {

 
  let txtSeconds;

  if (seconds < 0) seconds = 59;
  seconds < 10 ? (txtSeconds = `0${seconds}`) : (txtSeconds = seconds);

  spanSeconds.textContent = `${txtSeconds}`;

  seconds--;
  loadMinutes(seconds);
}

loadSeconds();
const timer = setInterval(loadSeconds, 1000);

function loadMinutes(seconds) {
  let txtMinutes;

  if (seconds === -1 && minutes != 0) {
    setTimeout(() => {
      minutes--;
    }, 500);
  } else if (seconds === -1 && minutes === 0) {
    setTimeout(() => {
      minutes = 59;
    }, 500);
  }

  minutes < 10 ? (txtMinutes = `0${minutes}`) : (txtMinutes = minutes);

  spanMinutes.textContent = `${txtMinutes}`;
  loadHours(seconds, minutes);
}

function loadHours(seconds, minutes) {
  let txtHours;

  if (seconds == -1 && minutes === 0 && hours != 0) {
    setTimeout(() => {
      hours--;
    }, 500);
  } else if (seconds == -1 && minutes == 0 && hours == 0) {
    setTimeout(() => {
      hours = 23;
    }, 500);
  }

  hours < 10 ? (txtHours = `0${hours}`) : (txtHours = hours);
  spanHours.textContent = `${txtHours}`;
  loadDays(seconds, minutes, hours);
}

function loadDays(seconds, minutes, hours) {
  let txtDays;

  if (seconds == -1 && minutes == 0 && hours == 0 && days !== 0) {
    setTimeout(() => {
      days--;
    }, 500);
  }

  txtDays = days;
  clearTimer();
  spanDays.textContent = `${txtDays}`;
}

function clearTimer() {
  if (seconds == -1 && minutes == 0 && hours == 0 && days == 0) {
    clearInterval(timer);
  }
}