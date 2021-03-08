import React from "react";

const TaskToggle = (props) => {
  const { task, dateString } = props;
  return (
    <p>
      {task.name} {task.id} {dateString}
    </p>
  );
};

export default TaskToggle;
