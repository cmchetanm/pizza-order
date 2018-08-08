import reducers from "../../reducers";
import { selectIngredient, removeIngredient } from "../../actions/index";

const activeIngredients =  {
    totalPrice: null,
    ingredients: []
  }

const currentActiveIngredients = {
    id: 1,
    name: 'Thin',
    description: 'Thin and crusty pizza dough',
    price: 0.5
  }

describe('activeIngredients reducer', () => {
  test('counter should return the initial state', () => {
    expect(reducers(undefined, {})).toMatchSnapshot();
  });

  test('activeIngredients selectIngredient', () => {
    expect(reducers(currentActiveIngredients, selectIngredient(activeIngredients))).toMatchSnapshot();
  });

  test('activeIngredients removeIngredient', () => {
    expect(reducers(currentActiveIngredients, removeIngredient(activeIngredients))).toMatchSnapshot();
  });
});
