/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import Router from "next/router";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Layout from "../Layout";
import useValidation from "../hooks/useValidation";
import { validateCreateAccount } from "../utils/validations";
import ErrorInput from "../components/ErrorInput";
import { createAccount } from "../redux/actions/auth";

const intialState = {
  nombre: "",
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
  const [valores, errores, handleChange, handleSubmit] = useValidation(
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
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    onChange={handleChange}
                    value={valores.nombre}
                  />
                  {errores.nombre && <ErrorInput text={errores.nombre} />}
                </div>
            </Item>
            <Item>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  value={valores.email}
                />
                {errores.email && <ErrorInput text={errores.email} />}
              </div>
            </Item>
            <Item>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  value={valores.password}
                />
                {errores.password && <ErrorInput text={errores.password} />}
              </div>
            </Item>
            <Item>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  crear cuenta{" "}
                </button>
              </div>
            </Item>
          </Grid>
        </Grid>
        </form>
      </Box>
    </Layout>
  );
};

export default CreateAccount;
