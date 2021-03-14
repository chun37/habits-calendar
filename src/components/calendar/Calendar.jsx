import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import db from "../../db";
import { zeroPadding } from "../utils";
import DateTable from "./DateTable";
import MonthSelector from "./MonthSelector";

const Calendar = (props) => {
  const { taskId } = props;
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const clear = useLiveQuery(
    () => db.clearTask.where("taskid").equals(taskId).toArray(),
    [taskId]
  );

  console.log(taskId, clear);
  if (!clear) return <p>タスク無し</p>;

  return (
    <div>
      <MonthSelector
        month={month}
        year={year}
        setMonth={setMonth}
        setYear={setYear}
      />
      <DateTable
        clear={clear.filter((item) =>
          item.date.startsWith(`${year}-${zeroPadding(month, 2)}`)
        )}
        year={year}
        month={month}
      />
    </div>
  );
};

export default Calendar;
