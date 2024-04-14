const CountDown = (props) => {
  const { submittedDate, todayDate } = props;

  let remainingMonth;
  let remainingDay;
  let remainingHour;
  let remainingMinute;
  let remainingSecond;

  if (
    submittedDate.getMonth() >= todayDate.getMonth() &&
    submittedDate.getDate() >= todayDate.getDate()
  ) {
    remainingMonth = submittedDate.getMonth() - todayDate.getMonth();
    remainingDay = submittedDate.getDate() - todayDate.getDate() - 1;
    remainingHour = 24 - todayDate.getHours() - 1;
    remainingMinute = 60 - todayDate.getMinutes() - 1;
    remainingSecond = 60 - todayDate.getSeconds();
  } else {
    remainingMonth = 12 + submittedDate.getMonth() - todayDate.getMonth() - 1;
    remainingDay = 30 + submittedDate.getDate() - submittedDate.getDate() - 1;
    remainingHour = 24 - todayDate.getHours();
    remainingMinute = 60 - todayDate.getMinutes();
    remainingSecond = 60 - todayDate.getSeconds();
  }

  console.log(
    remainingMonth,
    remainingDay,
    remainingHour,
    remainingMinute,
    remainingSecond
  );

  return <></>;
};

export default CountDown;
