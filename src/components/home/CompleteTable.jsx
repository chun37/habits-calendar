import React, { useState } from "react";
import { dateToString } from "../utils";
import DateSelector from "./DateSelector";
import TaskTable from "./TaskTable";

const CompleteTable = () => {
  const [dateString, setDateString] = useState(dateToString(new Date()));

  return (
    <div>
      <DateSelector dateString={dateString} onChangeDate={setDateString} />
      <TaskTable dateString={dateString} />
    </div>
  );
};

export default CompleteTable;
