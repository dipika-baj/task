import "./App.css";
import AgeCalculator from "./components/ageCalculator/ageCalculator";
import NextBirthday from "./components/nextBirthday/nextBirthday";
import RomanNumber from "./components/romanNumber/romanNumber";

function App() {
  return (
    <>
      <RomanNumber />
      <AgeCalculator />
      <NextBirthday />
    </>
  );
}

export default App;
