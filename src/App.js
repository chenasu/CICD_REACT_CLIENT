import pika from './pika.png';
import './App.css';
import { useCallback } from 'react';

function App() {
  const backendURL = 'https://cicd-demo-server.onrender.com/';
  const localUrl = 'http://localhost:3002';

  const onNamesSubmit = useCallback(async event => {
    event.preventDefault();
    const first_name = event.target[0].value;
    const last_name = event.target[1].value;
    console.log('recieved ', first_name, ' ', last_name);

    const response = await fetch(localUrl, {
      body: JSON.stringify({ first_name: first_name, last_name: last_name }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Response: ', response);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={pika} className="App-logo" alt="logo" />
        <form onSubmit={onNamesSubmit}>
          <label>
            First name <input name="first_name" />
          </label>
          <label>
            {'Last name '}
            <input name="last_name" />
            <button type="submit">submit</button>
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;
