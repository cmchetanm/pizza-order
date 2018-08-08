import React, { Component } from "react";
import { connect } from "react-redux";
import './order-detail.css';

class OrderDetail extends Component {

  compressArray(original) {
    var compressed = [];
    // make a copy of the input array
    var copy = original.slice(0);
    // first loop goes over every element
    for (var i = 0; i < original.length; i++) {
      var Count = 0;
      // loop over every element in the copy and see if it's the same
      for (var w = 0; w < copy.length; w++) {
        if ( typeof copy[w] !== 'undefined') {
          if (original[i].id === copy[w].id) {
            // increase amount of times duplicate is found
            Count++;
            // sets item to undefined
            delete copy[w]
          }
        }
      }
      if (Count > 0) {
        compressed.push({value: original[i], count: Count});
      }
    }
    return compressed;
  };

  renderIngredientList() {
    return this.compressArray(this.props.activeIngredients.ingredients).map(ingredient => {
      return (
        <div
          key={ingredient.value.id}
          className="list-group-item col-sm-3 added-ingredient-name"
        >
          <div className="row">
            <div className="col-sm-6">
              {ingredient.value.displayName}
            </div>
            <div className="col-sm-6">
              x{ingredient.count}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (!this.props.activeDoughTypes) {
      return <div></div>;
    }
    if (!this.props.activeIngredients.totalPrice) {
      return <div></div>;
    }
    return (
      <div className="added-ingrident">
        <h3 className="text-center">Order Details</h3>
        <div className="row"> {this.renderIngredientList()} </div>
        <div className="row">
          <div className="text-center col-sm-12">Dough Type: {this.props.activeDoughTypes.name}  <span className="differntiator"> |
          </span> Total Price : €{this.props.activeIngredients.totalPrice}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of OrderDetail
  return {
    activeIngredients: state.activeIngredients,
    activeDoughTypes: state.activeDoughTypes
  };
}

export default connect(mapStateToProps)(OrderDetail);
