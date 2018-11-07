import React, { Component } from 'react';
import logo from './logo.svg';
import { CrossStorageHub } from 'cross-storage'
import createHost from 'cross-domain-storage/host'
import './App.css';

const settings = {
  origin: /awesome-lamport-41d333.netlify.com/,
  allow: ['get', 'set', 'del']
}

CrossStorageHub.init(settings);

console.log('settings', settings)
//
// var storageHost = createHost([
//   {
//     origin: 'https://awesome-lamport-41d333.netlify.com',
//     allowedMethods: ['get', 'set', 'remove']
//   },
//   {
//     origin: 'http://www.bar.com',
//     allowedMethods: ['get']
//   }
// ]);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Site one - host
          </p>
        </header>
      </div>
    );
  }
}

export default App;
