/* SOBRE */

const envelope = document.getElementById("envelope");
const overlay = document.getElementById("overlay");

envelope.addEventListener("click", () => {

envelope.classList.add("open");

setTimeout(() => {
overlay.classList.add("hidden");
}, 1800);

const music = document.getElementById("music");
music.play();

});

/* CUENTA REGRESIVA */

const weddingDate = new Date("August 22, 2026 16:45:00").getTime();

const countdown = setInterval(() => {

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/ (1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/ (1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60))
/ 1000
);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);