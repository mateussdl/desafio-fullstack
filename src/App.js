import React, {useEffect} from 'react';
import './App.css';
import {dogFetch} from './API/dogFetch';

function App() {

  useEffect(() => {dogFetch()}, [])

  return (
    <div className="App">
      <div>
        <div>
          <span>Título da Dog Fetch</span>
        </div>
      </div>
      <div>
        <li>
          <ul>Cachorro 1</ul>
          <ul>Cachorro 2</ul>
          <ul>Cachorro 3</ul>
          <ul>Cachorro 4</ul>
          <ul>Cachorro 5</ul>
        </li>
      </div>
    </div>
  );
}

export default App;
