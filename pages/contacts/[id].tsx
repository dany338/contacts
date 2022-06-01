/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Coworker from '../../assets/img/trabajador.png';
import Layout from "../../Layout";
import useContact from "../../hooks/useContact";
import firebase from "../../firebase";
import Contact from "../../entities/Contact";
import { obtainContact } from '../../redux/actions/contact';
export interface IContactProps {
  id: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Contacts: React.FC<IContactProps> = ({ id }) => {
  const [ contact ]: any = useContact(id);
  if (!contact) return null;
  const { firstName, lastName, email, phone, createdAt, updatedAt } = contact;
  console.log('🚀 ~ file: [id].tsx ~ line 38 ~ createdAt', contact, createdAt, updatedAt)
  
  return (
    <Layout>
      <Grid item xs={2} sm={4} md={4} key={contact.id}>
        <Item>
          <Card
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              margin: '1rem',
            }}
          >
            <CardMedia
              component="img"
              src='/trabajador.png'
              alt={firstName}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                width: '20%',
                height: '20%',
                margin: '1rem',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {firstName}{' '}{lastName}{' - '}{email}{' - '}{phone}
              </Typography>
              {createdAt && (
              <Typography variant="body2" color="text.secondary">
                Created ago{" "}{formatDistanceToNow(new Date(createdAt), { locale: es })}
                Updated ago{" "}{formatDistanceToNow(new Date(updatedAt), { locale: es })}
              </Typography>)}
            </CardContent>
            <CardActions>
              <Link href={`edit-contact/[id]`} as={`edit-contact/${id}`}>
                <Button size="small">Edit Contact</Button>
              </Link>
            </CardActions>
          </Card>
        </Item>
      </Grid>
    </Layout>
  );
};

export default Contacts;

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
