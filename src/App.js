import React from 'react';
import logo from './logo.svg';
import './App.css';
import MFF from './MyFirstFunction';
import {DefaultUserName} from './MyFirstFunction'
import MFC from './MyFirstClass'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>{DefaultUserName}</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      
        </a>
        <MFF name='user' age= '26' />
      </header>
      <MFC />
    </div>
  );
}

export default App;
