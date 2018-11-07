import React, { Component } from 'react';
import logo from './logo.svg';
import { CrossStorageClient } from 'cross-storage'
import { CrossStorageHub } from 'cross-storage'
import './App.css';

const storage = new CrossStorageClient('https://optimistic-cori-16008f.netlify.com/');

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
            Site two
          </p>
        </header>
      </div>
    );
  }
}

export default App;
