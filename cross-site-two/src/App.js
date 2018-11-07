import React, { Component } from 'react';
import logo from './logo.svg';
import { CrossStorageClient } from 'cross-storage'
import { CrossStorageHub } from 'cross-storage'
import './App.css';

const storage = new CrossStorageClient('https://store.example.com/hub.html');

console.log('storage', storage)
console.log('process.env.REACT_APP_SECRET_CODE', process.env.REACT_APP_SECRET_CODE)

storage.onConnect().then(function() {
  return storage.set('newKey', 'foobar');
}).then(function() {
  return storage.get('existingKey', 'newKey');
}).then(function(res) {
  console.log(res.length); // 2
}).catch(function(err) {
  // Handle error
  console.log('err', err)
});

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
