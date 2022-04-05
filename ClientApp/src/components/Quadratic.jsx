import React, { useState } from "react";

export default function Quadratic() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState("Click Calculate!");

  const updateA = (e) => {
    setA(e.target.value);
  };

  const updateB = (e) => {
    setB(e.target.value);
  };

  const updateC = (e) => {
    setC(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const root1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    const root2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    setResult(`root1 = ${root1}, root2 = ${root2}`);
  };

  return (
    <>
      <h1>Quadratic Equation</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Coefficient:
          <input type="number" value={a} onChange={updateA} />
        </label>
        <br />
        <label>
          Second Coefficient:
          <input type="number" value={b} onChange={updateB} />
        </label>
        <br />
        <label>
          Third Coefficient:
          <input type="number" value={c} onChange={updateC} />
        </label>
        <br /> <br />
        <button type="submit">Calculate Roots</button>
      </form>
      <h2>Result:</h2>
      <p>{result ? result : ""}</p>
    </>
  );
}
