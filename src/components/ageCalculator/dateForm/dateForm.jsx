import { useState } from "react";

const DateForm = (props) => {
  const { setYear, setMonth, setDate, onSubmit } = props;

  const [yearError, setYearError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const yearHandler = (e) => {
    if (e.target.value > new Date().getFullYear()) {
      setYearError(true);
    } else {
      setYearError(false);
      setYear(e.target.value);
    }
  };

  const monthHandler = (e) => {
    if (e.target.value > 12) {
      setMonthError(true);
    } else {
      setMonthError(false);
      setMonth(e.target.value);
    }
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
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
      <input type="submit" value={"Calculate"} />
    </form>
  );
};

export default DateForm;
