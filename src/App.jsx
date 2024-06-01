import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(3);

  let add_one = () => {
    if (counter >= 5) {
      counter = 0;
    }
    setcounter(counter + 1);
  };
  let reduce_one = () => {
    if (counter <= 1) {
      counter = 6;
    }
    setcounter(counter - 1);
  };
  return (
    <>
      <h1>Hello is Counter app , Created using React</h1>
      <br />
      <h2>Counter value is between 1 to 5</h2>
      <h3>Value : {counter}</h3>
      <br />
      <button onClick={add_one}>Add 1 value to Counter</button>
      <br />
      <button onClick={reduce_one}>Reduce 1 value to Counter</button>
    </>
  );
}

export default App;
