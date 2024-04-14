const CountDown = (props) => {
  const { submittedDate, todayDate } = props;
  let upcomingBirthday = new Date(submittedDate);

  upcomingBirthday.setFullYear(new Date().getFullYear());

  if (upcomingBirthday <= todayDate) {
    upcomingBirthday.setFullYear(new Date().getFullYear() + 1);
  }

  let remainingMonth = upcomingBirthday.getMonth() - todayDate.getMonth();
  console.log(remainingMonth);

  // let remainingMonth = submittedDate.getMonth() - todayDate.getMonth();
  // let remainingDay = submittedDate.getDate() - todayDate.getDate() - 1;
  // let remainingHour = 24 - todayDate.getHours();
  // let remainingMinute = 60 - todayDate.getMinutes();
  // let remainingSecond = 60 - todayDate.getSeconds();

  // if (submittedDate.getMonth() > todayDate.getMonth()) {
  //   remainingMonth--;
  //   remainingDay += 30;
  //   remainingHour--;
  //   remainingMinute--;
  // }

  // console.log(
  //   remainingMonth,
  //   remainingDay,
  //   remainingHour,
  //   remainingMinute,
  //   remainingSecond
  // );

  return <></>;
};

export default CountDown;
