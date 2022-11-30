const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstIngredientEl = document.createElement("li")
firstIngredientEl.textContent = ingredients[0];

const secondIngredientEl = document.createElement("li")
secondIngredientEl.textContent = ingredients[1];

const thirdIngredientEl = document.createElement("li")
thirdIngredientEl.textContent = ingredients[2];

const fourthIngredientEl = document.createElement("li")
fourthIngredientEl.textContent = ingredients[3];

const fifthIngredientEl = document.createElement("li")
fifthIngredientEl.textContent = ingredients[4];

const sixthIngredientEl = document.createElement("li")
sixthIngredientEl.textContent = ingredients[5];

const ingredientsEl = document.querySelector("ul");
ingredientsEl.append(
  firstIngredientEl,
  secondIngredientEl,
  thirdIngredientEl,
  fourthIngredientEl,
  fifthIngredientEl,
  sixthIngredientEl);
console.log(ingredientsEl);