import React from "react";
import { Switch, Route } from "react-router-dom";
import Calendar from "./calendar/ClearCalendar";
import Home from "./home/Home";
import Settings from "./settings/Settings";
import "../css/page.scss";

const Routing = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/calendar" exact>
      <Calendar />
    </Route>
    <Route path="/settings" exact>
      <Settings />
    </Route>
  </Switch>
);

export default Routing;
