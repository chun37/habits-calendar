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

const zeroPadding = (int, maxLength) => String(int).padStart(maxLength, "0");

const range = (start, end) =>
  Array(end - start)
    .fill(0)
    .map((_, index) => start + index);

const chunk = (arr, size) =>
  arr.reduce(
    (newarr, _, i) => (i % size ? newarr : [...newarr, arr.slice(i, i + size)]),
    []
  );
export { dateToString, stringToDate, zeroPadding, range, chunk };
