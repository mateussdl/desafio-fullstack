import React, { useEffect, useState } from "react";
import "./App.css";
import { DogCard } from "./Components/DogCard/DogCard";
import { imageFetch } from "./API/imageFetch";
import { breedFetch } from "./API/breedFetch";
import { Grid, Container } from "@mui/material";

function App() {
  //var
  const [breedsList, setBreedsList] = useState([]);
  const [imagesList, setImagesList] = useState([]);

  //funcutil
  const fetchALLdogs = () => {
    imageFetch(setImagesList);
    breedFetch(setBreedsList);
  };
  useEffect(() => {
    fetchALLdogs();
  }, []);

  useEffect(() => {
    console.log("aqui", breedsList);
  }, [breedsList]);

  //ui
  return (
    <Container>
      <div>
        <div>
          <h1 className="title">Título da Dog Fetch</h1>
        </div>
      </div>
      <Grid container spacing={5}>
        {breedsList.map((item) => (
          <DogCard
            dogName={item.name}
            dogDescription={item.bred_for}
            dogImage={item.image.url}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default App;
