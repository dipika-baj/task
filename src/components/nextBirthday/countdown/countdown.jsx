const CountDown = (props) => {
  const { submittedDate, todayDate } = props;

  let upcomingBirthday = new Date(submittedDate);

  upcomingBirthday.setFullYear(new Date().getFullYear());

  if (upcomingBirthday <= todayDate) {
    upcomingBirthday.setFullYear(new Date().getFullYear() + 1);
  }

  let remainingMonth = submittedDate.getMonth() - todayDate.getMonth() - 1;
  let remainingDay = submittedDate.getDate() - todayDate.getDate() - 1;
  let remainingHour = 24 - todayDate.getHours() - 1;
  let remainingMinute = 60 - todayDate.getMinutes() - 1;
  let remainingSecond = 60 - todayDate.getSeconds();

  //month and day have not passed
  if (
    submittedDate.getMonth() > todayDate.getMonth() &&
    submittedDate.getDate() > todayDate.getDate()
  ) {
    if (remainingDay + 30 > 30) {
      remainingMonth = submittedDate.getMonth() - todayDate.getMonth();
    }
  }

  //month has not passed but day has
  if (
    submittedDate.getMonth() > todayDate.getMonth() &&
    submittedDate.getDate() <= todayDate.getDate()
  ) {
    remainingDay += 30;
  }

  //month has  passed but day has not
  if (
    submittedDate.getMonth() < todayDate.getMonth() &&
    submittedDate.getDate() > todayDate.getDate()
  ) {
    remainingMonth = submittedDate.getMonth() - todayDate.getMonth() + 12;
  }

  //month and day both has passed
  if (
    submittedDate.getMonth() < todayDate.getMonth() &&
    submittedDate.getDate() <= todayDate.getDate()
  ) {
    remainingMonth += 12;
    remainingDay += 30;
  }

  //same month day has not passed
  if (
    submittedDate.getMonth() === todayDate.getMonth() &&
    submittedDate.getDate() > todayDate.getDate()
  ) {
    remainingMonth = submittedDate.getMonth() - todayDate.getMonth();
  }

  //same month day has  passed
  if (
    submittedDate.getMonth() === todayDate.getMonth() &&
    submittedDate.getDate() <= todayDate.getDate()
  ) {
    remainingMonth += 12;
    remainingDay += 30;
  }

  return (
    <div>
      <p className="result">
        Your next Birthday is on {upcomingBirthday.toDateString()}
      </p>
      <p className="result">
        <span>{remainingMonth}</span> Months&nbsp;
        <span>{remainingDay}</span> Days&nbsp;
        <span>{remainingHour}</span> Hours&nbsp;
        <span>{remainingMinute}</span> Minutes&nbsp;
        <span>{remainingSecond}</span> Seconds&nbsp;
      </p>
    </div>
  );
};

export default CountDown;
