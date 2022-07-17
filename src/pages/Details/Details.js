import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {  Typography, Card, CardMedia } from "@mui/material";
import "./Details.css";

export const Details = () => {
  const location = useLocation();
  const dog = location.state.dog;

  return (
    <Card sx={{
      display: 'grid',
      gridAutoFlow: 'row',}} >
      <div className="image">
        <CardMedia
          id="idImage"
          component="img"
          height="200px"
          width="200px"
          image={`${dog.image.url}?w=600&h=600&fit=crop&auto=format`}
        />
      </div>
      <div>
        <h1>name</h1>
        <Typography>{dog.name}</Typography>
        <h1>life_span</h1>
        <Typography>{dog.life_span}</Typography>
        <h1>height</h1>
        <Typography>{dog.height.metric}</Typography>
        <h1>weight</h1>
        <Typography>{dog.weight.metric}</Typography>
        <h1>breed_group</h1>
        <Typography>{dog.breed_group}</Typography>
        <h1>bred_for</h1>
        <Typography>{location.state.dog.bred_for}</Typography>
        <h1>temperament</h1>
        <Typography>{dog.temperament}</Typography>
        <Link to="/">Home</Link>
      </div>
    </Card>
  );
};
