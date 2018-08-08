import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/app";
import reducers from "./reducers";
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
