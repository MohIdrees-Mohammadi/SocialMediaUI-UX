import { AppBar, Avatar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));
const Icon = styled(Box)(({ theme }) => ({
 display: "none",
 justifyContent: "center",
 alignItems: 'center',
 gap: '20px',
 [theme.breakpoints.up("sm")]:{
  display: "flex",
 }

}));

const Userbox = styled(Box)(({ theme }) => ({
 display: "flex",
 justifyContent: "center",
 alignItems: 'center',
 gap: '10px',
 [theme.breakpoints.up("sm")]:{
  display: "none",
 }
}));



const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (

    <AppBar position="fixed" >
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          My Social Media
        </Typography>
        <Diversity2Icon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icon>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>

            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
            
            <Avatar sx={{width:30, height:30}} src="https://scontent.fisb7-1.fna.fbcdn.net/v/t39.30808-6/311454639_3226365044242921_2721968428040206775_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=liJvXvfhzrgAX8zcFzz&_nc_ht=scontent.fisb7-1.fna&oh=00_AfCNUTFdZSnJLFWPuHNbC1Rof9pQTawclQkNbP5I8VIF8g&oe=63FFD269" 
            onClick = {e => setOpen(true)}
            />
            
        </Icon>
        
        <Userbox onClick = {e => setOpen(true)}>
            <Avatar sx={{width:30, height:30}} src="https://scontent.fisb7-1.fna.fbcdn.net/v/t39.30808-6/311454639_3226365044242921_2721968428040206775_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=liJvXvfhzrgAX8zcFzz&_nc_ht=scontent.fisb7-1.fna&oh=00_AfCNUTFdZSnJLFWPuHNbC1Rof9pQTawclQkNbP5I8VIF8g&oe=63FFD269" 
             
            />
            <Typography variant="span">Idrees Mohammadi</Typography>
             
        </Userbox>

      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose = {e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
