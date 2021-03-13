import React from "react";

const MonthSelector = (props) => {
  const { setYear, setMonth, year, month } = props;
  const shiftNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
      return;
    }
    setMonth(month + 1);
  };
  const shiftLastMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
      return;
    }
    setMonth(month - 1);
  };

  return (
    <div>
      <button type="button" onClick={shiftLastMonth}>
        先月
      </button>
      {year}/{month}
      <button type="button" onClick={shiftNextMonth}>
        来月
      </button>
    </div>
  );
};

export default MonthSelector;
