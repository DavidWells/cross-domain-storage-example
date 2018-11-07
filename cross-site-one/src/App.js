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
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
