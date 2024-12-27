import React, { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1); // Default step is set to 1
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + step);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container text-center mt-5">
          <div className="row">
            <div className="col-12">
              <h1>Count Down/Up</h1>
              <p className="fs-3">Current Count: {count}</p>
              <div className="mb-3">
                <label htmlFor="stepInput" className="form-label">
                  Step Value:
                </label>
                <input
                  id="stepInput"
                  type="number"
                  value={step}
                  onChange={(e) => setStep(Number(e.target.value) || 1)}
                  className="form-control w-25 mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <button
              className="col-2 m-3 btn btn-dark"
              onClick={handleIncrement}
            >
              Increment
            </button>
            <button
              className="col-2 m-3 btn btn-dark"
              onClick={handleDecrement}
            >
              Decrement
            </button>
            <button className="col-2 m-3 btn btn-danger" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
