import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';

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

export default function CardForum() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ paddingBottom:'10px',marginBottom:'20px', maxWidth: "97%", backgroundColor:'white' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ height: '50px', width:'50px', bgcolor: "#FF7517" }} >
            Tumami
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Misko_johnes"
        subheader="Autopista del diablo"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          La autopista del diabolo hijos del gran Ra
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
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
          <Typography paragraph>¿Qué sucedió?</Typography>
          <Typography paragraph>
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
          </Typography>
          <Typography paragraph>
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
          </Typography>
          <Typography paragraph>
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
          </Typography>
          <Typography>
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            Los hijos del gran Ra eran hijos de la descendencia de Ra en Rameshbabu
            
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
