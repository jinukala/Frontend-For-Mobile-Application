import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import users from "./users.json";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

const ValidateCustomer = () => {
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDob(event.target.value);
  };

  const handleValidate = () => {
    const user = users.find(
      (user) => user.emailAddress === email && user.dateOfBirth === dob
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
    <div style={{ backgroundColor: "white", width: "100%", height: "200px" }}>
      <div style={{ padding: "10px" }}>
        <h1>Validate Customer</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "200px",
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
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              id="filled-hidden-label-small"
              variant="filled"
            />
            <TextField
              hiddenLabel
              placeholder="mm-dd-yyyy"
              value={dob}
              onChange={handleDobChange}
              id="filled-hidden-label-normal"
              type="date"
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

export default ValidateCustomer;
