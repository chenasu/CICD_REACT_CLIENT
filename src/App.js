import pika from './pika.png';
import './App.css';
import { useCallback } from 'react';
import axios from 'axios';

function App() {
  const backendURL = 'https://cicd-demo-server.onrender.com/';
  const localUrl = 'http://localhost:3002';
  const func = useCallback(async event => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    const first_name = event.target[0].value;
    const last_name = event.target[1].value;
    console.log('Hello ', first_name, ' ', last_name);
    const response = await fetch(localUrl, {
      body: JSON.stringify({ first_name: first_name, last_name: last_name }),
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('Response: ', response);

    const data = {
      name: 'John',
      age: 30
    };

    fetch('http://localhost:3002/data', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), // Convert the data to a JSON string
      mode: 'no-cors'
    })
      // .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  const funci = useCallback(async event => {
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
        <form onSubmit={funci}>
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
