// State argument is not application state, only the state
// this reducer is responsible for
const initialState = {
  totalPrice: null,
  ingredients: []
}

const initialAction = {
  type: null
}

function removeByKey(array, params){
  array.some(function(item, index) {
    return (array[index].id === params.id) ? !!(array.splice(index, 1)) : false;
  });
  return array;
}

function addIngredient(state= null, action) {
  state.ingredients.push(action.payload)
  state.price = state.ingredients.reduce((prev, next) => prev + next.price, 0);
  return {totalPrice: state.price, ingredients: state.ingredients};
}

function removeIngredient(state= null, action) {
  state.ingredients = removeByKey(state.ingredients, action.payload)
  state.price = state.ingredients.reduce((prev, next) => prev + next.price, 0);
  return {totalPrice: state.price, ingredients: state.ingredients};
}

export default function(state = initialState, action = initialAction) {
  switch (action.type) {
    case "INGREDIENT_SELECTED":
      return addIngredient(state, action);
    case 'INGREDIENT_REMOVED':
      return removeIngredient(state, action);
    default:
      return state
  }
}
