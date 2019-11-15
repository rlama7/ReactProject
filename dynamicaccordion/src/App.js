import React from "react";
import Accordion from "./component/Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="demo-01">
        <h1>Accordion Demo</h1>
        <Accordion className="toggle">
          <div
            className="title"
            label="because your Healtcare Professional is concerned about your weight1"
          >
            <p className="description">
              Description: 01 - Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic
              aliquid assumenda laboriosam repellendus, suscipit facere expedita
              commodi odit sunt, quia laborum id modi et.
            </p>
          </div>
          <div className="title" label="becasue you eat a vegan diet">
            <p className="description">
              Description: 02 - Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic
              aliquid assumenda laboriosam repellendus, suscipit facere expedita
              commodi odit sunt, quia laborum id modi et.
            </p>
          </div>
          <div label="becasue you eat a vegetarian diet">
            <p>
              Description: 03 - Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic
              aliquid assumenda laboriosam repellendus, suscipit facere expedita
              commodi odit sunt, quia laborum id modi et.
            </p>
          </div>
          <div label="becasue you were recommended to get more vitamin D">
            <p>
              Description: 04 - Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic
              aliquid assumenda laboriosam repellendus, suscipit facere expedita
              commodi odit sunt, quia laborum id modi et.
            </p>
          </div>
          <div label="becasue you do not get at least 15 minutes of sun exposure a day">
            <p>
              Description: 05 - Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic
              aliquid assumenda laboriosam repellendus, suscipit facere expedita
              commodi odit sunt, quia laborum id modi et.
            </p>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
