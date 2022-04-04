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

const Home = () => {
  const navigate = useNavigate();
  const bool = useContext(UserContext).bool;
  const idLocal = useContext(UserContext).id;
  const comunidades = useContext(UserContext).comunidades;
  const posts = useContext(ComunityContext).posts;
  const votaciones = useContext(ComunityContext).votaciones;
  const comunityCode = useContext(ComunityContext).comunityCode;
  const forumCards = () => {
    let items = [];
    for (let i = 0; i < posts.length; i++) {
      items.push(
        <CardForum
          key={i}
          id={posts[i].id}
          titulo={posts[i].titulo}
          cuerpo={posts[i].cuerpo}
          autorId={posts[i].autor.id}
          autor={posts[i].autor.nombre}
          upvoted={posts[i].upvoted}
          comunityCode={comunityCode}
          idLocal={idLocal}
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
              key={i}
              id={votaciones[i].id}
              titulo={votaciones[i].titulo}
              autor={votaciones[i].autor.nombre}
              opcionA={votaciones[i].opcionA}
              opcionB={votaciones[i].opcionB}
              votantesA={votaciones[i].votantesA}
              votantesB={votaciones[i].votantesB}
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
  const setBool = useContext(UserContext).setBool;
  const setId = useContext(UserContext).setId;
  const setNombre = useContext(UserContext).setNombre;
  const setApellidos = useContext(UserContext).setApellidos;
  const setEmail = useContext(UserContext).setEmail;
  const setPassword = useContext(UserContext).setPassword;
  const setPiso = useContext(UserContext).setPiso;
  const setRol = useContext(UserContext).setRol;
  const setComunidades = useContext(UserContext).setComunidades;
  const setIdCom = useContext(ComunityContext).setIdCom;
  const setCalle = useContext(ComunityContext).setCalle;
  const setNumero = useContext(ComunityContext).setNumero;
  const setCpostal = useContext(ComunityContext).setCpostal;
  const setComunityCode = useContext(ComunityContext).setComunityCode;
  const setPosts = useContext(ComunityContext).setPosts;
  const setVotaciones = useContext(ComunityContext).setVotaciones;
  const setInstalaciones = useContext(ComunityContext).setInstalaciones;

  useEffect(() => {
    var formBody = sessionStorage.getItem("formBody")
    if (formBody != null) {
      async function fetchData() {
        try {

          const res = await fetch(`${URLBACKEND}/usuario/login?`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: formBody,
          });
          console.log(res)
          if (res.status === 200) {
            const resData = await res.json();
            console.log(res)
            if (resData != null) {


              setBool(true);
              setId(resData.id);
              setNombre(resData.nombre);
              setApellidos(resData.apellidos);
              setEmail(resData.email);
              setPassword(resData.password);
              setPiso(resData.piso);
              setRol(resData.rol);
              setComunidades(resData.comunidades);

              const comunityData = await fetch(`${URLBACKEND}/comunidad/${resData.comunidades[0]}`);
              const comunity = await comunityData.json();
              setIdCom(comunity.id);
              setCalle(comunity.calle);
              setNumero(comunity.numero);
              setCpostal(comunity.cpostal);
              setComunityCode(comunity.comunityCode);
              setPosts(comunity.posts);
              setVotaciones(comunity.votaciones);
              setInstalaciones(comunity.instalaciones);
            }
          }
        } catch (error) {
          return console.error(error);
        }
      }
      fetchData();
    }
  }, [])

  return (
    bool ? (


      <div className='home'>
        <div className='forum'>
          {forumCards()}

        </div>
        <div className='votations'>
          {forumVotes()}

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
