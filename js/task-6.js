function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxElem = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

let width = 30;
let height = 30;

let arr = [];

function onCreateBtnClick() {
  const number = inputNumber.value;
  if (number >= 1 && number <= 100) {
    for (let i = 1; i <= number; i++) {
      arr.push(
        `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`
      );
      width += 10;
      height += 10;
    }
  }

  console.log(...arr);
  boxElem.insertAdjacentHTML("afterbegin", arr.join(""));

  inputNumber.reset();
}

function onDestroyBtnClick() {
  while (boxElem.firstChild) {
    boxElem.removeChild(boxElem.firstChild);
  }
  inputNumber.reset();
}
