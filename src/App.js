import logo from './images/logopic.svg';
import { useState } from 'react';
import { square2 } from './utils/utils';
import './App.css';

const App = () => {
  const [Number, setNumber] = useState('');

  const acceptInPut = (element) => {
    setNumber(element.target.value);

    console.log(element.target.value);
  };
  const handleClick = (Number) => {
    setNumber(Number);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        When a number has been multiplied by itself
        </h1>
        <h2 className="greeting-h2">Type a number to find the square</h2>
        <input
          type="number" 
          id="input-box"
          onChange={acceptInPut}
          value={Number}
        />
        <p>Result {square2(Number)}</p> 
        <button onClick={handleClick}>Clear</button>

      </header>
    </div>
  );
}

export default App;