import React, { Component } from 'react';
import logo from './logo.svg';
import { CrossStorageClient } from 'cross-storage'
import { CrossStorageHub } from 'cross-storage'
import createGuest from 'cross-domain-storage/guest'
import './App.css';

const storage = new CrossStorageClient('https://optimistic-cori-16008f.netlify.com');
// Hosted on http://www.foo.com

console.log('storage', storage)
console.log('process.env.REACT_APP_SECRET_CODE', process.env.REACT_APP_SECRET_CODE)

storage.onConnect().then(() => {
  return storage.set('newKey', 'foobar');
}).then(() =>  {
  return storage.get('existingKey', 'newKey');
}).then((res) =>  {
  console.log(res.length); // 2
}).catch((err) => {
  // Handle error
  console.log('err', err)
});

window.tester = storage
//
// const bazStorage = createGuest('https://optimistic-cori-16008f.netlify.com');
//
// bazStorage.get('fizz', function(error, value) {
//   if (error) {
//     console.log('get error', error)
//   }
//   console.log('fizz value is', value)
// });
//
// bazStorage.set('secondlib', 'yes', function(error, data) {
//   if (error) {
//     console.log('set error', error)
//   }
//   console.log('set data', data)
//   bazStorage.get('secondlib', function(error, value) {
//     if (error) {
//       console.log('secondlib error', error)
//     }
//     console.log('secondlib value is', value)
//   });
// });
//
//
// window.onload = function() {
// 	// Get a reference to the <div> on the page that will display the
// 	// message text.
// 	var messageEle = document.getElementById('message');
//
// 	// A function to process messages received by the window.
// 	function receiveMessage(e) {
// 		// Check to make sure that this message came from the correct domain.
// 		if (e.origin !== "http://s.codepen.io")
// 			return;
//
// 		// Update the div element to display the message.
// 		messageEle.innerHTML = "Message Received: " + e.data;
// 	}
//
// 	// Setup an event listener that calls receiveMessage() when the window
// 	// receives a new MessageEvent.
// 	window.addEventListener('message', receiveMessage);
// }

class App extends Component {
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
