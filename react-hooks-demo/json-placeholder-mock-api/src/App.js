import './App.css';
import { useFetch } from './useFetch';

export const App = () => {
  const { data, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/users`
  );
  // console.log('data :' + data);
  return (
    <div className="App">
      <h1>JSON Placeholder Mock APi</h1>
      <div className="user-cards">
        {loading ? (
          <div>'loading...'</div>
        ) : (
          <div>
            {data.map((user) => (
              <div key={user.phone}>
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
                <p>{user.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
