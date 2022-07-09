import React from 'react';
import { Card } from '@mui/material';
import './DogCard.css';

export const DogCard = () => {
    return(
        <div>
            <Card className='card1' raised >
                <p>
                    Isso é um card
                </p>
            </Card>
            <Card className='card1' raised >
                <p>
                    Isso é um card
                </p>
            </Card>
            <Card className='card1' raised >
                <p>
                    Isso é um card
                </p>
            </Card>
        </div>
    )
};