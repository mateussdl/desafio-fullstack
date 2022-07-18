import React, { useEffect, useState } from "react";
import { breedFetch } from "../../API/breedFetch";
import { DogCard } from "../../Components/DogCard/DogCard";
import { Grid, Container } from "@mui/material";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [breedsList, setBreedsList] = useState([]);
  const navigate = useNavigate();


  const fetchALLdogs = () => {
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
        <h1 className="title">The Dog API Challenge</h1>
      </div>
      <Grid container spacing={7} id="grid">
        {breedsList.map((item) => (
          <DogCard
            dogName={item.name}
            dogDescription={item.bred_for}
            dogImage={item.image.url}
            dogLife={item.life_span}
            action={() => {navigate("/Details", {state: {dog: item}})}}
            />
        ))}
      </Grid>
    </Container>
  );
};