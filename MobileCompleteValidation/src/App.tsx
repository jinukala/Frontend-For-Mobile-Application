import React, { useState } from 'react';
import Header from './components/header';
import VerticalTabs from './components/sidebar';
import Box from '@mui/material/Box';

const App = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleMenuClick = (index: number) => {
    setTabValue(index);
  };

  return (
    <Box>
      <Header onMenuClick={handleMenuClick} />
      <VerticalTabs value={tabValue} onTabChange={handleTabChange} />
    </Box>
  );
};

export default App;
