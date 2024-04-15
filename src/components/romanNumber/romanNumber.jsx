import { useState } from "react";
import Card from "../resuable/card/card";

const RomanNumber = () => {
  const [romanNumberArray, setRomanNumberArray] = useState([]);
  const [result, setResult] = useState(0);
  const [isInputValid, setIsInputValid] = useState(true);
  const roman = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };

  const inputHandler = (e) => {
    setIsInputValid(true);
    const validInput = Object.keys(roman);
    const romanNumber = e.target.value.toLowerCase().split("");
    romanNumber.forEach((number) => {
      if (!validInput.includes(number)) {
        setIsInputValid(false);
      }
    });

    if (isInputValid) {
      setRomanNumberArray(romanNumber);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let number = 0;
    let skipIndex;

    for (let i = 0; i < romanNumberArray.length; i++) {
      if (i === skipIndex + 1) {
        continue;
      }
      let value = 0;
      if (roman[romanNumberArray[i]] < roman[romanNumberArray[i + 1]]) {
        value = roman[romanNumberArray[i + 1]] - roman[romanNumberArray[i]];
        skipIndex = i;
      } else {
        value = roman[romanNumberArray[i]];
      }
      number += value;
    }
    setResult(number);
  };

  return (
    <Card>
      <h2>Roman To Number</h2>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputHandler} placeholder="Roman Number" />
        {!isInputValid && <p className="error">Invalid Input</p>}
        <button>Submit</button>
      </form>
      {!!result && (
        <div className="result">
          Result : <span>{result}</span>
        </div>
      )}
    </Card>
  );
};
export default RomanNumber;
