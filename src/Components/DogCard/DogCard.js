import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import { Link } from "react-router-dom";
import "./DogCard.css";

export const DogCard = ({ dogName, dogImage, dogLife, action }) => {
  return (
    <Card className="card1" raised>
      <CardActionArea onClick={action}>
        <CardMedia
          component="img"
          height="140"
          image={dogImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {dogName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Life expectancy: {dogLife}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
