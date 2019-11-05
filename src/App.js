import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = process.env.APP_ID;
  const APP_KEY = process.env.APP_KEY;

  const example = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`


  return(
    <div className='App'>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
