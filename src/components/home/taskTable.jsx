import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../../db";
import TaskToggle from "./taskToggle";

const TaskTable = (props) => {
  const { dateString } = props;

  const tasks = useLiveQuery(() => db.tasks.toArray());
  if (!tasks || tasks.length === 0) return <p>タスク無し</p>;

  return tasks.map((task) => (
    <TaskToggle key={task.id} task={task} dateString={dateString} />
  ));
};

export default TaskTable;
