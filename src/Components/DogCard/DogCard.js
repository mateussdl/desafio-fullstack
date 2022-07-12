import React from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import './DogCard.css';

export const DogCard = ({dogName, dogDescription}) => {
    return(
        <div>
            <Card className='card1' raised >
                <CardMedia 
                    component="img"
                    height="140"
                    image="https://melhoramigo.dog/wp-content/uploads/2016/02/DOGUE-ALEMAO.jpg"
                    alt="Black Great Dane"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {dogName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {dogDescription}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
};