import React from "react";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Checkout} path="/checkout" />
      </Switch>
    </div>
  );
}


