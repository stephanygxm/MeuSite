import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Me from "./components/Me/index";
import Portfolio from "./components/Portfolio/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/me" component={Me} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
