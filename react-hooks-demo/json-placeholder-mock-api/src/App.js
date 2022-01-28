import React from 'react';
import './App.scss';
import { useFetch } from './useFetch';

// const usersURL = `https://jsonplaceholder.typicode.com/users`;
const clientURL = `http://localhost:5000/clients`;

export const App = () => {
  const { data, loading } = useFetch(clientURL);
  // console.log('data :' + data);
  return (
    <div className="App">
      <h1>JSON Placeholder Mock APi</h1>
      <div className="user-cards-wrapper">
        {loading ? (
          <div>'loading...'</div>
        ) : (
          <div className="user-cards">
            {data.map((user) => (
              <div key={user.phone} className="users">
                <h2>{user.name}</h2>
                {/* <h3>{user.email}</h3>  */}
                {user.hobbies.map((hobby) => (
                  <h3>{hobby}</h3>
                ))}
                <p>{user.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
