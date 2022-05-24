import React, { useState } from 'react';
import { Mail, Notifications, Pets, SettingsInputComponent, SettingsPowerRounded } from "@mui/icons-material"
import {InputBase, Box, AppBar, Toolbar, styled, Typography, Badge, Avatar, Menu, MenuItem} from "@mui/material" 

const StyledToolbar = styled(Toolbar) ({
  display:"flex",
  justifyContent:"space-between"
})

const Search =styled("div")(({theme})=>(
    {
        background:"white",
        padding:"0 10",
        borderRadius:theme.shape.borderRadius,
        width:"40%"
    }
));
const Icons =styled(Box)(({theme})=>(
  {
      display:"none",
      gap:"20px",
      alignItems:"center",
      //sm dan kichkina bolsa none boladi
      [theme.breakpoints.up("sm")] : {
        display:"flex",
      }
  }
))

const UserBox =styled(Box)(({theme})=>(
{
    display:"flex",
    gap:"10px",
    alignItems:"center",
    //sm dan katta holida korinmaydi
    [theme.breakpoints.up("sm")] : {
      display:"none",
    }
    }
))
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
      
      <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
                BAHROM
            </Typography>
                <Pets sx={{display:{xs:"block", sm:"none"}}}/>
                <Search> <InputBase placeholder="  search..."/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications/>
                    </Badge>
                    <Avatar 
                    src="https://unsplash.com/photos/KIPqvvTOC1s" 
                    sx={{width:30, height:30}}
                    onClick={(e)=>setOpen(true)}
                    />
                </Icons>
                    
                <UserBox onClick={(e)=>setOpen(true)} >
                    <Avatar src="https://unsplash.com/photos/KIPqvvTOC1s" sx={{width:30, height:30}}/>
                    <Typography variant='span'>John</Typography>
                </UserBox>
        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
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
  )
}

export default Navbar