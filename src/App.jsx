import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";

import { useState } from "react";

import "./index.css";

function App() {
  const DEFAULT_INPUT = {
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 6,
    duration: 12,
  };

  const [userInput, setUserInput] = useState(DEFAULT_INPUT);

  const handleInput = (key, value) => {
    setUserInput((userInput) => ({ ...userInput, [key]: +value }));
  };
  return (
    <>
      <Header />
      <UserInput handleInput={handleInput} userInput={userInput} />
      <ResultsTable userInput={userInput} />
    </>
  );
}

export default App;
