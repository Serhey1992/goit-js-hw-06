const categoriesListEl = document.querySelector("#categories")
// console.log(categoriesListEl);
const numberOfCategories = categoriesListEl.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategories.length);

const firstItem = numberOfCategories[0];
const firstItemTitle = firstItem.querySelector("h2")
console.log("Category:",firstItemTitle.textContent);
const elementsOfFirstItem = firstItem.querySelectorAll("li");
console.log("Elements:", elementsOfFirstItem.length);

const secondItem = numberOfCategories[1];;
const secondItemTitle = secondItem.querySelector("h2")
console.log("Category:",secondItemTitle.textContent);
const elementsOfSecondItem = secondItem.querySelectorAll("li");
console.log("Elements:", elementsOfSecondItem.length);

const lastItem = numberOfCategories[2];;
const lastItemTitle = lastItem.querySelector("h2")
console.log("Category:",lastItemTitle.textContent);
const elementsOfLastItem = lastItem.querySelectorAll("li");
console.log("Elements:", elementsOfLastItem.length);
