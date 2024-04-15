import { useEffect, useState } from "react";
import DateForm from "../resuable/dateForm/dateForm";
import CountDown from "./countdown/countdown";
import Card from "../resuable/card/card";

const NextBirthday = () => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [date, setDate] = useState();
  const [submittedDate, setSubmittedDate] = useState();
  const [todayDate, setTodayDate] = useState(new Date());
  const [isDateValid, setIsDateValid] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setTodayDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

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
      <DateForm
        setYear={setYear}
        setMonth={setMonth}
        setDate={setDate}
        onSubmit={onSubmit}
      />
      {isDateValid && (
        <CountDown submittedDate={submittedDate} todayDate={todayDate} />
      )}
    </Card>
  );
};
export default NextBirthday;
