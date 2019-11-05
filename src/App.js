import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = process.env.APP_ID;
  const APP_KEY = process.env.APP_KEY;
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() =>{
    console.log('Effect has been run');
  })

  return(
    <div className='App'>
      <form className="search-form">
        <input className="search-bar" type='text'></input>
        <button className="search-button" type='submit'>Search</button>
      </form>
    </div>
  );
}

export default App;
