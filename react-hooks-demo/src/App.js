import React, { useState } from 'react';

const App = () => {
  const [count0, setCount1] = useState(0); // single state
  const [{ count1, count2 }, setCount12] = useState({ count1: 10, count2: 20 }); // state in object

  const handleClick0 = () => {
    setCount1(count0 + 1);
  };

  return (
    <div>
      <div>
        Single state
        <div>
          {count0} : <button onClick={handleClick0}>+</button>
        </div>
      </div>
      <hr></hr>
      <div>
        State using object
        <div>{count1}</div>
        <div>{count2}</div>
        <button
          onClick={() =>
            setCount12((currentState) => ({
              count1: currentState.count1 + 2,
              count2: currentState.count2 + 3,
            }))
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
