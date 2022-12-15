import logo from './images/logopic.svg';
import { useState } from 'react';
import {add2} from './utils/utils';
import './App.css';

function App() {
  let [userNumber,setUserNumber]=useState("");
 
  const acceptInPut=(element)=>{
    setUserNumber(element.target.value);
  }
  console.log(userNumber)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          This is the page for dog lovers
        </h1>
        <h2 className="greeting-h2">Enter a number to square</h2>
        <input
          type="number" 
          id="input-box"
          onChange={acceptInPut}
        />
        <p>result {add2(userNumber)}</p>
      </header>
    </div>
  );
}

export default App;