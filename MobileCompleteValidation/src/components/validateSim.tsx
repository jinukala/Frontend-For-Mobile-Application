import React, { useState, ChangeEvent } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import users from "./users.json"
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from "@mui/material/Alert";


const ValidateSim = () => {
  const [simNumber, setSimNumber] = useState('');
  const [serviceNumber, setServiceNumber] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleSimNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSimNumber(event.target.value);
  };

  const handleServiceNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setServiceNumber(event.target.value);
  };

  const handleValidate = () => {
    const matchedUser = users.find(user => {
      return (
        user.simDetails.serviceNumber === serviceNumber &&
        user.simDetails.simNumber === simNumber
      );
    });
    setIsValid(matchedUser ? true : false);
    setOpen(true);
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
    <div style={{ backgroundColor: 'white', width: '100%', height: '300px' }}>
      <div style={{ padding: '10px' }}>
        <h1>Validate Sim</h1>
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '200px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack
            component="form"
            sx={{ width: '40ch' }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            <TextField
              hiddenLabel
              placeholder="Sim Number"
              value={simNumber}
              onChange={handleSimNumberChange}
              id="filled-hidden-label-small"
              variant="filled"
            />
            <TextField
              hiddenLabel
              placeholder="Service Number"
              value={serviceNumber}
              onChange={handleServiceNumberChange}
              id="filled-hidden-label-normal"
              variant="filled"
            />
            <Button
              sx={{ backgroundColor: 'orange' }}
              variant="contained"
              onClick={handleValidate}
            >
              VALIDATE
            </Button>
          </Stack>
        </div>
        {isValid === true && (
          <div>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="User Valid"
            action={action}
          >
            <div>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="User Valid"
                action={action}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  SIM validated Successfully!!
                </Alert>
              </Snackbar>
            </div>
          </Snackbar>
        </div>
        )}
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
    </div>
  );
};

export default ValidateSim;
