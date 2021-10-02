import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import useStyles from './style';

function PokeMonList(props) {
  const { pokemon } = props;
  const classes = useStyles();
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Card sx={{ maxWidth: 345 }} key={pokemon.id}>
      <Box component='div' className={classes.imageContainer}>
        <Box component='div' className={classes.imageSection}>
          <CardMedia
            component='img'
            sx={{ width: 140, height: 140 }}
            image={
              pokemon.sprites?.other?.['official-artwork']['front_default']
            }
            alt={pokemon.name}
          />
        </Box>
      </Box>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {capitalizeFirstLetter(pokemon.name)}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Height: {pokemon.height}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Weight: {pokemon.weight}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PokeMonList;
