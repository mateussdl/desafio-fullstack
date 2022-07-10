import React from 'react';
import { Card } from '@mui/material';
import { CardActions } from '@mui/material/CardActions';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Button } from '@mui/material/Button';
import { Typography } from '@mui/material/Typography';
import './DogCard.css';

export const DogCard = () => {
    return(
        <div>
            <Card className='card1' raised >
                <CardMedia
                    component="img"
                    height="140"
                    image="https://melhoramigo.dog/wp-content/uploads/2016/02/DOGUE-ALEMAO.jpg"
                    alt="Black Great Dane"
                />
            </Card>
        </div>
    )
};