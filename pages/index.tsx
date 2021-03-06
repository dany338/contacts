import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import Router from 'next/router';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Layout from '../Layout';
import CardContact from '../components/CardContact';
import Paginate from '../components/Paginate';
import Contact, { IContactResults } from '../entities/Contact';
import { obtainContacts } from '../redux/actions/contact';
import { getContacts, getContact, createContact, updateContact, deleteContact } from '../services/contacts';
import useContacts from '../hooks/useContacts';
export interface IHomeProps {
  contacts: IContactResults | any;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home: React.FC<IHomeProps> = () => {
  const [ contacts, loading, handleChangePage, paginates, deleteOk ] = useContacts();
  if (!contacts) {
    return null;
  }

  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        {contacts?.results &&
          <Paginate
            contacts={contacts}
            handleChangePage={handleChangePage}
            paginates={paginates}
          />
        }
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {loading && [...Array(10)].map((item) =>  (
            <Grid item xs={2} sm={4} md={4} key={item}>
              <Item>
                <Skeleton width="100%" height="100%" animation="wave" variant="rectangular" >
                  <div style={{ paddingTop: '57%' }} />
                </Skeleton>
              </Item>
            </Grid>
          ))}
          {contacts?.results && contacts.results.map((contact: Contact) => (
            <Grid item xs={2} sm={4} md={4} key={contact.id}>
              <Item>
                <CardContact contact={contact} />
              </Item>
            </Grid>
          ))}
        </Grid>
        <Paginate
          contacts={contacts}
          handleChangePage={handleChangePage}
          paginates={paginates}
        />
      </Box>
    </Layout>
  );
};

export default Home

// export async function getStaticProps() {
//   const contacts: IContactResults | unknown = JSON.parse(JSON.stringify(await getContacts(10, 1, null, null, null)));
//   console.log('???? ~ file: contact.ts ~ line 27 ~ return ~ contacts', contacts)
//   return {
//     props: {
//       contacts
//     },
//   };
// }