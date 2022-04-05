import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>.NET LAB Experiment 1</h1>
        <p>Click on Navigation Bar to view the tools:</p>
        <ul>
          <li><strong>Factorial</strong>. Calculate factorial of a number</li>
          <li><strong>Money</strong>. Convert USD to INR (and vice versa)</li>
          <li><strong>Quadratic</strong>. Calculate roots of a quadratic equation</li>
          <li><strong>Temperature</strong>. Convert Celsius to Fahrenheit (and vice versa)</li>
          <li><strong>Login</strong>. Login to the dashboard</li>
        </ul>
        <p>Submitted by:</p>
        <ul>
          <li><strong>Name: </strong>Nilesh Das</li>
          <li><strong>Roll No: </strong>18118043</li>
          <li><strong>Institute: </strong>NIT Raipur</li>
        </ul>
        <p>This single-page application is built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
      </div>
    );
  }
}
