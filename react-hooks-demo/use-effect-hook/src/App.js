import React, { useEffect, useState } from 'react';

import { useFetch } from './useFetch';

import './App.css';

// const url = 'http://numbersapi.com/43/trivia';

function App() {
  // get the initial value of count from localStorage
  // only under initial render once.
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count'))
  );
  // items will be stored as JSON strings, therefore will need to parse to convert to JavaScript object
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // cache data to local storage
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    // when saving data, it will be needed to convert JavaScript object to JSON strings.
  }, [count]);

  return (
    <div className="App">
      <div>{loading ? 'loading...' : 'FUN facts : ' + data}</div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
