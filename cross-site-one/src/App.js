import React, { Component } from 'react';
import logo from './logo.svg';
import { CrossStorageHub } from 'cross-storage'
import createHost from 'cross-domain-storage/host'
import './App.css';

CrossStorageHub.init([
  {origin: /cross-site-storage-remote.netlify.com/, allow: ['get', 'set']},
  {origin: /127.0.0.1/, allow: ['get']},
  {origin: /localhost/, allow: ['get']}
]);

console.log('CrossStorageHub init')

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
