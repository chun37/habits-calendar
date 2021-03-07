import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../db";

const TaskList = () => {
  const tasks = useLiveQuery(() => db.tasks.toArray());
  if (!tasks) return <p>タスク無し</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
};

export default TaskList;
