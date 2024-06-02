import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SimCardIcon from '@mui/icons-material/SimCard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import UpdateIcon from '@mui/icons-material/Update';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';

interface HeaderProps {
  onMenuClick: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#063970' }}>
        <Toolbar sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' }, bgcolor: '#063970' }}
          >
            Hitachi Sim Activation Portal
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {[
              { text: 'All Customer', icon: <AccountCircleIcon /> },
              { text: 'Validate Sim', icon: <SimCardIcon /> },
              { text: 'Validate Customer', icon: <HowToRegIcon /> },
              { text: 'Validate Customer Details', icon: <UpdateIcon /> },
              { text: 'Validate Id Proof', icon: <HomeIcon /> },
              { text: 'Show Special Offers', icon: <VerifiedIcon /> },
            ].map((item, index) => (
              <ListItem button key={item.text} onClick={() => onMenuClick(index)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
