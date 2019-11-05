import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = process.env.APP_ID;
  const APP_KEY = process.env.APP_KEY;

  return(
    <div className='App'>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
