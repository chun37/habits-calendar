import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import db from "../../db";
import TaskToggle from "./taskToggle";

const TaskTable = (props) => {
  const { dateString } = props;

  const tasks = useLiveQuery(() => db.tasks.toArray());
  const clear = useLiveQuery(
    () => db.clearTask.where("date").equals(dateString).toArray(),
    [dateString]
  );

  if (!tasks || !clear || tasks.length === 0) return <p>タスク無し</p>;

  console.log("today", dateString);
  console.log("today's clear", clear);
  const clearIds = clear.map((item) => item.taskid);

  return tasks.map((task) => (
    <TaskToggle
      key={task.id}
      task={task}
      dateString={dateString}
      isClear={clearIds.includes(task.id)}
    />
  ));
};

export default TaskTable;
