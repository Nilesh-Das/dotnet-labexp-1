import React, { useState } from "react";

export default function Factorial() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState("Click Calculate!");

  function factorial() {
    if (num < 0) {
      setResult("Value should be whole number!");
      return;
    }

    if (num === 0 || num === 1) {
      setResult(1);
      return;
    }

    let fatorial = num;
    const M = num - 1;
    for (var i = M; i > 1; i--) {
      fatorial = fatorial * i;
    }
    setResult(fatorial);
  }

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    factorial();
  };

  return (
    <>
      <h1>Factorial</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" value={num} onChange={handleChange} />
        <button type="submit">Calculate</button>
      </form>
      <h2>Result:</h2>
      <p>{result ? result : ""}</p>
    </>
  );
}
