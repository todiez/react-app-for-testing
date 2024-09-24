import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  //if the state changes, the site will be re rendered
  //if initial state value is hard coded or invokes (calls) a function then it will be run everytime the component is rendered
  //if initial state value is a function version, it will be run just the first time the component is rendered (useful if heavy cpu load)
  //example function version: useState(() => countInital())

  const countingUp = () => {
    setCounter((count) => count + 1);
    // count + 1 --> works as well, but only if invoked once in this arrow function
    // if invoked twice it will be fired only once, with the function it will be fired twice
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
