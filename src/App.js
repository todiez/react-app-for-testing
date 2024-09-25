import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Tobi");
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

  useEffect(() => {
    //use effect is a hook that runs a function on every render of the component, e.g. to fetch data
    //useState is a hook which rerenders the component on every state change
    // -->> changing the state inside use effect results in an infinite loop
    console.log("use effect ran");
    setCounter(counter + 1);

    // adding a dependency array ensures that it is just run the first time after the initial render
    //further, adding values to the array ensures rendering again only if the added values changes
  }, [name]);

  return (
    <div className="App">
      <h1>Testing stuff</h1>
      <button onClick={countingDown}>Decrease Number</button>
      <p>{counter}</p>
      <button onClick={() => countingUp()}>Increase Number</button>
      <p></p>
      <p></p>
      <p>{name}</p>
      <button onClick={() => setName("Dora")}>Change Name</button>
    </div>
  );
}

//Props vs State:
//State is handled(updated) inside the component and Props is handled(updated) outside and passed down into a component
//state change triggers rerender of the component, props can't be changed inside component
//props are just a variable to a function

export default App;
