import React from "react";
import Accordion from "./components/Accordion";
import "./App.css";
import Title from "./components/Title";
import Description from "./components/Description";
import Para from "./components/Para";

function App() {
  return (
    <div className="App">
      <div>
        <div className="accordion">
          <Accordion title="first title 01">
            1- Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam
            repellendus, suscipit facere expedita commodi odit sunt, quia
            laborum id modi et..
          </Accordion>
          <Accordion title="second title 02">
            2- Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam
            repellendus, suscipit facere expedita commodi odit sunt, quia
            laborum id modi et..
          </Accordion>
          <Accordion title="third title 03">
            3- Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam
            repellendus, suscipit facere expedita commodi odit sunt, quia
            laborum id modi et..
          </Accordion>
          <Accordion title="title $4">
            <Para />
          </Accordion>
          <Accordion title={<Title />}>
            <Description />
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default App;
