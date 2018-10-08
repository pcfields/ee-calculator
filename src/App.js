import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';
import logo from './img/ee-logo.svg';

class App extends Component {
  render() {
    return (
      <Calculator branding={logo} />
    );
  }
}

export default App;
