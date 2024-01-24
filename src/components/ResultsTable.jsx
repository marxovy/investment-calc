import { calculateInvestmentResults, formatter } from "../util/investment";

const ResultsTable = ({ userInput }) => {
  let investmentResults = calculateInvestmentResults(userInput);

  const { format } = formatter;

  const initialInvestment =
    investmentResults[0].valueEndOfYear -
    investmentResults[0].interest -
    investmentResults[0].annualInvestment;

  return (
    <div id="result">
      <table>
        <thead>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </thead>
        <tbody>
          {investmentResults.map((row) => {
            const { year, interest, valueEndOfYear, annualInvestment } = row;

            const totalInterest =
              valueEndOfYear - annualInvestment * year - initialInvestment;

            const investedCapitalTotal = valueEndOfYear - totalInterest;

            return (
              <tr>
                <td>{year}</td>
                <td>{format(valueEndOfYear)}</td>
                <td>{format(interest)}</td>
                <td>{format(totalInterest)}</td>
                <td>{investedCapitalTotal}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
