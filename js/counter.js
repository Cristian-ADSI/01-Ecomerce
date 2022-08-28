const spanMinutes = document.getElementById('minutes');
const spanSeconds = document.getElementById('seconds');
const spanHours = document.getElementById('hours');
const spanDays = document.getElementById('days');

const limitDate = new Date('30 aug 2022');

function counter() {
  const currentDate = new Date();
  const totalSeconds = (limitDate - currentDate) / 1000;

  const leftDays = Math.floor(totalSeconds / 86400);
  const leftHours = Math.floor(totalSeconds / 3600) % 24;
  const leftMinutes = Math.floor(totalSeconds / 60) % 60;
  const leftSeconds = Math.floor(totalSeconds % 60);

  spanDays.textContent = `${leftDays}`;
  spanHours.textContent = `${leftHours}`;
  spanMinutes.textContent = `${leftMinutes}`;
  spanSeconds.textContent = `${leftSeconds}`;
}

setInterval(setCounter, 1000);

function setCounter() {
  const currentDate = new Date();

  if (limitDate > currentDate) {
    counter();
  }
}
