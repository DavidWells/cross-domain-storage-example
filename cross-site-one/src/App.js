import React, { Component } from 'react';
import logo from './logo.svg';
import { CrossStorageHub } from 'cross-storage'
import './App.css';

CrossStorageHub.init([
  {origin: /localhost:3000$/, allow: ['get', 'set', 'del', 'getKeys', 'clear']}
]);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Site one
          </p>
        </header>
      </div>
    );
  }
}

export default App;
