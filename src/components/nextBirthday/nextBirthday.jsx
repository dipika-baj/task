import { useEffect, useState } from "react";
import DateForm from "../nextBirthday/dateForm/dateForm";
import "./nextBirthday.css";
import CountDown from "./countdown/countdown";

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
    <div className="next-birthday">
      <DateForm
        setYear={setYear}
        setMonth={setMonth}
        setDate={setDate}
        onSubmit={onSubmit}
      />
      {isDateValid && (
        <CountDown submittedDate={submittedDate} todayDate={todayDate} />
      )}
    </div>
  );
};
export default NextBirthday;
