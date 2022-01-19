import React, { useState } from 'react';
import { useForm } from './useForm';

const App = () => {
  const [count0, setCount1] = useState(0); // single state
  const [{ count1, count2 }, setCount12] = useState({ count1: 10, count2: 20 }); // state in object
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [info, setInfo] = useState('');
  const [values, handleChange] = useForm({ email: '', password: '' });

  const handleClick0 = () => {
    setCount1(count0 + 1);
  };

  // const handleEmail = (e) => {
  //   // e.prevent.default();
  //   setEmail(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   // e.prevetn.default();
  //   setPassword(e.target.value);
  // };
  // const handleSubmitBtn = () => {
  //   setInfo(info);
  // };

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
      <hr></hr>
      <div>
        <input
          name="email"
          placeholder="Enter Email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>

      {/** 
      <div>
        Form
        <div>
          <input
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        {info}
        <button type="submit" onClick={handleSubmitBtn}>
          submit
        </button>
      </div>
      ***/}
    </div>
  );
};

export default App;
