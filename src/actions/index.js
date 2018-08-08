export function selectDough(dough) {
  // selectDough is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "DOUGH_SELECTED",
    payload: dough
  };
}

export function selectIngredient(ingredient) {
  // selectIngredient is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "INGREDIENT_SELECTED",
    payload: ingredient
  };
}

export function removeIngredient(ingredient) {
  // selectIngredient is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "INGREDIENT_REMOVED",
    payload: ingredient
  };
}
