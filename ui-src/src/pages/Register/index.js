import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../../reducers";
import { NavBar, Footer } from "../../components/pages/common";

import RegisterForm from "../../components/pages/login/RegisterForm";
import App from "../../App";

const components = [NavBar, RegisterForm, Footer];

import("react-dom").then((ReactDOM) =>
  ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <App components={components} />
    </Provider>,
    document.getElementById("root")
  )
);
