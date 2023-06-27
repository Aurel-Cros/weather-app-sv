let counter = 0;
const clock = document.querySelector(".clock-leg");

const time = new Date();
const hour24 = time.getHours();
const hour12 = hour24 > 11 ? hour24 - 12 : hour24;
const mins = time.getMinutes();

let rotate = 90;
rotate += hour12 * 30;
rotate += mins / 2;

clock.style.rotate = `${rotate}deg`;
