import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = process.env.APP_ID;
  const APP_KEY = process.env.APP_KEY;
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect( () => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    console.log(data);
  }

  return(
    <div className='App'>
      <form className="search-form">
        <input className="search-bar" type='text'></input>
        <button className="search-button" type='submit'>Search</button>
      </form>
      {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
    </div>
  );
}

export default App;
