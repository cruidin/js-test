const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E",
  "F"];

const btn = document.getElementById("btn");
const btnTwo = document.getElementById("btn2");
const btnThree = document.getElementById("btn3");
const btnFour = document.getElementById("btn4");
const btnFive = document.getElementById("btn5");
const btnSix = document.getElementById("btn6");
const btnSeven = document.getElementById("btn7");
const btnEight = document.getElementById("btn8");
const btnNine = document.getElementById("btn9");
const btnTen = document.getElementById("btn10");
const colorOne = document.querySelector(".color-one");
const colorTwo = document.querySelector(".color-two");
const colorThree = document.querySelector(".color-three");
const colorFour = document.querySelector(".color-four");
const colorFive = document.querySelector(".color-five");
const colorSix = document.querySelector(".color-six");
const colorSeven = document.querySelector(".color-seven");
const colorEight = document.querySelector(".color-eight");
const colorNine = document.querySelector(".color-nine");
const colorTen = document.querySelector(".color-ten");

btn.addEventListener("click", function() {
  let hexColor = "#";
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
colorOne.textContent = hexColor;
document.getElementById("first-div").style.backgroundColor = hexColor;
});

btnTwo.addEventListener("click", function() {
  let hexColor = "#";
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
colorTwo.textContent = hexColor;
document.getElementById("second-div").style.backgroundColor = hexColor;
});

btnThree.addEventListener("click", function() {
  let hexColor = "#";
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
colorThree.textContent = hexColor;
document.getElementById("third-div").style.backgroundColor = hexColor;
});

btnFour.addEventListener("click", function() {
  let hexColor = "#";
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
colorFour.textContent = hexColor;
document.getElementById("fourth-div").style.backgroundColor = hexColor;
});

btnFive.addEventListener("click", function() {
  let hexColor = "#";
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
colorFive.textContent = hexColor;
document.getElementById("fifth-div").style.backgroundColor = hexColor;
});

btnSix.addEventListener("click", function() {
  let hexColor = "#";
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
colorSix.textContent = hexColor;
document.getElementById("sixth-div").style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
