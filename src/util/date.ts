export const setDate = (getDate: Date) => {
  const getHour = getDate.getHours();
  const getMinute = getDate.getMinutes();
  const getSecond = getDate.getSeconds();
  const getYear = getDate.getFullYear();

  const morningTime =
    (getHour > 6 || (getHour === 6 && getMinute >= 0)) &&
    (getHour < 9 || (getHour === 9 && getMinute < 1));
  const lunchTime =
    (getHour > 11 || (getHour === 11 && getMinute >= 0)) &&
    (getHour < 14 || (getHour === 14 && getMinute < 1));
  const dinnerTime =
    (getHour > 17 || (getHour === 17 && getMinute >= 0)) &&
    (getHour < 20 || (getHour === 20 && getMinute < 1));
  if (morningTime) {
    return "아침";
  } else if (lunchTime) {
    return "점심";
  } else if (dinnerTime) {
    return "저녁";
  } else {
    return "간식...?";
  }
};
