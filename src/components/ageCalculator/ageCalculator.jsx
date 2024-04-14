import { useEffect, useState } from "react";
import Age from "./age/age";
import DateForm from "./dateForm/dateForm";
import "./ageCalculator.css";

const AgeCalculator = () => {
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
    <div className="age-calculator">
      <DateForm
        setYear={setYear}
        setMonth={setMonth}
        setDate={setDate}
        onSubmit={onSubmit}
      />
      {!!isDateValid && (
        <Age submittedDate={submittedDate} todayDate={todayDate} />
      )}
    </div>
  );
};
export default AgeCalculator;
