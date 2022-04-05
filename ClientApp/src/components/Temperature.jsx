import React, { useState } from "react";

export default function Temperature() {
  const [temp, updateTemp] = useState({ f: 32, c: 0 });

  const updateC = (e) =>
    updateTemp({
      c: e.target.value,
      f: ((+e.target.value * 9) / 5 + 32).toFixed(2),
    });

  const updateF = (e) =>
    updateTemp({
      c: (((+e.target.value - 32) * 5) / 9).toFixed(2),
      f: e.target.value,
    });

  return (
    <div id="container">
      <h1>Temperature Converter</h1>
      <div id="box1">
        <h2>Celsius</h2>
        <input type="number" value={temp.c} onChange={updateC}></input>
      </div>
      <div id="box2">
        <h2>Fahrenheit</h2>
        <input type="number" value={temp.f} onChange={updateF}></input>
      </div>
    </div>
  );
}
