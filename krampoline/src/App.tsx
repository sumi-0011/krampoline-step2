import './App.css';

import { useEffect, useState } from 'react';

import { instance } from './api.js';

function App() {
  const [apiTest, setApiTest] = useState(false);
  const [dbTest, setDbTest] = useState(false);

  const handleApiOnclick = async () => {
    try {
      await instance.get('/test');
      setApiTest(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDbOnClick = async () => {
    try {
      await instance.get('/db');
      setDbTest(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>Hello Krampoline ! sumi</div>
        <div>
          <button onClick={handleApiOnclick}>API TEST</button>
          <div>{apiTest ? 'CONNECT' : 'NOT YET'}</div>
        </div>
        <div>
          <button onClick={handleDbOnClick}>DB TEST</button>
          <div>{dbTest ? 'CONNECT' : 'NOT YET'}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
