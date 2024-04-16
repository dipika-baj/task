import { useEffect, useState } from "react";
import DateForm from "../resuable/dateForm/dateForm";
import CountDown from "./countdown/countdown";
import Card from "../resuable/card/card";

const NextBirthday = () => {
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

  const validateDate = (year, month, date) => {
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
      <h2>Next Birthday</h2>
      <DateForm validateDate={validateDate} />
      {isDateValid.status ? (
        <CountDown submittedDate={submittedDate} todayDate={todayDate} />
      ) : (
        <p className="error">{isDateValid.message}</p>
      )}
    </Card>
  );
};
export default NextBirthday;
