import reducers from "../../reducers";
import { selectDough } from "../../actions/index";

const doughType =  {
  activeDoughTypes:  {
    id: 1,
    name: 'Thin',
    description: 'Thin and crusty pizza dough',
    price: 0.5
  }
}

const currentDoughType = {
  activeDoughTypes:  {
    id: 1,
    name: 'Thin',
    description: 'Thin and crusty pizza dough',
    price: 0.5
  }
}

describe('doughType reducer', () => {
  test('counter should return the initial state', () => {
    expect(reducers(undefined, {})).toMatchSnapshot();
  });

  test('doughType selectDough', () => {
    expect(reducers(currentDoughType, selectDough(doughType))).toMatchSnapshot();
  });
});
