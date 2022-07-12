import React, { useEffect, useState } from "react";
import "./App.css";
import { DogCard } from "./Components/DogCard/DogCard";
import { imageFetch } from "./API/imageFetch";
import { breedFetch } from "./API/breedFetch";

function App() {
//var
const [breedsList, setBreedsList] = useState({});


//funcutil
  // const fetchALLdogs = async () => {
  //   await imageFetch();
  //   setBreedsList(await breedFetch());
  // };
  // useEffect(() => {
  //   fetchALLdogs();
  // }, []);

  useEffect(() => {
    console.log("aqui", breedsList);
  }, [breedsList]);

  //ui
  return (
    <div className="App">
      <div>
        <div>
          <h1 className="title">Título da Dog Fetch</h1>
        </div>
      </div>
      <div class="grid">
        <DogCard dogName="Pastor Alemão" dogDescription="12" dogImage=""/>
        <DogCard dogName="Buldogue" dogDescription="34" dogImage=""/>
        <DogCard dogName="Poodle" dogDescription="56" dogImage=""/>
        <DogCard dogName="Pug" dogDescription="78" dogImage=""/>
        <DogCard />
      </div>
    </div>
  );
}

export default App;
