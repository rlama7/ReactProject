import React from "react";
// import plus from "./plus-solid.svg";
// import minus from "./minus-solid.svg";
import Accordion from "./components/Accordion";
import './App.css';

function App() {
  return (
    <div className="App">
    {/** 
      <img src={plus} className="App-logo" alt="plus" />
      <img src={minus} className="App-logo" alt="minus" />
      <hr />
      */}
      <div>
        <Accordion title="first title">lorem ipsum -1</Accordion>
        <Accordion title="second title">lorem ipsum -2</Accordion>
        <Accordion title="third title">lorem ipsum -3</Accordion>
        <Accordion title="fourth title">lorem ipsum -4</Accordion>
      </div>
    </div>
  );
}

export default App;
