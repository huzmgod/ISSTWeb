import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import logo from '../../assets/Logo.svg';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { URLBACKEND } from '../../constants/constants';

export default function CardVotations(props) {
  const handleDelete = async () => {
    props.setF5(!props.f5);
    if (props.idLocal === props.autorId) {

      alert("¿Seguro?. Esta acción no se puede deshacer");

      const res = await fetch(`${URLBACKEND}/comunidad/${props.comunityCode}/votacion/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: props.id,
      });
    }else{
      alert("No puedes borrar una votación que no has creado");
    }

  }
  return (


    <Card sx={{ padding: '10px', minWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ height: '50px', width: '50px', bgcolor: "#FF7517" }} >
            <img src={logo} alt="logo" style={{ width: '60px' }} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DeleteIcon onClick={handleDelete} />
          </IconButton>
        }
        title={props.titulo}
        subheader={props.autor}
      />

      <CardContent>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Descripción:
        </Typography>

        <Typography color="text.secondary">
          {/* {props.cuerpo} */}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}


      )
    </Card>
  );
}