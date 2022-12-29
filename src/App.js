import logo from './images/logopic.svg';
import { useState } from 'react';
import { square } from './utils/utils';
import './App.css';

const App = () => {
  const [number, setNumber] = useState('');

  const acceptInPut = (element) => {
    setNumber(element.target.value);

    console.log(element.target.value);
  };
  const handleClick = (number) => {
    setNumber(number);
  };
  // This will have two titles that menctioned in h1 & h2
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        When a number has been multiplied by itself
        </h1>
        <h2 className="greeting-h2">Type a number to find the square</h2>
        <input
         // Creating a input-box to enter the number
          type="number" 
          id="input-box"
          onChange={acceptInPut}
          value={number}
        />
        <p>Result {square(number)}</p> 
        <button onClick={handleClick}>Clear</button>
  
      </header>
    </div>
  );
}

export default App;