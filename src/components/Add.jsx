import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import styled from "@emotion/styled";
import { Stack } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid gray",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 15,
  marginBottom: "10px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="AddPost"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px )", md: 40 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h5"
            fontWeight={800}
            textAlign="center"
            color="gray"
            marginBottom={5}
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Typography variant="h6" fontWeight={500}>
              Remy Sharp
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            rows={4}
            placeholder="What's on your mind!"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3} >
          <EmojiEmotionsIcon color="primary" fontSize="large"/>
          <AddPhotoAlternateIcon color="secondary" fontSize="large"/>
          <VideoCallIcon color="success" fontSize="large"/>
          <PersonAddIcon color="error" fontSize="large"/>
          </Stack>
          <Box sx={{display: 'flex',
                alignContent: 'center',
                alignItems: 'center'
           }}
           mt={5}>

          <ButtonGroup variant="contained" aria-label="outlined primary button group"
            >
            <Button sx={{width:'450px'}}>Post</Button>
            <Button sx={{width:'150px'}}><DateRangeIcon /></Button>
          </ButtonGroup>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
