import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface OfferCartProps {
  price: number;
  datalimit: number;
  smslimit: number;
  validity: number;
}

const OfferCart = (props: OfferCartProps) => {
  return (
    <Box style={{ margin: '0.5rem' }} sx={{ minWidth: 275,maxWidth: 350 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            style={{ color: 'red' }}
            sx={{ fontSize: 20 }}
            color="text.secondary"
            gutterBottom
          >
            <strong>₹{props.price}</strong>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <strong>{props.datalimit} GB/day</strong> data & unlimited calls
            <br />
            <strong>{props.smslimit}</strong> SMS per day
            <br />
            <strong>{props.validity}</strong> days validity
            <br />
          </Typography>
          <Typography sx={{ fontSize: 22 }}>Other benefits</Typography>
          <Typography
            style={{ color: 'purple' }}
            sx={{ fontSize: 14 }}
            color="text.secondary"
          >
            Vi Movies & TV, Data RollOver, Night Binge subscriptions free
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OfferCart;
