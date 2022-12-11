import logo from './images/logopic.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          This is the page for dog lovers
        </h1>
        <h2 className="greeting-h2">Welcome</h2>
        <h3>to my page</h3>
      </header>
    </div>
  );
}

export default App;