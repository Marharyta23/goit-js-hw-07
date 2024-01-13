const input = document.querySelector("#name-input");
const greeting = document.querySelector("#name-output");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  event.preventDefault();
  const name = input.value.trim();

  if (name === "") {
    greeting.textContent = "Anonymous";
  } else {
    greeting.textContent = name;
  }

  input.reset();
}
