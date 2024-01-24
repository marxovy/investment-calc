const UserInput = ({ handleInput, userInput }) => {
  return (
    <div>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="">Initital Investment</label>
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(e) => handleInput("initialInvestment", e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="">Annual Investment</label>
            <input
              type="number"
              value={userInput.annualInvestment}
              onChange={(e) => handleInput("annualInvestment", e.target.value)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="">Expected Return</label>
            <input
              type="number"
              value={userInput.expectedReturn}
              onChange={(e) => handleInput("expectedReturn", e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="">Duration</label>
            <input
              type="number"
              value={userInput.duration}
              onChange={(e) => handleInput("duration", e.target.value)}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
