import React, { useState } from "react";
import db from "../../db";

const AddTask = () => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task) return;
    db.tasks.add({ name: task });
    setTask("");
  };

  return (
    <div>
      <label>
        タスク名:
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      </label>
      <button type="submit" onClick={addTask}>
        追加
      </button>
    </div>
  );
};

export default AddTask;
