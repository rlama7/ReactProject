import React, { useState } from "react";
import Header from "./Header";
import Toggle from "./Toggle";

function App() {
  const [toggle, settoggle] = useState([
    {
      title:
        "because your Healtcare Professional is concerned about your weight",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et..",
      open: false
    },
    {
      title: "becasue you eat a vegan diet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et.",
      open: false
    },
    {
      title: "becasue you eat a vegan diet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et.",
      open: false
    }
  ]);

  const toggleTitleDescription = index => {
    settoggle(
      toggle.map((title, i) => {
        if (i === index) {
          title.open = !title.open;
        } else {
          title.open = false;
        }
        return title;
      })
    );
  };

function App() {
  return (
    <div className="App">
      <Header />
      <div className="toggle">
        {toggle.map((title, i) => (
          <Toggle
            title={title}
            index={i}
            toggleTitleDescription={toggleTitleDescription}
          />
        ))}
      </div>

  );
}

export default App;
