import { Bids, Header, } from '../../components'
import bids1 from '../../assets/bids1.png'
import bids2 from '../../assets/bids2.png'
import bids3 from '../../assets/bids3.png'
import bids4 from '../../assets/bids4.png'
import bids5 from '../../assets/bids5.png'
import bids6 from '../../assets/bids6.png'
import bids7 from '../../assets/bids7.png'
import bids8 from '../../assets/bids8.png'
import './home.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CardForum from '../../components/CardForum/CardForum';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CardVotations from '../../components/CardForum/CardVotations'

const Home = () => {

  return (
    <div className='home'>
      <div className='forum'>
        <CardForum />
        <CardForum />
        <CardForum />
        <CardForum />
        <CardForum />
        <CardForum />
        <CardForum />
      </div>
      <div className='votations'>
        <Box className="addVotation" >
          <Box className='description' >
            <CardVotations />
            <Box className='checkBoxes'>
              <FormControlLabel control={<Checkbox size="small" />} label="Sí" />
              <FormControlLabel control={<Checkbox size="small" />} label="No" />
            </Box>
          </Box>
       </Box>
       <Box className="addVotation" >
          <Box className='description' >
            <CardVotations />
            <Box className='checkBoxes'>
              <FormControlLabel control={<Checkbox size="small" />} label="Sí" />
              <FormControlLabel control={<Checkbox size="small" />} label="No" />
            </Box>
          </Box>
       </Box>
       <Box className="addVotation" >
          <Box className='description' >
            <CardVotations />
            <Box className='checkBoxes'>
              <FormControlLabel control={<Checkbox size="small" />} label="Sí" />
              <FormControlLabel control={<Checkbox size="small" />} label="No" />
            </Box>
          </Box>
       </Box>
       <Box className="addVotation" >
          <Box className='description' >
            <CardVotations />
            <Box className='checkBoxes'>
              <FormControlLabel control={<Checkbox size="small" />} label="Sí" />
              <FormControlLabel control={<Checkbox size="small" />} label="No" />
            </Box>
          </Box>
       </Box>


      </div>
      {/* <Header /> */}
      {/* <Bids title="Instalaciones"  /> */}
      <Box className="addComment" sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color='warning' aria-label="add">
          <AddIcon />
        </Fab>
      </Box>

    </div>
  );
};

export default Home;
