/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import Router from "next/router";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Layout from "../Layout";
import useValidation from "../hooks/useValidation";
import { validateCreateAccount } from "../utils/validations";
import ErrorInput from "../components/ErrorInput";
import { createAccount } from "../redux/actions/auth";

const intialState = {
  name: "",
  email: "",
  password: "",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CreateAccount = () => {
  const [valores, errors, handleChange, handleSubmit] = useValidation(
    intialState,
    validateCreateAccount,
    () => crearCuenta()
  );


  const crearCuenta = () => {
    const { nombre, email, password } = valores;
    createAccount(nombre, email, password);
    Router.push("/");
  };

  return (
    <Layout>
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          height: 'auto',
          color: '#fff',
          '& > .MuiBox-root > .MuiBox-root': {
            p: 1,
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
          },
        }}
      >
        <h1 className="text-center">crear cuenta</h1>
        <form
          onSubmit={handleSubmit}
          noValidate={true}
          style={{ maxWidth: "30em", margin: "0px auto" }}
        >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Item>
              <FormGroup>
                <FormLabel htmlFor='name' component="label">Name</FormLabel>
                <TextField
                  error={!!errors.name}
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  defaultValue={valores.name}
                  variant="standard"
                  onChange={handleChange}
                />
                {errors.name && <ErrorInput text={errors.name} />}
              </FormGroup>
            </Item>
            <Item>
              <FormGroup>
                <FormLabel htmlFor='email' component="label">Email</FormLabel>
                <TextField
                  error={!!errors.email}
                  id="email"
                  name="email"
                  label="Email"
                  defaultValue={valores.email}
                  variant="standard"
                  onChange={handleChange}
                />
                {errors.email && <ErrorInput text={errors.email} />}
              </FormGroup>
            </Item>
            <Item>
              <FormGroup>
                <FormLabel htmlFor='email' component="label">Password</FormLabel>
                <TextField
                  error={!!errors.password}
                  id="email"
                  name="email"
                  label="Email"
                  defaultValue={valores.password}
                  variant="standard"
                  onChange={handleChange}
                />
                {errors.password && <ErrorInput text={errors.password} />}
              </FormGroup>
            </Item>
            <Item>
              <FormGroup>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  type='submit'
                >
                  Create Account{" "}
                </Button>
              </FormGroup>
            </Item>
          </Grid>
        </Grid>
        </form>
      </Box>
    </Layout>
  );
};

export default CreateAccount;
