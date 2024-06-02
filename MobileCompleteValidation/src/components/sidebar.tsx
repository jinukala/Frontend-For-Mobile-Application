
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StickyHeadTable from './customers';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SimCardIcon from '@mui/icons-material/SimCard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import UpdateIcon from '@mui/icons-material/Update';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ValidateSim from './validateSim';
import ValidateCustomer from './validateCustomer';
import ValidateDetails from './validateCustomerDetails';
import ValidateId from './validateIdProof';
import SpecialOffers from './specialoffers';
import BasicCard from './offers';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

interface VerticalTabsProps {
  value: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const VerticalTabs: React.FC<VerticalTabsProps> = ({ value, onTabChange }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: '100vh' }}>
      {!isSmallScreen && (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={onTabChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', bgcolor: '#063970' }}
        >
          <Tab
            icon={<AccountCircleIcon sx={{ color: 'white' }} />}
            iconPosition="start"
            label="All Customer"
            {...a11yProps(0)}
           sx={{
              color: 'white',
              bgcolor: value === 0 ? 'grey' : 'inherit',
              '&:hover': {
                bgcolor: value === 0 ? 'grey' : 'rgba(0, 0, 0, 0.04)',
              },
            }}
          />
          <Tab
            icon={<SimCardIcon sx={{ color: 'white' }} />}
            iconPosition="start"
            label="Validate Sim"
            {...a11yProps(1)}
            sx={{
                color: 'white',
                bgcolor: value === 1 ? 'grey' : 'inherit',
                '&:hover': {
                  bgcolor: value === 1 ? 'grey' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
          />
          <Tab
            icon={<HowToRegIcon sx={{ color: 'white' }} />}
            iconPosition="start"
            label="Validate Customer"
            {...a11yProps(2)}
            sx={{
                color: 'white',
                bgcolor: value === 2 ? 'grey' : 'inherit',
                '&:hover': {
                  bgcolor: value === 2 ? 'grey' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
          />
          <Tab
            icon={<UpdateIcon sx={{ color: 'white' }} />}
            iconPosition="start"
            label="Validate Customer Details"
            {...a11yProps(3)}
            sx={{
                color: 'white',
                bgcolor: value === 3 ? 'grey' : 'inherit',
                '&:hover': {
                  bgcolor: value === 3 ? 'grey' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
          />
          <Tab
            icon={<HomeIcon sx={{ color: 'white' }} />}
            iconPosition="start"
            label="Validate Id Proof"
            {...a11yProps(4)}
            sx={{
                color: 'white',
                bgcolor: value === 4 ? 'grey' : 'inherit',
                '&:hover': {
                  bgcolor: value === 4 ? 'grey' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
          />
          <Tab
            icon={<VerifiedIcon sx={{ color: 'white' }} />}
            iconPosition="start"
            label="Show Special Offers"
            {...a11yProps(5)}
            sx={{
                color: 'white',
                bgcolor: value === 5 ? 'grey' : 'inherit',
                '&:hover': {
                  bgcolor: value === 5 ? 'grey' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
          />
        </Tabs>
      )}
      <div style={{width:'100%'}}>
      
      <TabPanel value={value} index={0}>
      <h1>Customer</h1>
        <StickyHeadTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ValidateSim/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ValidateCustomer/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ValidateDetails/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ValidateId/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SpecialOffers/>
        
      </TabPanel>
      </div>
    </Box>
  );
};

export default VerticalTabs;