import React, { useState } from "react";

export default function Money() {
  const [money, updateMoney] = useState({ r: 0, d: 0 });

  const updateRupees = (e) =>
    updateMoney({
      d: e.target.value,
      r: (+e.target.value * 70).toFixed(2),
    });

  const updateDollars = (e) =>
    updateMoney({
      d: (+e.target.value / 70).toFixed(2),
      r: e.target.value,
    });

  return (
    <div id="container">
      <h1>Money Converter</h1>
      <div id="box1">
        <h2>US Dollars</h2>
        <input type="number" value={money.d} onChange={updateRupees}></input>
      </div>
      <div id="box2">
        <h2>IN Rupees</h2>
        <input type="number" value={money.r} onChange={updateDollars}></input>
      </div>
    </div>
  );
}
