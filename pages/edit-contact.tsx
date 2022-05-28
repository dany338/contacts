import { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import useValidation from '../hooks/useValidation';
import { validateCreateContact } from '../utils/validations';
import Layout from '../Layout';
import Form from "../components/Form";
import { editContact } from "../redux/actions/contact";
import Contact from '../entities/Contact';

const intialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const EditContact = () => {
  let dispatch: any = useDispatch();
  const { contact: { editOk, contact } }: any = useSelector((state) => state);

  useEffect(() => {
    if (editOk) {
      Router.push("/");
    }
  }, [editOk]);

  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          height: '140px',
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
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"header header header header"
          "main main . sidebar"
          "footer footer footer footer"`,
          }}
        >
          <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Create Contact</Box>
          <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>
            <Form
              edit={true}
              editContact={(contact: Contact) => dispatch(editContact(contact))}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default EditContact;
