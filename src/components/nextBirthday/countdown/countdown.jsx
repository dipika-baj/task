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
    console.log("month and day have not passed ");
    if (remainingDay + 30 > 30) {
      remainingMonth = submittedDate.getMonth() - todayDate.getMonth();
    }
  }

  //month has not passed but day has
  if (
    submittedDate.getMonth() > todayDate.getMonth() &&
    submittedDate.getDate() <= todayDate.getDate()
  ) {
    console.log("month has not passed but day has");
    remainingDay += 30;
  }

  //month has  passed but day has not
  if (
    submittedDate.getMonth() < todayDate.getMonth() &&
    submittedDate.getDate() > todayDate.getDate()
  ) {
    console.log("month has  passed but day has not");
    remainingMonth = submittedDate.getMonth() - todayDate.getMonth() + 12;
  }

  //month and day both has passed
  if (
    submittedDate.getMonth() < todayDate.getMonth() &&
    submittedDate.getDate() <= todayDate.getDate()
  ) {
    console.log("month and day both has passed");
    remainingMonth += 12;
    remainingDay += 30;
  }

  //same month day has not passed
  if (
    submittedDate.getMonth() === todayDate.getMonth() &&
    submittedDate.getDate() > todayDate.getDate()
  ) {
    console.log("same month day has not passed");
    remainingMonth = submittedDate.getMonth() - todayDate.getMonth();
  }

  //same month day has  passed
  if (
    submittedDate.getMonth() === todayDate.getMonth() &&
    submittedDate.getDate() <= todayDate.getDate()
  ) {
    console.log("same month day has passed");
    remainingMonth += 12;
    remainingDay += 30;
  }

  return (
    <div className="result">
      <p>
        <span>{remainingMonth}</span> Months
      </p>
      <p>
        <span>{remainingDay}</span> Days
      </p>
      <p>
        <span>{remainingHour}</span> Hours
      </p>
      <p>
        <span>{remainingMinute}</span> Minutes
      </p>
      <p>
        <span>{remainingSecond}</span> Seconds
      </p>
    </div>
  );
};

export default CountDown;
