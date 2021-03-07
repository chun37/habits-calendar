import React from "react";
import db from "../../db";

const TaskDeleteButton = (props) => {
  const { id } = props;
  const onClick = () => {
    db.tasks.delete(id);
  };
  return (
    <button type="button" onClick={onClick}>
      削除
    </button>
  );
};

export default TaskDeleteButton;
