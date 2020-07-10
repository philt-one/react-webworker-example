import React, { useEffect, useState } from 'react';
import './App.css';
import worker from './worker.js';
import WebWorker from './workerSetup';

function App() {

  // init the worker
  const fibonacciWorker = new WebWorker(worker);

  const [ result, setResult ] = useState(0);
  const [ value, setValue ] = useState(0);
  
  const handleSubmit = (evt) => {
    evt.preventDefault(); // Prevent browser reload on submit
    fibonacciWorker.postMessage(value);  // Send value to fibonacciWorker
  }

  // Add event listener to capture messages from the web worker
  useEffect(() => {
    fibonacciWorker.addEventListener('message', (e) => {
      setResult(e.data);
    });
  }, [fibonacciWorker]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fibonacci calculator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
        {(value > 34) ? (
            <h6>
              Warning: Value over 34 might take a while to return a result
            </h6>
          ) : <div></div>
        }
        <div>Result : {result}</div>
      </header>
    </div>
  );
}

export default App;
