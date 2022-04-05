import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import Quadratic from './components/Quadratic.jsx';
import Temperature from './components/Temperature.jsx';
import Factorial from './components/Factorial.jsx';
import Money from './components/Money.jsx';
import Login from './components/Login.jsx';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/quadratic' component={Quadratic} />
        <Route path='/factorial' component={Factorial} />
        <Route path='/temperature' component={Temperature} />
        <Route path='/money' component={Money} />
        <Route path='/login' component={Login} />
      </Layout>
    );
  }
}
