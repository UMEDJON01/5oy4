const form = document.querySelector("form");
const input = document.querySelector("input");
const ol = document.querySelector("ol");

const ClearAllbtn = document.querySelector("#clear-all");

ClearAllbtn.addEventListener(`click`, () => {
  ol.innerHTML = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  ol.innerHTML += ` <li>${input.value}</li>`;

  input.value = "";

  const music = new Audio("./music/music.mp3");
  music.play();
});

document.addEventListener("DOMContentLoaded", function () {
  const yourName = document.getElementById("yourName");

  setInterval(function () {
    const randomColor = getRandomColor();
    yourName.style.color = randomColor;
  }, 1000);

  yourName.addEventListener("click", function () {
    const randomColor = getRandomColor();
    yourName.style.color = randomColor;
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
