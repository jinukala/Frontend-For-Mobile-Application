import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OfferCart from './offersCart/offercart';
import './specialoffers.css';
import users from './users.json';
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

interface CustomerAddress {
  address_id: number;
  address: string;
  city: string;
  pincode: string;
  state: string;
}

interface SimOffer {
  price: number;
  datalimit: number;
  smslimit: number;
  validity: number;
}

interface SimDetails {
  simId: number;
  serviceNumber: string;
  simNumber: string;
  simStatus: string;
  simOffers?: SimOffer[];
}

interface User {
  uniqueIdNumber: string;
  dateOfBirth: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  idType: string;
  customerAddress: CustomerAddress;
  simDetails: SimDetails;
  state: string;
}

const SpecialOffers = () => {
  const [simNumber, setSimNumber] = useState('');
  const [serviceNumber, setServiceNumber] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [offers, setOffers] = useState<SimOffer[]>([]);
  const [open, setOpen] = React.useState(false);

  const handleSimNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSimNumber(event.target.value);
  };

  const handleServiceNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServiceNumber(event.target.value);
  };

  const handleValidate = () => {
    const matchedUser = users.find(user => {
        return (
          user.simDetails.simNumber === simNumber &&
          user.simDetails.serviceNumber === serviceNumber
        );
    });

    if (matchedUser) {
      setIsValid(true);
      setOffers(matchedUser.simDetails.simOffers   || []);
    } else {
      setIsValid(false);
      setOffers([]);
      setOpen(true);
    }
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
    <div><h2>Check Special Offers</h2></div>
      <div className="ValidateSimOuterBox">
        {/* <h2 className="ValidateSimHeading">Check Special Offers</h2> */}
        <div className="ValidateSimtextField">
          <TextField
            className="textfield"
            id="SimNumber"
            label="Sim Number*"
            variant="outlined"
            value={simNumber}
            onChange={handleSimNumberChange}
          />
          <TextField
            className="textfield"
            id="ServiceNumber"
            label="Service Number*"
            variant="outlined"
            value={serviceNumber}
            onChange={handleServiceNumberChange}
          />
          <Button id='simButton'
            className="buttonofSimValidation"
            onClick={handleValidate}
          >
            CHECK OFFERS
          </Button>
        </div>
        {isValid === false && (
          <div>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="User Not Valid"
            action={action}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              variant="filled"
              sx={{ width: "100%" }}
            >
               SIM and Service number combination not found!
            </Alert>
          </Snackbar>
        </div>
        )}
      </div>
      {isValid && offers.length > 0 && (
        <div className="offerCartContainer">
          {offers.map((offer, index) => (
            <OfferCart
              key={index}
              price={offer.price}
              datalimit={offer.datalimit}
              smslimit={offer.smslimit}
              validity={offer.validity}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SpecialOffers;
