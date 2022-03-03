import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function CardVotations() {
  return (
    <Card sx={{ padding: '10px', minWidth: 275 }}>
        <CardHeader
        avatar={
          <Avatar sx={{ height: '50px', width:'50px', bgcolor: "#FF7517" }} >
            Tumami
          </Avatar>
        }
        title="Tumami"
        subheader="Cambiar la puerta del garaje o romper cráneos"
      />
      <CardContent>
          
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Descripción:
        </Typography>
        
        <Typography color="text.secondary">
          aquí se describen metodologías para no morir por sobredosis de lsd
        </Typography>
        </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}