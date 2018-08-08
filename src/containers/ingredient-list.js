import React, { Component } from "react";
import { connect } from "react-redux";
import { selectIngredient, removeIngredient } from "../actions/index";
import { bindActionCreators } from "redux";
import './ingredient.css'

class IngredientList extends Component {

  renderList() {
    if (!this.props.activeDoughTypes) {
      return <div className="text-center col-sm-12">Select a pizza to get started.</div>;
    }
    return this.props.ingredients.map(ingredient => {
      return (
        <div key={ingredient.id} className="list-group-item col-sm-3 ingredient-holder">
          <div className="row">
            <div className="col-sm-8 ingredient-name">
              {ingredient.name} | €{ingredient.price}
            </div>
            <div className="col-sm-4">
              <div onClick={() => this.props.selectIngredient(ingredient)} className="icons">
                +
              </div>
              <div onClick={() => this.props.removeIngredient(ingredient)} className="icons">
                -
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row ingredient-row">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of PizzaList
  return {
    ingredients: state.ingredients,
    activeDoughTypes: state.activeDoughTypes,
    activeIngredients: state.activeIngredients
  };
}

// Anything returned from this function will end up as props
// on the Ingredient container
function mapDispatchToProps(dispatch) {
  // Whenever selectIngredient is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectIngredient: selectIngredient, removeIngredient: removeIngredient}, dispatch);
}

// Promote Ingredient from a component to a container - it needs to know
// about this new dispatch method, selectIngredient. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(IngredientList);
