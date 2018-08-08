import React, { Component } from "react";
import { connect } from "react-redux";
import { selectDough } from "../actions/index";
import { bindActionCreators } from "redux";
import './dough-list.css';

class DoughList extends Component {
  renderList() {
    return this.props.doughTypes.map(pizza => {
      return (
        <div
          key={pizza.id}
          onClick={() => this.props.selectDough(pizza)}
          className="list-group-item col-sm-6 dough-names"
        >
          {pizza.name}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of PizzaList
  return {
    doughTypes: state.doughTypes
  };
}

// Anything returned from this function will end up as props
// on the DoughList container
function mapDispatchToProps(dispatch) {
  // Whenever selectDough is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectDough: selectDough }, dispatch);
}

// Promote DoughList from a component to a container - it needs to know
// about this new dispatch method, selectDough. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(DoughList);
