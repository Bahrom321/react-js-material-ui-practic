import {styled, Box, Fab, Modal, Tooltip, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"

const StyleModal =styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
})

const UserBox =styled(Box)({
    display:"flex",
    // justifyContent:"center",
    gap:"10px",
    marginBottom:"10px", 
    alignItems:"center"
})

const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip title="Delete" onClick={(e)=>setOpen(true)} sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
          <Fab color="primary" aria-label='add'>
              <AddIcon/>
          </Fab>
      </Tooltip>
      <StyleModal

        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
            <UserBox>
                <Avatar 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    sx={{width:30, height:30}}
                />
                <Typography fontWeight={500} variant="span">John Doe</Typography>
            </UserBox>
            <TextField
          id="standard-multiline-static"
          sx={{width:"100%"}}
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary"/>
            <Image color="secondary"/>
            <VideoCameraBack color="success"/>
            <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
                <DateRange/>
            </Button>
        </ButtonGroup>
        </Box>

    </StyleModal>
    </>
  )
}

export default Add
