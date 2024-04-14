import { useState } from "react";

const DateForm = () => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();

  const formSubmit = (e) => {
    e.preventDefault();
    const submittedDate = new Date(year + "-" + month + "-" + day);
    const todayDate = new Date();

    if (submittedDate > todayDate) {
      alert("Date is in future");
    }

    let yearAge = todayDate.getFullYear() - submittedDate.getFullYear();
    let monthAge = todayDate.getMonth() - submittedDate.getMonth();
    let dateAge = todayDate.getDate() - submittedDate.getDate();

    if (
      todayDate.getMonth() < submittedDate.getMonth() ||
      (todayDate.getMonth() === submittedDate.getMonth() &&
        todayDate.getDate() < submittedDate.getDate())
    ) {
      yearAge--;
      monthAge += 12;
    }

    if (todayDate.getDate() < submittedDate.getDate()) {
      monthAge--;
      dateAge += 31;
    }

    console.log(yearAge, monthAge, dateAge);
  };

  return (
    <form onSubmit={formSubmit}>
      <input
        type="number"
        max={new Date().getFullYear()}
        onChange={(e) => setYear(e.target.value)}
      />
      <label>Year</label>
      <input
        type="number"
        min={1}
        max={12}
        onChange={(e) => setMonth(e.target.value)}
      />
      <label>Month</label>
      <input
        type="number"
        min={1}
        max={31}
        onChange={(e) => setDay(e.target.value)}
      />
      <label>Day</label>
      <input type="submit" value={"Submit"} />
    </form>
  );
};

export default DateForm;
