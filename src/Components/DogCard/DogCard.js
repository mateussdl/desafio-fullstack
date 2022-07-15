import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./DogCard.css";

export const DogCard = ({ dogName, dogImage }) => {
  return (
    <div>
      <Link className="link" to="/Details">
        <Card className="card1" raised>
          <CardActionArea>
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
            {/* <Link to="/Details">About</Link> */}
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};
