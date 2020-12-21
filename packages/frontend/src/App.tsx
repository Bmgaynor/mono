import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getSomeValue } from '@mono/lib'
import { Button } from '@mono/components'

function App() {
  console.log(getSomeValue())
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button label="blah" />
      </header>
    </div>
  );
}

export default App;
