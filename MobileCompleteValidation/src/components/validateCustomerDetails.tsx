import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import users from "./users.json";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

const ValidateDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleValidate = () => {
    const user = users.find(
      (user) =>
        user.firstName === firstName &&
        user.lastName === lastName &&
        user.emailAddress === email
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
              hiddenLabel
              placeholder="First Name"
              required
              value={firstName}
              onChange={handleFirstNameChange}
              id="filled-hidden-label-small"
              variant="filled"
            />
            <TextField
              hiddenLabel
              placeholder="Last Name"
              required
              value={lastName}
              onChange={handleLastNameChange}
              id="filled-hidden-label-small"
              variant="filled"
            />
            <TextField
              hiddenLabel
              placeholder="Email"
              required
              value={email}
              onChange={handleEmailChange}
              id="filled-hidden-label-normal"
              variant="filled"
            />
            <Button
              sx={{ backgroundColor: "orange" }}
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
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Customer details validated successfully!
              </Alert>
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
                Invalid customer this customer does not exist!
              </Alert>
            </Snackbar>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValidateDetails;
