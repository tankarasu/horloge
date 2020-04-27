import "./styles.css";

const secondeDiv = document.querySelector(".seconde");
const minuteDiv = document.querySelector(".minute");
const heureDiv = document.querySelector(".heure");

function miseEnPlace() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minuts = now.getMinutes();
  const hours = now.getHours();

  const secDeg = (seconds / 60) * 360 + 90;
  secondeDiv.style.transform = `rotate(${secDeg}deg)`;
  const minDeg = (minuts / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteDiv.style.transform = `rotate(${minDeg}deg)`;
  const hourDeg = (hours / 12) * 360 + (minuts / 60) * 30 + 90;
  heureDiv.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(miseEnPlace, 1000);
