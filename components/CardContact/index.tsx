/* eslint-disable @next/next/no-img-element */
import React from "react";
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from "next/link";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Contact from '../../entities/Contact';
import Trabajador from '../../assets/img/trabajador.png';

export interface ICardContactProps {
  contact: Contact;
}

const CardContact: React.FC<ICardContactProps> = ({ contact }) => {
  const { id, firstName, lastName, email, phone, createdAt, updatedAt } = contact;

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
      </CardActions>
    </Card>
  );
};

export default CardContact;
