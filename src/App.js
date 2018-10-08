import React, { Component } from 'react';

import Calculator from './Calculator/Calculator';
import logo from './img/ee-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img width="200" src={logo} alt="[=] Equal Experts" />
        </header>

        <Calculator />
      </div>
    );
  }
}

export default App;
