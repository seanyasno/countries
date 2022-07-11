import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import {Country} from '../../abstraction/types';
import React from 'react';

type Props = {
    country: Country;
}

export const CountryCard: React.FC<Props> = (props) => {
    const {country} = props;

    return (
        <Card elevation={3}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={country.flags.png}
                    alt={country.name.official}
                />
                <CardContent>
                    <Typography gutterBottom fontWeight='bold' variant="subtitle1" component="div">
                        {country.name.common}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Population: {country.population}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Region: {country.region}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Capital: {country.capital}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
