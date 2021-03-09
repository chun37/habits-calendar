import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Settings from "./settings";

const Routing = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/settings" exact>
      <Settings />
    </Route>
  </Switch>
);

export default Routing;
