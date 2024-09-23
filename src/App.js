import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const countingUp = () => {
    setCounter((count) => count + 1);
  };

  const countingDown = () => {
    setCounter((count) => count - 1);
  };

  return (
    <div className="App">
      <h1>Testing stuff</h1>
      <button onClick={countingDown}>Decrease Number</button>
      <p>{counter}</p>
      <button onClick={() => countingUp()}>Increase Number</button>
    </div>
  );
}

export default App;
