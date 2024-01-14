const input = document.querySelector("#name-input");
const greeting = document.querySelector("#name-output");

input.addEventListener("input", onInputBlur);

function onInputBlur(event) {
  const name = input.value.trim();

  if (name === "") {
    greeting.textContent = "Anonymous";
  } else {
    greeting.textContent = name;
  }
}
