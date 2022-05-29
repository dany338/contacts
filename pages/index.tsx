import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Layout from '../Layout';
import CardContact from '../components/CardContact';
import Contact from '../entities/Contact';
import { obtainContacts } from '../redux/actions/contact';

export interface IHomeProps {
  // contacts: Contact[] | [];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home: React.FC<IHomeProps> = () => {
  const { contact: { deleteOk, contacts } }: any = useSelector((state) => state);

  useEffect(() => {
    if (deleteOk) {
      Router.push("/");
    }
  }, [deleteOk]);

  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {contacts && contacts.map((contact: Contact) => (
            <Grid item xs={2} sm={4} md={4} key={contact.id}>
              <Item>
                <CardContact key={contact.id} contact={contact} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home

export async function getServerSideProps(context: any) {
  const { params } = context;
  console.log("el parametro es: ", params);
  await obtainContacts(10, 1, null, null, null);

  return {
    props: {

    },
  };

}