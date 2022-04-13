import { useState, useEffect } from "react";
import "./App.css";

// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h2>Age:{props.age}</h2>
//     </>
//   );
// };

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("u have change the counter to " + counter);
  }, [counter]);
  return (
    <div className="App">
      {/* <Person name={"John"} lastName={"motun"} age={40} /> */}
      {/* <Person name={"David"} lastName="bange" age={30} /> */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
