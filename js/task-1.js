const categories = document.querySelectorAll(".item");

const categoriesCounter = categories.length;
console.log(`Number of categories: ${categoriesCounter}`);

const categoriesMessage = categories.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.children[1].children.length}`);
});
