import { useEffect, useState } from "react";
import Age from "./age/age";
import DateForm from "../resuable/dateForm/dateForm";
import Card from "../resuable/card/card";

const AgeCalculator = () => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [date, setDate] = useState();
  const [submittedDate, setSubmittedDate] = useState();
  const [todayDate, setTodayDate] = useState(new Date());
  const [isDateValid, setIsDateValid] = useState({
    status: false,
    message: "",
  });

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
        setIsDateValid({
          status: false,
          message: "Date is in future",
        });
      } else {
        setIsDateValid({
          status: true,
          message: "",
        });
        setSubmittedDate(newDate);
      }
    } else {
      setIsDateValid({
        status: false,
        message: "Please enter all fields",
      });
    }
  };

  return (
    <Card>
      <h2> Age Calculator</h2>
      <DateForm
        month={month}
        setYear={setYear}
        setMonth={setMonth}
        setDate={setDate}
        onSubmit={onSubmit}
      />
      {!!isDateValid.status ? (
        <Age submittedDate={submittedDate} todayDate={todayDate} />
      ) : (
        <p className="error">{isDateValid.message}</p>
      )}
    </Card>
  );
};
export default AgeCalculator;
