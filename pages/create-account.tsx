/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import Layout from "../Layout";
import Router from "next/router";

import useValidation from "../hooks/useValidation";
import { validateCreateAccount } from "../utils/validations";
import ErrorInput from "../components/ErrorInput";
import { createAccount } from "../redux/actions/auth";

const intialState = {
  nombre: "",
  email: "",
  password: "",
};

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
      <h1 className="text-center">crear cuenta</h1>
      <form
        onSubmit={handleSubmit}
        noValidate={true}
        style={{ maxWidth: "30em", margin: "0px auto" }}
      >
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
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            crear cuenta{" "}
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default CreateAccount;
