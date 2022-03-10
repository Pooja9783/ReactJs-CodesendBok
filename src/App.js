import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const AddHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={AddHandler}>Add</button>
    </div>
  );
}
