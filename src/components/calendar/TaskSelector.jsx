import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import db from "../../db";

const TaskSelector = (props) => {
  const { setTaskId } = props;
  const tasks = useLiveQuery(() => db.tasks.toArray(), []);

  const onTaskUpdate = (event) => {
    setTaskId(parseInt(event.target.value, 10));
  };

  if (!tasks || tasks.length === 0) return <p>タスク無し</p>;

  // setTaskId(tasks[0].id); // FIXME: 警告がでる

  return (
    <div>
      <select onChange={onTaskUpdate}>
        <option value={0}>未選択</option>
        {tasks.map((task) => (
          <option key={task.id} value={task.id}>
            {task.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskSelector;
