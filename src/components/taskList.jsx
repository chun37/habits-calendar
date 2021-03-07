import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../db";
import TaskDeleteButton from "./taskDeleteButton";

const TaskItem = (props) => {
  const { name, id } = props;
  return (
    <li>
      {name}
      <TaskDeleteButton id={id} />
    </li>
  );
};

const TaskList = () => {
  const tasks = useLiveQuery(() => db.tasks.toArray());
  if (!tasks) return <p>タスク無し</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} name={task.name} id={task.id} />
      ))}
    </ul>
  );
};

export default TaskList;
