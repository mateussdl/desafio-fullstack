import React, {useEffect} from 'react';
import './App.css';
import {DogCard} from './Components/DogCard/DogCard';
import {imageFetch} from './API/imageFetch';
import {breedFetch} from './API/breedFetch';

function App() {

  useEffect(() => {
    imageFetch();
    breedFetch();
  }, [])

  return (
    <div className="App">
      <div>
        <div>
          <span>Título da Dog Fetch</span>
        </div>
      </div>
      <div>
        <DogCard />
        <DogCard />
        <DogCard />
      </div>
    </div>
  );
}

export default App;
