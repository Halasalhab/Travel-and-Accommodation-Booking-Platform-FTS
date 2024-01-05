import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function TrendingCard({cityName, countryName, description, thumbnailUrl}) {

  return (
    <Card sx={{ display: 'flex', width: 650  }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {countryName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {cityName}
          </Typography>
        <Typography component="p" sx={{maxWidth:'70%', fontSize: '0.5rem'}}>
         {description}
        </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 250 }}
        image={thumbnailUrl}
        alt={description}
      />
    </Card>
  );
}

export default TrendingCard;
