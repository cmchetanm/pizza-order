import React from "react";
import { Component } from "react";
import './app.css';

import DoughList from "../containers/dough-list";
import OrderDetail from "../containers/order-detail";
import IngredientList from "../containers/ingredient-list"

export default class App extends Component {
  render() {
    return (
      <div className="container text-center bg-grey app-header">
        <h1>Pizza App</h1>
        <div className="container-fluid">
          <DoughList />
          <IngredientList />
          <OrderDetail />
        </div>
      </div>
    );
  }
}
