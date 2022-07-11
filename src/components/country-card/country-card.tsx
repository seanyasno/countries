import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
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
                <CardContent sx={{padding: '30px 24px 50px 24px'}}>
                    <Typography gutterBottom fontWeight='bold' fontSize='18px' component="div">
                        {country.name.common}
                    </Typography>

                    <Box>
                        <Typography display='inline' fontWeight={600} variant="body2" color="text.secondary">
                            Population:&nbsp;
                        </Typography>
                        <Typography display='inline' variant="body2" color="text.secondary">
                            {country.population}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography display='inline' fontWeight={600} variant="body2" color="text.secondary">
                            Region:&nbsp;
                        </Typography>
                        <Typography display='inline' variant="body2" color="text.secondary">
                            {country.region}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography display='inline' fontWeight={600} variant="body2" color="text.secondary">
                            Capital:&nbsp;
                        </Typography>
                        <Typography display='inline' variant="body2" color="text.secondary">
                            {country.capital}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
