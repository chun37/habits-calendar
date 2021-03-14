import React from "react";
import { zeroPadding, range, chunk } from "../utils";

const DateCell = (props) => {
  const { date, isClear, grayOut } = props;
  if (grayOut) {
    return <div className="calendar-day gray">{date}</div>;
  }
  const className = isClear ? "calendar-day clear" : "calendar-day";
  return <div className={className}>{date}</div>;
};
const WeekCell = (props) => {
  const { children } = props;
  return <div className="calendar-week">{children}</div>;
};

const DateTable = (props) => {
  const { year, month, clear } = props;
  const lastDay = new Date(year, month, 0).getDate();
  const startWeekDay = new Date(year, month - 1, 1).getDay();
  const fillDay = 42 - startWeekDay - lastDay;
  const shortFillDay = fillDay >= 7 ? fillDay - 7 : fillDay;
  const lastMonthLastDay = new Date(year, month - 1, 0).getDate();

  const isClear = (date) =>
    clear.some(
      (item) =>
        item.date ===
        [year, zeroPadding(month, 2), zeroPadding(date, 2)].join("-")
    );

  const tableArray = [
    ...range(
      lastMonthLastDay - startWeekDay + 1,
      lastMonthLastDay + 1
    ).map((date) => (
      <DateCell key={[year, month - 1, date].join("-")} date={date} grayOut />
    )),
    ...range(1, lastDay + 1).map((date) => (
      <DateCell
        key={[year, month, date].join("-")}
        date={date}
        isClear={isClear(date)}
        grayOut={false}
      />
    )),
    ...range(1, shortFillDay + 1).map((date) => (
      <DateCell key={[year, month + 1, date].join("-")} date={date} grayOut />
    )),
  ];
  return (
    <div>
      {chunk(tableArray, 7).map((week, index) => (
        <WeekCell key={[year, month, index].join("-")}>{week}</WeekCell>
      ))}
    </div>
  );
};

export default DateTable;
