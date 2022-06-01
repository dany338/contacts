/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Router from 'next/router';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from "next/link";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../../entities/Contact';
import { eraseContact } from '../../redux/actions/contact';

export interface ICardContactProps {
  contact: Contact;
}

const CardContact: React.FC<ICardContactProps> = ({ contact }) => {

  const dispatch = useDispatch();
  if (!contact) {
    return null;
  }
  const { id, firstName, lastName, email, phone, createdAt, updatedAt }: any = contact;

  return (
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
        image='/trabajador.png'
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
        <Typography variant="body2" color="text.secondary">
          <b>Created ago</b>{" "}{formatDistanceToNow(new Date(createdAt), { locale: es })}{" "}
          <b>Updated ago</b>{" "}{formatDistanceToNow(new Date(updatedAt), { locale: es })}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={"contacts/[id]"} as={`contacts/${id}`}>
          <Button size="small">Learn More</Button>
        </Link>
        <Link href={"contacts/edit/[id]"} as={`contacts/edit/${id}`}>
          <Button size="small">Edit</Button>
        </Link>
        <Button size="small" onClick={async () => dispatch<any>(eraseContact(id))}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default CardContact;
