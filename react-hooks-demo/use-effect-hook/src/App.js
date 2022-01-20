import React, { useState } from 'react';

import { useFetch } from './useFetch';

import './App.css';

// const url = 'http://numbersapi.com/43/trivia';

function App() {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  return (
    <div>
      <div>{loading ? 'loading...' : 'FUN facts : ' + data}</div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}

export default App;
