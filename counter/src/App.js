import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter <= 0) {
    alert ("lets stay positive");
    }
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <h1>Hello Techtonica</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div className="counterButton">
        <p>{counter}</p>
        <button onClick={increment}>add</button>
        <button onClick={decrement}>minus</button>
        <button onClick={reset}>reset</button>
      </div>
      <div></div>
    </div>
  );
}

export default App;
