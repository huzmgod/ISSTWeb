
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



  const setBool = useContext(UserContext).setBool;
  const setId = useContext(UserContext).setId;
  const setNombre = useContext(UserContext).setNombre;
  const setApellidos = useContext(UserContext).setApellidos;
  const setEmail = useContext(UserContext).setEmail;
  const setPassword = useContext(UserContext).setPassword;
  const setPiso = useContext(UserContext).setPiso;
  const setRol = useContext(UserContext).setRol;
  const setComunidades = useContext(UserContext).setComunidades;
  const setIsAdmin = useContext(UserContext).setIsAdmin;
  const setNumAdmin = useContext(UserContext).setNumAdmin;
  const email = useContext(UserContext).email;

  useEffect(() => {
    var formBody = sessionStorage.getItem("formBody")

    if (formBody != null) {
      async function fetchData() {
        try {

          const res = await fetch(`${URLBACKEND}/gestor/${email}`);
          const resData = await res.json();
          console.log(res)
          if (resData != null) {
            setIsAdmin(true);
            setBool(true);
            setId(resData.id);
            setNombre(resData.nombre);
            setApellidos(resData.apellidos);
            setEmail(resData.email);
            setPassword(resData.password);
            setNumAdmin(resData.numAdmin);
            setComunidades(resData.comunidades);

            navigate("/home/admin");
          }

        } catch (error) {
          return console.error(error);
        }
      }
      fetchData();
    }
  }, [])



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