import React from "react";
import { Link } from "react-router-dom";
import "../css/navigation.scss";

const Navigation = () => (
  <nav>
    <ul className="navigation">
      <li key="home">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
