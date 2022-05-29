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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={(Trabajador as any)}
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
        <Link href={"contacts/[id]"} as={`contacts/${id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardContact;
