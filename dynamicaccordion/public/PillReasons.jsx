import React, { useState } from 'react';
import Toggle from './Toggle';

function PillDescription() {
  const [toggle, settoggle] = useState([
    {
      title:
        'because your Healtcare Professional is concerned about your weight',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et..',
      open: false,
    },
    {
      title: 'becasue you eat a vegan diet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et.',
      open: false,
    },
    {
      title: 'becasue you eat a vegetarian diet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et.',
      open: false,
    },
    {
      title: 'becasue you were recommended to get more vitamin D',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et.',
      open: false,
    },
    {
      title: 'becasue you do not get at least 15 minutes of sun exposure a day',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et.',
      open: false,
    },
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

  return (
    <div>
      <div className="App">
        <div className="toggle">
          {toggle.map((title, i) => (
            <Toggle
              key={i}
              title={title}
              index={i}
              toggleTitleDescription={toggleTitleDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PillDescription;
