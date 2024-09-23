import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const countingUp = () => {
    //const count =  counter + 1;
    setCounter(counter + 1);
  };

  const countingDown = () => {
    //const count =  counter + 1;
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      
      <h1>Testing stuff</h1>
      <button onClick={() => countingDown()}>Decrease Number</button>
      <p>{counter}</p>
      <button onClick={() => countingUp()}>Increase Number</button>
    </div>
  );
}

export default App;
