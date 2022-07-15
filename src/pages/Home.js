import React, { useEffect, useState } from "react";
import { imageFetch } from "../API/imageFetch";
import { breedFetch } from "../API/breedFetch";
import { DogCard } from "../Components/DogCard/DogCard";
import { Grid, Container } from "@mui/material";
// import { Link } from "react-router-dom";
import "../App.css";

export const Home = () => {
  const [breedsList, setBreedsList] = useState([]);
  const [imagesList, setImagesList] = useState([]);

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

  return (
    <Container>
      <div>
        <h1 className="title">Título da Dog Fetch</h1>
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
};