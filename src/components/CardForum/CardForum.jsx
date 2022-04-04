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

export default function CardForum(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [btnPressed, setBtnPressed] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleBtnPressed = () => {
    setBtnPressed(!btnPressed);
  };


  const handleDelete = async () => {

    alert("¿Seguro?. Esta acción no se puede deshacer");

    const res = await fetch(`${URLBACKEND}/comunidad/${props.comunityCode}/post/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: props.id,
    });
  }
  return (
    <Card sx={{ paddingBottom: '10px', marginBottom: '20px', maxWidth: "97%", backgroundColor: 'white' }}>
      {props.idLocal == props.autorId ? (
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
        />) : (
        <CardHeader
          avatar={
            <Avatar sx={{ height: '50px', width: '50px', bgcolor: "#FF7517" }} >
              <img src={logo} alt="logo" style={{ width: '60px' }} />
            </Avatar>
          }
          title={props.titulo}
          subheader={props.autor}
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.cuerpo}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color={btnPressed ? "warning" : "default"} onClick={handleBtnPressed} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon color='warning' />
        </IconButton>
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
          <Typography paragraph>{props.cuerpo}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
