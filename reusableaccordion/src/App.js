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
      <div>
        {/** Direct call */}
        <div className="accordion">
          <Accordion  title="first title 01">
            1- Lorem ipsum dolor
          </Accordion>
          <Accordion title="second title 02">
            2- Lorem ipsum dolor 
          </Accordion>
          <Accordion title="third title 03">
            3- Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus
            soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam
            repellendus, suscipit facere expedita commodi odit sunt, quia laborum
            id modi et..
          </Accordion>
        </div>

        {/** Inject Para as component 
        <div>
          <Accordion title="title $4">
            <Para />
          </Accordion>
        </div>
        */}

        {/** Inject title and description as component 
        <div>
          <Accordion title={<Title />}>
            <Description />
          </Accordion>
        </div>
        */}
      </div>
    </div>
  );
}

export default App;
