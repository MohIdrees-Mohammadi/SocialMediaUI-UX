import React from 'react'
import { Avatar, Card, CardActions, CardHeader, CardMedia, Checkbox, IconButton } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const Posts = () => {
  return (
    <div >
      <Card sx={{marginTop: "50px"}} >
      <CardHeader
        avatar={
          <Avatar bgcolor='red' aria-label="recipe">
            R
          </Avatar>
        }
        
        title="Idrees Mohammadi Shared a new post"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="600"
        image="https://scontent.fisb7-1.fna.fbcdn.net/v/t39.30808-6/311454639_3226365044242921_2721968428040206775_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=liJvXvfhzrgAX8zcFzz&_nc_ht=scontent.fisb7-1.fna&oh=00_AfCNUTFdZSnJLFWPuHNbC1Rof9pQTawclQkNbP5I8VIF8g&oe=63FFD269"
        alt="Paella dish"
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
    </Card>
    </div>
  )
}

export default Posts
