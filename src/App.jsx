import { useState } from "react";

import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: Doe</h2>
      <h2>Age: 30</h2>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Person name={"Na"} />
      <Person />
      <Person />
    </div>
  );
};

export default App;
