import { useState } from "react";

const isDateValidForMonth = (month, date) => {
  const month30 = [4, 6, 9, 11];
  const submittedMonth = parseInt(month);

  if (
    (submittedMonth === 2 && date > 28) ||
    (month30.includes(submittedMonth) && date > 30) ||
    date > 31
  ) {
    return false;
  } else {
    return true;
  }
};

const DateForm = (props) => {
  const { validateDate } = props;
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [date, setDate] = useState();
  const [yearError, setYearError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    validateDate(year, month, date);
  };

  const yearHandler = (e) => {
    setYear(e.target.value);
    if (e.target.value > new Date().getFullYear()) {
      setYearError(true);
    } else {
      setYearError(false);
    }
  };

  const monthHandler = (e) => {
    setMonth(e.target.value);
    if (e.target.value > 12 || e.target.value < 1) {
      setMonthError(true);
    } else {
      setMonthError(false);
      if (!isDateValidForMonth(e.target.value, date)) {
        setDateError(true);
      } else {
        setDateError(false);
      }
    }
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
    if (!isDateValidForMonth(month, e.target.value) || e.target.value < 1) {
      setDateError(true);
    } else {
      setDateError(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="date-input">
        <div className="input-row">
          <label>Year</label>
          <input
            type="number"
            max={new Date().getFullYear()}
            onChange={yearHandler}
          />
          {yearError && <span className="error">Year cannot be in future</span>}
        </div>
        <div className="input-row">
          <label>Month</label>
          <input type="number" min={1} max={12} onChange={monthHandler} />
          {monthError && <span className="error">Must be a valid month</span>}
        </div>
        <div className="input-row">
          <label>Day</label>
          <input type="number" min={1} max={31} onChange={dateHandler} />
          {dateError && <span className="error">Must be a valid date</span>}
        </div>
      </div>
      <button disabled={yearError || monthError || dateError}>Calculate</button>
    </form>
  );
};

export default DateForm;
