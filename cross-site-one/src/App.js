import React, { Component } from 'react';
import logo from './logo.svg';
import { CrossStorageHub } from 'cross-storage'
import './App.css';

const settings = {
  origin: /netlify\.com$/,
  allow: ['get', 'set', 'del', 'getKeys', 'clear']
}

CrossStorageHub.init(settings);

console.log('settings')

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
