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

export default function CardMeet(props) {

    const [authorName, setAuthorName] = React.useState("");

    const getAuthorName = async () => {
        const res = await fetch(`${URLBACKEND}/usuario`);
        const usuarios = await res.json();

        for (const item of usuarios) {
            if (item.id == props.autorId) {
                setAuthorName(item.nombre);
                return;
            }
        }
    }
    React.useEffect(() => {
        getAuthorName();
    }
    );

    const handleDelete = async () => {
        props.setF5(!props.f5);
        if (props.rolLocal == 0) {

            alert("¿Seguro?. Esta acción no se puede deshacer");

            const res = await fetch(`${URLBACKEND}/reunion/delete/${props.id}`);
        } else {
            alert("No puedes borrar una votación que no has creado");
        }

    }


    return (

        (props.rolLocal == 0) ? (
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
                    subheader={props.fecha}
                />

                <CardContent>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.presencial ? "La reunión será presencial" : "La reunión será online"}
                    </Typography>

                    <Typography color="text.secondary">
                        {props.presencial ? "Localización" : "URL"}:{props.localizacion}
                    </Typography>
                </CardContent>
                {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}


            </Card>)
            : (
                <Card sx={{ padding: '10px', minWidth: 275 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ height: '50px', width: '50px', bgcolor: "#FF7517" }} >
                                <img src={logo} alt="logo" style={{ width: '60px' }} />
                            </Avatar>
                        }
                        title={props.motivo}
                        subheader={props.fecha}
                    />

                    <CardContent>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {props.presencial ? "La reunión será presencial" : "La reunión será online"}
                        </Typography>

                        <Typography color="text.secondary" fontFamily="PT Sans">
                            {props.presencial ? "Localización" : "URL"}:{props.localizacion}
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}


                </Card>
            )
    );
}