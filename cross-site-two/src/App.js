import React, { Component } from 'react';
import logo from './logo.svg';
import { CrossStorageClient } from 'cross-storage'
import createGuest from 'cross-domain-storage/guest'
import './App.css';

const source = 'https://cross-site-storage-source.netlify.com'
const sourceTarget = `${source}/`
console.log('sourceTarget', sourceTarget)
const storage = new CrossStorageClient(sourceTarget)

console.log('storage', storage)
storage.onConnect().then(() =>  {
  return storage.get('existingKey', 'newKey');
}).then((res) =>  {
  console.log('res', res)
  console.log(res.length); // 2
}).catch((err) => {
  // Handle error
  console.log('err', err)
})

window.storage = storage

class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Site two - client
          </p>
        </header>
      </div>
    );
  }
}

export default App;
