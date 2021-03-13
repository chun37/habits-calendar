import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import Routing from "./Route";

const App = () => (
  <Router>
    <Navigation />
    <Routing />
  </Router>
);

export default App;
