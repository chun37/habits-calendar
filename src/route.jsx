import React from "react";
import { Switch, Route } from "react-router-dom";

const Routing = () => (
  <Switch>
    <Route path="/about" exact>
      <About />
    </Route>
    <Route path="/users" exact>
      <Users />
    </Route>
    <Route path="/" exact>
      <Home />
    </Route>
  </Switch>
);

const Home = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;

const Users = () => <h2>Users</h2>;

export default Routing;
