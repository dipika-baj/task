const Age = (props) => {
  const { submittedDate, todayDate } = props;

  let yearAge = todayDate.getFullYear() - submittedDate.getFullYear();
  let monthAge = todayDate.getMonth() - submittedDate.getMonth();
  let dateAge = todayDate.getDate() - submittedDate.getDate();

  //checks if submitted month and date has passed
  if (
    todayDate.getMonth() < submittedDate.getMonth() ||
    (todayDate.getMonth() === submittedDate.getMonth() &&
      todayDate.getDate() < submittedDate.getDate())
  ) {
    yearAge--;
    monthAge += 12;
  }

  //checks if submitted date has passed
  if (todayDate.getDate() < submittedDate.getDate()) {
    monthAge--;
    dateAge += 31;
  }

  return (
    <p className="result">
      <span>{yearAge}</span> Years&nbsp;
      <span>{monthAge}</span> Months&nbsp;
      <span>{dateAge}</span> Days&nbsp;
      <span>{todayDate.getHours()}</span> Hours&nbsp;
      <span>{todayDate.getMinutes()}</span> Minutes&nbsp;
      <span>{todayDate.getSeconds()}</span> Seconds&nbsp;
    </p>
  );
};
export default Age;
