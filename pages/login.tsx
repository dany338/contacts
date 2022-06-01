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
import { initSession } from "../redux/actions/auth";

const intialState = {
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
    () => signIn()
  );


  const signIn = () => {
    const { email, password } = valores;
    initSession(email, password);
    Router.push("/");
  };

  return (
    <Layout>
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: 'center',
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
        <Box
          component="h1"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000'}}
        >
          Login
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: 'center' }}>
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                <FormGroup>
                  <FormLabel htmlFor='email' component="label">Email</FormLabel>
                  <TextField
                    error={!!errors.email}
                    id="email"
                    name="email"
                    label="Email"
                    value={valores.email}
                    variant="standard"
                    onChange={handleChange}
                  />
                  {errors.email && <ErrorInput text={errors.email} />}
                </FormGroup>
              </Item>
              <Item>
                <FormGroup>
                  <FormLabel htmlFor='password' component="label">Password</FormLabel>
                  <TextField
                    error={!!errors.password}
                    id="email"
                    name="email"
                    label="Email"
                    value={valores.password}
                    variant="standard"
                    onChange={handleChange}
                  />
                  {errors.password && <ErrorInput text={errors.password} />}
                </FormGroup>
              </Item>
              <Item>
                <FormGroup>
                  <Button
                    sx={{ my: 2, color: 'black', display: 'block' }}
                    type='submit'
                  >
                    Create Account{" "}
                  </Button>
                </FormGroup>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default CreateAccount;
