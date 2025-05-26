import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";


import Header from "../../components/Header";
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Example of a valid phone number: +8801712345678
const regPhone =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'User',
    label: 'User',
  },
];

const Form = () => {

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const handleClick = () => {
    setOpen(true);
  };
  const onSubmit = () => {
    console.log("done");
    handleClick();
  };


  return (

    <Box

      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >

      <Header title={"CREATE USER"} subtitle={"Fill the form below to create a new user"} />

      <Stack sx={{ gap: 3 }} direction={"row"}>

        <TextField
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.firstName) ? "This field is required & min 3 characters" : null}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }} label="First Name" variant="filled"
        />

        <TextField
          error={Boolean(errors.lastName)}
          helperText={Boolean(errors.lastName) ? "This field is required & min 3 characters" : null}
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }} label="Last Name" variant="filled"
        />

      </Stack>


      <TextField
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? "Please enter a valid email address" : null}
        {...register("email", { required: true, pattern: regEmail })}
        label="Email" variant="filled" />

      <TextField
        error={Boolean(errors.phone)}
        helperText={Boolean(errors.phone) ? "Please enter a valid phone number" : null}
        {...register("phone", { required: true, pattern: regPhone })}
        label="Contact Number" variant="filled" />

      <TextField label="Address" variant="filled" />

      <TextField label="Address Line 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        // onClick={handleClick}
        >
          Great New User
        </Button>


        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            sx={{ width: '100%' }}>
            Account Created Successfully!
          </Alert>
        </Snackbar>

      </Box>

    </Box>

  );
};

export default Form;