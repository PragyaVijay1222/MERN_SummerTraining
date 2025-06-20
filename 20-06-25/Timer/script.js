let timer = null;
let seconds = 0;

const hr = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("second");

function updateDisplay() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  hr.textContent = String(hrs).padStart(2, '0');
  min.textContent = String(mins).padStart(2, '0');
  sec.textContent = String(secs).padStart(2, '0');
}

document.getElementById("button1").onclick = function () {
  if (timer) return;
  timer = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
};

document.getElementById("button2").onclick = function () {
  clearInterval(timer);
  timer = null;
};

document.getElementById("button3").onclick = function () {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateDisplay();
};