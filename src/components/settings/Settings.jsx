import React from "react";
import AddTask from "./TaskForm";
import TaskList from "./TaskList";

const Settings = () => (
  <div className="main">
    <h2>Settings</h2>
    <AddTask />
    <TaskList />
  </div>
);

export default Settings;
