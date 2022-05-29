import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Form: React.FC<IFormProps> = ({
  addContact = () => ({}),
  viewContact = () => ({}),
  editContact = () => ({}),
  contact = {},
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
      <form className='row g-3' onSubmit={handleSubmit}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Item>
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
            </Item>
            <Item>
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
            </Item>
            <Item>
              <div className='col md-6'>
                <label htmlFor='email' className='form-label'>
                  Nombre del plato
                </label>
                {view ? (
                  <label htmlFor='email' className='form-label'>
                    <b>{' '}{contact.email}</b>
                  </label>
                ) : (
                  <>
                    <input type='text' className='form-control' name='nombre' onChange={handleChange} value={valores.email} />
                    <ErrorInput text={errors.email} />
                  </>
                )}
              </div>
            </Item>
            <Item>
              <div className='col md-6'>
                <label htmlFor='phone' className='form-label'>
                  Phone
                </label>
                {view ? (
                  <label htmlFor='phone' className='form-label'>
                    <b>{' '}{contact.phone}</b>
                  </label>
                ) : (
                  <>
                    <input type='number' className='form-control' name='precio' onChange={handleChange} value={valores.phone} />
                    <ErrorInput text={errors.phone} />
                  </>
                )}
              </div>
            </Item>
            <Item>
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
            </Item>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
