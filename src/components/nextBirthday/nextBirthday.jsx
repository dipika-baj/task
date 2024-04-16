import { useEffect, useState } from "react";
import DateForm from "../resuable/dateForm/dateForm";
import CountDown from "./countdown/countdown";
import Card from "../resuable/card/card";

const NextBirthday = () => {
  const [submittedDate, setSubmittedDate] = useState();
  const [todayDate, setTodayDate] = useState(new Date());
  const [isDateValid, setIsDateValid] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setTodayDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const validateDate = (year, month, date) => {
    if (year && month && date) {
      let newDate = new Date(`${year}-${month}-${date}`);

      if (newDate > todayDate) {
        setIsDateValid(false);
        alert("Date is in future");
      } else {
        setIsDateValid(true);
        setSubmittedDate(newDate);
      }
    }
  };

  return (
    <Card>
      <h2>Next Birthday</h2>
      <DateForm validateDate={validateDate} />
      {isDateValid && (
        <CountDown submittedDate={submittedDate} todayDate={todayDate} />
      )}
    </Card>
  );
};
export default NextBirthday;
