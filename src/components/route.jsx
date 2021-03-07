import React from "react";
import { Switch, Route } from "react-router-dom";
import Settings from "./settings";

const Routing = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/settings">
      <Settings />
    </Route>
  </Switch>
);

const Home = () => <h2>Home</h2>;

export default Routing;
