function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color");
const background = document.querySelector("body");
const colorText = document.querySelector(".color");
colorBtn.addEventListener("click", onButtonClick);

function onButtonClick() {
  background.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}
