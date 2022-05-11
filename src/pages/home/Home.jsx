import './home.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CardForum from '../../components/CardForum/CardForum';
import CardVotations from '../../components/CardForum/CardVotations'
import ComunityContext from '../../components/ComunityContext';
import { useContext, useEffect } from 'react';
import UserContext from '../../components/UserContext';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { URLBACKEND } from '../../constants/constants';
import CardMeet from '../../components/CardForum/CardMeet';

const Home = () => {
  const navigate = useNavigate();
  const bool = useContext(UserContext).bool;
  const idLocal = useContext(UserContext).id;
  const rolLocal = useContext(UserContext).rol;
  const comunidades = useContext(UserContext).comunidades;
  const posts = useContext(ComunityContext).posts;
  const votaciones = useContext(ComunityContext).votaciones;
  const comunityCode = useContext(ComunityContext).comunityCode;
  const reuniones = useContext(ComunityContext).reuniones;
  const [f5, setF5] = React.useState(false);

  const forumCards = () => {
    let items = [];
    for (let i = 0; i < posts.length; i++) {
      items.push(
        <CardForum
          key={i}
          id={posts[i].id}
          titulo={posts[i].titulo}
          cuerpo={posts[i].cuerpo}
          autorId={posts[i].autor}
          upvoted={posts[i].upvoted}
          comunityCode={comunityCode}
          idLocal={idLocal}
          f5={f5}
          setF5={setF5}
        />
      )
    }
    return items;
  }

  const forumVotes = () => {
    let items = [];
    for (let i = 0; i < votaciones.length; i++) {
      items.push(
        <Box className="addVotation" >
          <Box className='description' >
            <CardVotations
              comunityCode={comunityCode}
              key={i}
              id={votaciones[i].id}
              idLocal={idLocal}
              titulo={votaciones[i].titulo}
              autorId={votaciones[i].autor}
              f5={f5}
              setF5={setF5}
            />
            <Box className='checkBoxes'>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value={votaciones[i].opcionA} control={<Radio />} label={votaciones[i].opcionA} />
                  <FormControlLabel value={votaciones[i].opcionB} control={<Radio />} label={votaciones[i].opcionB} />
                  <FormControlLabel value="NS/NC" control={<Radio />} label="NS/NC" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </Box>
      )
    }
    return items;
  }
  //TODO
  const forumMeets = () => {
    let items = [];
    for (let i = 0; i < reuniones.length; i++) {
      const form = {
        comunityCode: comunityCode,
        key: i,
        id: reuniones[i].id,
        rolLocal: rolLocal,
        titulo: reuniones[i].motivo,
        presencial: reuniones[i].presencial,
        localizacion: reuniones[i].localizacion
      }
      console.log(
        form
      )
      items.push(
        <Box className="addVotation" >
          <Box className='description' >
            <CardMeet
              comunityCode={comunityCode}
              key={i}
              id={reuniones[i].id}
              rolLocal={rolLocal}
              titulo={reuniones[i].motivo}
              fecha={reuniones[i].fecha}
              presencial={reuniones[i].presencial}
              localizacion={reuniones[i].localizacion}
              f5={f5}
              setF5={setF5}
            />
          </Box>
        </Box>
      )
    }
    return items;
  }
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
  const mantainSession = useContext(UserContext).mantainSession;


  const setIdCom = useContext(ComunityContext).setIdCom;
  const setCalle = useContext(ComunityContext).setCalle;
  const setNumero = useContext(ComunityContext).setNumero;
  const setCpostal = useContext(ComunityContext).setCpostal;
  const setComunityCode = useContext(ComunityContext).setComunityCode;
  const setPosts = useContext(ComunityContext).setPosts;
  const setVotaciones = useContext(ComunityContext).setVotaciones;
  const setInstalaciones = useContext(ComunityContext).setInstalaciones;

  useEffect(() => {
    try {
      mantainSession();
    } catch (error) {
      return console.error(error);
    }
  }, [f5])

  return (
    bool ? (
      <div className='home'>
        <div className='forum'>
          <h2>POSTS</h2>
          {forumCards()}

        </div>
        <div className='votations'>
          <h2>VOTACIONES</h2>
          {forumVotes()}

        </div>
        <div className='votations'>
          <h2>REUNIONES</h2>
          {forumMeets()}

        </div>
        {/* <Header /> */}
        {/* <Bids title="Instalaciones"  /> */}
        <Box className="addComment" sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab color='warning' aria-label="add" onClick={() => navigate("/create")}>
            <AddIcon />
          </Fab>
        </Box>

      </div>
    ) : (
      <div className='homeNotLogged'>

        NO HAS INICIADO SESIÓN. NO PERTENECES A NINGUNA COMUNIDAD
        <img src="https://tenor.com/es/ver/deal-with-it-peppa-pig-george-daddy-mommy-gif-16388811.gif" alt="peppa" style={{ padding: "100px" }} />
      </div>
    )

  );
};

export default Home;
