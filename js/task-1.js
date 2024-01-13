const categories = document.querySelectorAll(".item");

const categoriesCounter = categories.length;
console.log(`Number of categories: ${categoriesCounter}.`);

for (let category of categories) {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.children[1].children.length}`);
}
