import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';


export default function Navbar() {
  const color = red[400];
  return (
    <Box sx={{ flexGrow: 1 , mb:2 , backgroundColor: red[500], }} >
      <AppBar position="static"  sx={{  backgroundColor: red[400], }} >
        <Toolbar variant="dense" >
          <IconButton edge="start" color="red" aria-label="menu"  sx={{ mr: 2,  }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Videos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
