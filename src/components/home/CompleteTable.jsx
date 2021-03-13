import React, { useState } from "react";
import { dateToString } from "../utils";
import DateSelector from "./dateSelector";
import TaskTable from "./taskTable";

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
