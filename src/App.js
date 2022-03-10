import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const increamentHandler = () => {
    setCounter(counter + 1);
  };
  const decrementHandler = () => {
    setCounter(counter - 1);
    if (counter < 1) {
      setCounter("You have reached your targer!!");
    }
    if (counter === "You have reached your targer!!") {
      setCounter(0);
    }
  };
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increamentHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}
