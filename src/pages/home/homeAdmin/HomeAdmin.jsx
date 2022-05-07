
import './home.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CardForum from '../../../components/CardForum/CardForum';
import CardVotations from '../../../components/CardForum/CardVotations'
import ComunityContext from '../../../components/ComunityContext';
import { useContext, useEffect } from 'react';
import UserContext from '../../../components/UserContext';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { URLBACKEND } from '../../../constants/constants';

const HomeAdmin = () => {
  const navigate = useNavigate();


 


  const setId = useContext(UserContext).setId;
  const setNombre = useContext(UserContext).setNombre;
  const setApellidos = useContext(UserContext).setApellidos;
  const setEmail = useContext(UserContext).setEmail;
  const setPassword = useContext(UserContext).setPassword;
  const setNumAdmin = useContext(UserContext).setNumAdmin;
  const setComunidades = useContext(UserContext).setComunidades;
 

  

  return (
    
      <div className='home'>
        

        
        
        <Box className="addComment" sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab color='warning' aria-label="add" onClick={() => navigate("addComunity")}>
            <AddIcon />
          </Fab>
        </Box>

      </div>
    

  );
};

export default HomeAdmin;