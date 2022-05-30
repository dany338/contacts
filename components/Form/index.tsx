import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { experimentalStyled as styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
              <FormLabel htmlFor='firstName' component="legend">First Name</FormLabel>
              {view ? (
                <FormLabel htmlFor='firstName' component="legend"><b>{' '}{contact.firstName}</b></FormLabel>
              ) : (
                <>
                  {/* <input type='text' className='form-control' name='firstName' onChange={handleChange} value={valores.firstName} /> */}
                  <TextField
                    error={!!errors.firstName}
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    defaultValue={valores.firstName}
                    variant="standard"
                    onChange={handleChange}
                  />
                  {errors.firstName && <ErrorInput text={errors.firstName} />}
                </>
              )}
            </Item>
            <Item>
              <FormLabel htmlFor='lastName' component="legend">Last Name</FormLabel>
              {view ? (
                <FormLabel htmlFor='lastName' component="legend"><b>{' '}{contact.lastName}</b></FormLabel>
              ) : (
                <>
                  {/* <input type='text' className='form-control' name='lastName' onChange={handleChange} value={valores.lastName} /> */}
                  <TextField
                    error={!!errors.lastName}
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    defaultValue={valores.lastName}
                    variant="standard"
                    onChange={handleChange}
                  />
                  {errors.lastName && <ErrorInput text={errors.lastName} />}
                </>
              )}
            </Item>
            <Item>
              <FormLabel htmlFor='email' component="legend">Email</FormLabel>
              {view ? (
                <FormLabel htmlFor='email' component="legend"><b>{' '}{contact.email}</b></FormLabel>
              ) : (
                <>
                  {/* <input type='text' className='form-control' name='email' onChange={handleChange} value={valores.email} /> */}
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
                </>
              )}
            </Item>
            <Item>
              <FormLabel htmlFor='phone' component="legend">Phone</FormLabel>
              {view ? (
                <FormLabel htmlFor='phone' component="legend"><b>{' '}{contact.phone}</b></FormLabel>
              ) : (
                <>
                  {/* <input type='number' className='form-control' name='phone' onChange={handleChange} value={valores.phone} /> */}
                  <TextField
                    error={!!errors.phone}
                    id="phone"
                    name="phone"
                    label="Phone"
                    defaultValue={valores.phone}
                    variant="standard"
                    onChange={handleChange}
                  />
                  {errors.phone && <ErrorInput text={errors.phone} />}
                </>
              )}
            </Item>
            <Item>
              {!view ? (
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  type='submit'
                >
                  {edit ? 'Edit Contact' : 'Create Contact'}
                </Button>
              ) : (
                <Link href={"/"} as={`/`}>
                  Cerrar
                </Link>
              )}
            </Item>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
