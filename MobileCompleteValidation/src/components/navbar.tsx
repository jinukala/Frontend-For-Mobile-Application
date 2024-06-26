import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" sx={{ bgcolor:'#063970' }}>
        <Toolbar sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 ,textAlign: { xs: 'center', sm: 'left' }, bgcolor:'#063970'}}>
            Hitachi Sim Activation Porta
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
