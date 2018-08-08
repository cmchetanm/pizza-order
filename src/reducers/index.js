import { combineReducers } from "redux";
import DoughTypes from "./reducer_dough_types";
import activeDoughType from './reducer_active_dough';
import Ingredients from './reducer_ingredient_list';
import ActiveIngredients from './reducer_active_ingredient'

const rootReducer = combineReducers({
  doughTypes: DoughTypes,
  activeDoughTypes: activeDoughType,
  ingredients: Ingredients,
  activeIngredients: ActiveIngredients
});

export default rootReducer;
