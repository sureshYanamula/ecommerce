import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import SigninOne from "./user/SigninOne";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Admin from "./core/Admin";
import SignTwo from "./user/SignTwo";
import ExampleProps from "./PropsExample/ExampleProps";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers";

const store = createStore(rootReducer, composeWithDevTools());

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={SigninOne} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/signtwo" exact component={SignTwo} />
          <Route path="/exampleprops" exact component={ExampleProps} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;
