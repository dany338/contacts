import { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useValidation from '../../../hooks/useValidation';
import { validateCreateContact } from '../../../utils/validations';
import Layout from '../../../Layout';
import Form from "../../../components/Form";
import { editContact, obtainContact } from '../../../redux/actions/contact';
import Contact from '../../../entities/Contact';
import useContact from "../../../hooks/useContact";

const intialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export interface IContactProps {
  id: string;
}

const EditContact: React.FC<IContactProps> = ({ id }) => {
  const dispatch = useDispatch();
  const [ contact ]: any = useContact(id);
  if (!contact) return null;

  return (
    <Layout>
      <Box
        sx={{
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
          <Box 
            sx={{ gridArea: 'footer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Form
              contact={contact}
              edit={true}
              editContact={(contact: Contact) => dispatch<any>(editContact(contact))}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default EditContact;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;
  console.log('🚀 ~ file: [id].tsx ~ line 61 ~ getServerSideProps ~ id', id)
  
  return {
    props: {
      id,
    },
  };

}