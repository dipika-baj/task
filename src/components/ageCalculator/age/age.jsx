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
    <div className="result">
      <p>
        <span>{yearAge}</span> Years
      </p>
      <p>
        <span>{monthAge}</span> Months
      </p>
      <p>
        <span>{dateAge}</span> Days
      </p>
      <p>
        <span>{todayDate.getHours()}</span> Hours
      </p>
      <p>
        <span>{todayDate.getMinutes()}</span> Minutes
      </p>
      <p>
        <span>{todayDate.getSeconds()}</span> Seconds
      </p>
    </div>
  );
};
export default Age;
