import React, { useRef } from 'react';

import './App.css';

export const App = () => {
  const inputRef = useRef();

  return (
    <div className="App">
      <div>useRefHook Usage and eXamples</div>
      <input ref={inputRef} name="email" />
      {/** reference the html element in the node and can take any desired actions with useRef hook */}
      <button onClick={() => console.log(inputRef.current.focus())}>
        focus
      </button>
    </div>
  );
};
