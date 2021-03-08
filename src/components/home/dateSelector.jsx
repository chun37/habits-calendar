import React from "react";
import { dateToString, stringToDate } from "../utils";

const DateSelector = (props) => {
  const { dateString, onChangeDate } = props;

  const shiftTomorrow = () => {
    const selectedDate = stringToDate(dateString);
    const tomorrow = new Date(selectedDate.getTime());
    tomorrow.setDate(selectedDate.getDate() + 1);
    onChangeDate(dateToString(tomorrow));
  };

  const shiftYesterday = () => {
    const selectedDate = stringToDate(dateString);
    const tomorrow = new Date(selectedDate.getTime());
    tomorrow.setDate(selectedDate.getDate() - 1);
    onChangeDate(dateToString(tomorrow));
  };

  return (
    <div>
      <button type="button" onClick={shiftYesterday}>
        昨日
      </button>
      <input
        type="date"
        value={dateString}
        onChange={(event) => onChangeDate(event.target.value)}
      />
      <button type="button" onClick={shiftTomorrow}>
        明日
      </button>
    </div>
  );
};

export default DateSelector;
