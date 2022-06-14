const getTodayDateFormated = () => {
  const dateToday = new Date();
  const currentDay = dateToday.getDate();
  const currentMonth = dateToday.toLocaleString('en-US', { month: 'short' });
  const currentYear = dateToday.getFullYear();
  return (todayData = `${currentMonth} ${currentDay}, ${currentYear}`);
};

module.exports = {
  getTodayDateFormated,
};
