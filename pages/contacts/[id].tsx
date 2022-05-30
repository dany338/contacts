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
import Coworker from '../../assets/img/trabajador.png';
import Layout from "../../Layout";
import useContact from "../../hooks/useContact";
import firebase from "../../firebase";
import Contact from "../../entities/Contact";
import { obtainContact } from '../../redux/actions/contact';

export interface IContactProps {
  contact: Contact;
}

const Contacts: React.FC<IContactProps> = ({ contact }) => {
  const [ myContact ]: any = useContact(contact);
  const { id, firstName, lastName, email, phone, createdAt, updatedAt } = myContact;

  return (
    <Layout>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={(Coworker as any)}
          alt={firstName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {firstName}{' '}{lastName}{' - '}{email}{' - '}{phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created ago{" "}{formatDistanceToNow(new Date(createdAt), { locale: es })}
            Updated ago{" "}{formatDistanceToNow(new Date(updatedAt), { locale: es })}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`edit-contact/[id]`} as={`edit-contact/${id}`}>
            <Button size="small">Edit Contact</Button>
          </Link>
        </CardActions>
      </Card>
    </Layout>
  );
};

export default Contacts;

export async function getServerSideProps(context: any) {
  const { params } = context;
  console.log("el parametro es: ", params);
  const { id } = params;
  const contact = await obtainContact(id);

  return {
    props: {
      contact,
    },
  };

}
