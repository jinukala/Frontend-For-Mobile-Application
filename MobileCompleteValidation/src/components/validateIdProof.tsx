import React, { useState, ChangeEvent } from "react";
import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import users from "./users.json";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

const ValidateId = () => {
  const [idType, setidType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleDocumentTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setidType(event.target.value);
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleDobChange = (event: ChangeEvent<HTMLInputElement>) => {
    setdateOfBirth(event.target.value);
  };

  const handleClick = () => {
    const user = users.find(
      (user) =>
        user.idType === idType &&
        user.firstName === firstName &&
        user.lastName === lastName &&
        user.dateOfBirth === dateOfBirth
    );
    setIsValid(user ? true : false);
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
    <div style={{ backgroundColor: "white", width: "100%", height: "300px" }}>
      <div style={{ padding: "10px" }}>
        <h1>Validate Customer Details</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            component="form"
            sx={{ width: "40ch" }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            <TextField
              select
              hiddenLabel
              placeholder="Select Document Type"
              value={idType}
              onChange={handleDocumentTypeChange}
              id="filled-hidden-label-small"
              variant="filled"
            >
              <MenuItem value="Aadhar">Aadhar</MenuItem>
              <MenuItem value="passport">Passport</MenuItem>
              <MenuItem value="driving-license">Driving License</MenuItem>
            </TextField>
            <TextField
              hiddenLabel
              placeholder="First Name *"
              required
              value={firstName}
              onChange={handleFirstNameChange}
              id="filled-hidden-label-small"
              variant="filled"
            />
            <TextField
              hiddenLabel
              placeholder="Last Name *"
              required
              value={lastName}
              onChange={handleLastNameChange}
              id="filled-hidden-label-small"
              variant="filled"
            />
            <TextField
              hiddenLabel
              type="date"
              value={dateOfBirth}
              onChange={handleDobChange}
              id="filled-hidden-label-normal"
              variant="filled"
            />
            <Button
              sx={{ backgroundColor: "orange" }}
              variant="contained"
              onClick={handleClick}
            >
              VALIDATE
            </Button>
          </Stack>
        </div>
        <br></br>
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
                    Id proof validated successfully!
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
                This user doesn't exist!!
              </Alert>
            </Snackbar>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValidateId;
