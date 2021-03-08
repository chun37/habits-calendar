const dateToString = (date) => {
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
};

const stringToDate = (dateString) => {
  const [year, month, day] = dateString
    .split("-")
    .map((num) => parseInt(num, 10));
  return new Date(year, month - 1, day);
};

export { dateToString, stringToDate };
