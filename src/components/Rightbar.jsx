import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import React from "react";

const photo =
  "https://scontent.fisb7-1.fna.fbcdn.net/v/t39.30808-6/311454639_3226365044242921_2721968428040206775_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=liJvXvfhzrgAX8zcFzz&_nc_ht=scontent.fisb7-1.fna&oh=00_AfCNUTFdZSnJLFWPuHNbC1Rof9pQTawclQkNbP5I8VIF8g&oe=63FFD269";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ position: "fixed", paddingTop: "50px" }}>
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>

        <Box sx={{ display: "flex" }}>
          <AvatarGroup max={6}>
            <Avatar alt="Remy Sharp" src={photo} />
            <Avatar alt="Travis Howard" src={photo} />
            <Avatar alt="Cindy Baker" src={photo} />
            <Avatar alt="Agnes Walker" src={photo} />
            <Avatar alt="Trevor Henderson" src={photo} />
            <Avatar alt="Agnes Walker" src={photo} />
            <Avatar alt="Trevor Henderson" src={photo} />
          </AvatarGroup>
        </Box>

        <Typography variant="h6" fontWeight={300} mt={3} mb={2}>
          Latest Images
        </Typography>

        <ImageList cols={3} rowHeight={164} gap={5}>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          
        </ImageList>
        <Typography variant="h6" fontWeight={300} mt={5} mb={3}>
          Latest Conversation
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
