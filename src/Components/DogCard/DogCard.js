import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./DogCard.css";

export const DogCard = ({ dogName, dogImage }) => {
  return (
    <div>
      <Card className="card1" raised>
        <CardMedia
          component="img"
          height="140"
          image={dogImage}
          alt="Black Great Dane"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dogName}
          </Typography>
        </CardContent>
        <Link to="/Details">About</Link>
      </Card>
    </div>
  );
};
