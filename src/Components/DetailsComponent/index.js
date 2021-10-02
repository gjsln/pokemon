import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import useStyles from './style';
import { fetchDetails } from '../../services/pokeman.services';

function DetailsComponent(props) {
  const classes = useStyles();
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    fetchDetails(id, (data) => {
      setPokemonDetails(data);
    });
  }, [props.match.params.id]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderComponent = () => {
    return (
      pokemonDetails &&
      Object.keys(pokemonDetails).length > 0 && (
        <Box>
          <Typography variant='h3' component='div' className={classes.title}>
            {capitalizeFirstLetter(pokemonDetails.name)}
          </Typography>
          <Box component='div' className={classes.detailsContainer}>
            <Card
              sx={{
                maxWidth: 475,
                paddingTop: '24px',
                border: '1px solid #F0F2F7',
              }}
              key={pokemonDetails.id}
            >
              <Box component='div' className={classes.imageContainer}>
                <Box component='div' className={classes.imageSection}>
                  <CardMedia
                    component='img'
                    sx={{ width: 475, height: 475 }}
                    image={
                      pokemonDetails.sprites?.other?.['official-artwork'][
                        'front_default'
                      ]
                    }
                    alt={pokemonDetails.name}
                  />
                </Box>
              </Box>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {capitalizeFirstLetter(pokemonDetails.name)}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Height: {pokemonDetails.height}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Weight: {pokemonDetails.weight}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      )
    );
  };

  return <Box component='div'>{renderComponent()}</Box>;
}

export default DetailsComponent;
