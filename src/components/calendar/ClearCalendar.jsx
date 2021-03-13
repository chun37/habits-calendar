import React, { useState } from "react";
import Calendar from "./Calendar";
import TaskSelector from "./TaskSelector";

const ClearCalendar = () => {
  const [taskId, setTaskId] = useState(0);

  return (
    <div>
      <h2>Calendar</h2>
      <div>
        <TaskSelector setTaskId={setTaskId} />
        <Calendar taskId={taskId} />
      </div>
    </div>
  );
}

export default ClearCalendar;
