import React from "react";
import db from "../../db";

const TaskToggle = (props) => {
  const { task, dateString, isClear } = props;

  const onToggle = (event) => {
    if (event.target.checked) {
      db.clearTask.add({ taskid: task.id, date: dateString });
    } else {
      db.clearTask
        .get({ taskid: task.id, date: dateString })
        .then((targetClear) => {
          console.log("delete", targetClear);
          db.clearTask.delete(targetClear.id);
        });
    }
  };

  return (
    <div>
      <label htmlFor="taskName">
        {task.name}
        <input type="checkbox" onChange={onToggle} checked={isClear} />
      </label>
    </div>
  );
};

export default TaskToggle;
