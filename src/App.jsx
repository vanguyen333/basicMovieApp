import { useState } from "react";

import "./App.css";

// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   );
// };

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* <Person name={"Na"} lastName="Pham" age="30" />
      <Person name="Joseph" age="50" lastName="Nguyen" /> */}
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
