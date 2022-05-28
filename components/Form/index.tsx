import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ErrorInput from '../ErrorInput';
import useValidation from '../../hooks/useValidation';
import { validateCreateAccount } from '../../utils/validations';
import Contact, { IContact, IContactCreate }  from '../../entities/Contact';

const intialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export interface IFormProps {
  addContact?: (contact: IContactCreate) => void | any;
  viewContact?: (contact: any) => void | any;
  editContact?: (contact: Contact) => void | any;
  edit?: boolean | any;
  view?: boolean | any;
  contact?: Contact | any;
}

const Form: React.FC<IFormProps> = ({
  addContact = () => ({}),
  viewContact = () => ({}),
  editContact = () => ({}),
  contact,
  edit = false,
  view = false
}) => {
  const [valores, errors, handleChange, handleSubmit] = useValidation(
    intialState,
    validateCreateAccount,
    () => crudContact()
  );

  const crudContact = () => {
    if (edit) {
      const newContact: IContact = {
        ...valores,
        id: contact.id,
        createdAt: contact.createdAt,
        updatedAt: contact.updatedAt,
        __v: contact.__v,
        _id: contact._id,
      };
      editContact(newContact);
      Router.push("/");
    } else if (view) {
      viewContact(contact.id);
    } else {
      const newContact: IContactCreate = {
        ...valores,
      };
      addContact(newContact);
      Router.push("/");
    }
  };

  return (
    <Box>
      <form className='row g-3' onSubmit={handleSubmit}>
        <div className='col md-6'>
          <label htmlFor='dish' className='form-label'>
            First Name
          </label>
          {view ? (
            <label htmlFor='dish' className='form-label'>
              <b>{' '}{contact.firstName}</b>
            </label>
          ) : (
            <>
              <input type='text' className='form-control' name='nombre' onChange={handleChange} value={valores.firstName} />
              {errors.firstName && <ErrorInput text={errors.firstName} />}
            </>
          )}
        </div>
        <div className='col md-6'>
          <label htmlFor='price' className='form-label'>
            Last Name
          </label>
          {view ? (
            <label htmlFor='price' className='form-label'>
              <b>{' '}{contact.lastName}</b>
            </label>
          ) : (
            <>
              <input type='number' className='form-control' name='precio' onChange={handleChange} value={valores.lastName} />
              <ErrorInput text={errors.lastName} />
            </>
          )}
        </div>
        <div className='col md-6'>
          <label htmlFor='dish' className='form-label'>
            Nombre del plato
          </label>
          {view ? (
            <label htmlFor='dish' className='form-label'>
              <b>{' '}{contact.email}</b>
            </label>
          ) : (
            <>
              <input type='text' className='form-control' name='nombre' onChange={handleChange} value={valores.email} />
              <ErrorInput text={errors.email} />
            </>
          )}
        </div>
        <div className='col md-6'>
          <label htmlFor='price' className='form-label'>
            Phone
          </label>
          {view ? (
            <label htmlFor='price' className='form-label'>
              <b>{' '}{contact.phone}</b>
            </label>
          ) : (
            <>
              <input type='number' className='form-control' name='precio' onChange={handleChange} value={valores.phone} />
              <ErrorInput text={errors.phone} />
            </>
          )}
        </div>
        <div className='col-6'>
          {!view ? (
            <button type='submit' className='btn btn-primary'>
              {edit ? 'Edit Contact' : 'Create Contact'}
            </button>
          ) : (
            <Link href={"/"} as={`/`}>
              Cerrar
            </Link>
          )}
        </div>
      </form>
    </Box>
  );
};

export default Form;
