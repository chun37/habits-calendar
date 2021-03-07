import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./navigation";
import Routing from "./route";

const App = () => (
  <Router>
    <Navigation />
    <Routing />
  </Router>
);

export default App;
