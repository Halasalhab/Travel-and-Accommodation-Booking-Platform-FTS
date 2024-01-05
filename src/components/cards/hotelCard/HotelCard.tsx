import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function HotelCard({originalRoomPrice, discount, finalPrice, cityName, hotelName, hotelStarRating, title, description, roomPhotoUrl}) {

  return (
    <Card sx={{ maxWidth: 250}}>
    <CardMedia
      sx={{ height: 120 }}
      image={roomPhotoUrl}
      title={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="p">
      {hotelName}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {cityName}
      </Typography>
      <Typography variant="body2" component="p">
        {finalPrice}
      </Typography>
      <Typography variant="body2" component="p" sx={{textDecoration: 'line-through'}}>
        {originalRoomPrice}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default HotelCard