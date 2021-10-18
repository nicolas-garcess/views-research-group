export const parseDate = (date) => {
  const newDate = new Date(date);
  const parsedDate = newDate.toISOString().split('T')[0];
  return parsedDate;
};
