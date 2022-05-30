import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';

import Layout from '../Layout';
import Form from "../components/Form";
import { obtainContact } from "../redux/actions/contact";


const ViewContact = () => {
  let dispatch: any = useDispatch();
  const { contact: { contact } }: any = useSelector((state) => state);

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
              contact={contact}
              view={true}
              viewContact={(id: string) => dispatch(obtainContact(id))}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default ViewContact;
