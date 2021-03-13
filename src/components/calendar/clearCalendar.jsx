import React, { useState } from "react";
import Calendar from "./calendar";
import TaskSelector from "./taskSelector";

const ClearCalendar = () => {
  const [taskId, setTaskId] = useState(0);

  return (
    <div>
      <TaskSelector setTaskId={setTaskId} />
      <Calendar taskId={taskId} />
    </div>
  );
};

export default ClearCalendar;
