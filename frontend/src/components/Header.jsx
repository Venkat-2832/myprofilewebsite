import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Left side text */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Move Curser
        </Typography>

        {/* Right side menu */}
        <Box>
          <Button color="inherit">About</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Experience</Button>
          <Button color="inherit">Resume</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
