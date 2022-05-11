import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';
import logo from '../../assets/Logo.svg';
import { URLBACKEND } from '../../constants/constants';
import { createConfirmation } from 'react-confirm';
import YourDialog from '../../YourDialog';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const confirm = createConfirmation(YourDialog);

export default function CardCommunity(props) {
    const [expanded, setExpanded] = React.useState(false);
    const [btnPressed, setBtnPressed] = React.useState(false);
    const [calle, setCalle] = React.useState("");
    const [form, setform] = React.useState();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleBtnPressed = () => {
        setBtnPressed(!btnPressed);
    };

    const getComData = async () => {

        const comunidades = await fetch(`${URLBACKEND}/comunidad`);
        const comunities = await comunidades.json();
        const Com = comunities.filter(com => com.comunityCode == props.comunityCode);
        setCalle(Com[0].calle);
        return Com.calle;
    }

    const getUsuarios = async () => {
        const usr = await fetch(`${URLBACKEND}/usuario`);
        const usuarios = await usr.json();
        const usuariosCom = await usuarios.filter(usuario => usuario.comunidades.includes(props.comunityCode) );
        let form = [];
        for (let i = 0; i < usuariosCom.length; i++) {
            form.push(<p><b>{usuariosCom[i].nombre} {usuariosCom[i].apellidos}</b>: {usuariosCom[i].email}</p>)
        }
        setform(form);
        return form;
    }

    React.useEffect(() => {
        async function fetchData() {
            try {
                await getComData();   
                await getUsuarios();        
            } catch (error) {
            return console.error(error);
        }
    }
          fetchData();

    
}
        
    )

return (
    <Card sx={{ paddingBottom: '10px', marginBottom: '20px', maxWidth: "97%", backgroundColor: 'white' }}>

        <CardHeader
            avatar={
                <Avatar sx={{ height: '50px', width: '50px', bgcolor: "#FF7517" }} >
                    <img src={logo} alt="logo" style={{ width: '60px' }} />
                </Avatar>
            }
            title={"ComunityCode: " + props.comunityCode}
            subheader={calle}
        />
        <CardActions disableSpacing>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>{form}</Typography>
            </CardContent>
        </Collapse>
    </Card>
);
}
