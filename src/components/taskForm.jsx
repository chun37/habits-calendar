import React, { useState } from "react";
import db from "../db";

const AddTask = () => {
  const [task, setTask] = useState();

  const onSubmit = (event) => {
    db.tasks.add({ name: task });
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="task">
          タスク名:
          <input
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
        </label>
        <button type="submit">追加</button>
      </form>
    </div>
  );
};

export default AddTask;