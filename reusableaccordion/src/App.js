import React from "react";
// import plus from "./plus-solid.svg";
// import minus from "./minus-solid.svg";
import Accordion from "./components/Accordion";
import "./App.css";
import Title from "./components/Title";
import Description from "./components/Description";
import Para from "./components/Para";

function App() {
  return (
    <div className="App">
      {/** 
      <img src={plus} className="App-logo" alt="plus" />
      <img src={minus} className="App-logo" alt="minus" />
      <hr />
      */}
      <div>
        <div>
          <Accordion title="first title 01">lorem ipsum -1</Accordion>
          <Accordion title="second title 02">lorem ipsum -2</Accordion>
          <Accordion title="third title 03">lorem ipsum -3</Accordion>
        </div>
        <hr />

        <div>
          <Accordion title="title $+#4">
            <Para />
          </Accordion>
        </div>
        <hr />

        <div>
          <Accordion title={<Title />}>
            <Description />
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default App;
