const colors = ["#ce93d8", "64b5f6", "#4dd0e1", "#f06292", "fff176"];
const body = document.querySelector("body");

function Randcolor() {
  const randNum = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randNum];
}

Randcolor();
