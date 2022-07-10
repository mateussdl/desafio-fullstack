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
          <h1 className="title">Título da Dog Fetch</h1>
        </div>
      </div>
      <div class="grid">
      <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
      </div>
    </div>
  );
}

export default App;
