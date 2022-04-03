import './home.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CardForum from '../../components/CardForum/CardForum';
import CardVotations from '../../components/CardForum/CardVotations'
import ComunityContext from '../../components/ComunityContext';
import { useContext } from 'react';
import UserContext from '../../components/UserContext';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Home = () => {
  const bool = useContext(UserContext).bool;

  const comunidades = useContext(UserContext).comunidades;
  const posts = useContext(ComunityContext).posts;
  const votaciones = useContext(ComunityContext).votaciones;

  const forumCards = () => {
    let items = [];
    for (let i = 0; i < posts.length; i++) {
      items.push(
        <CardForum
          key={i}
          id={posts[i].id}
          titulo={posts[i].titulo}
          cuerpo={posts[i].cuerpo}
          autor={posts[i].autor.nombre}
          upvoted={posts[i].upvoted}
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
                  <FormControlLabel value= {votaciones[i].opcionA} control={<Radio />} label= {votaciones[i].opcionA} />
                  <FormControlLabel value= {votaciones[i].opcionB} control={<Radio />} label= {votaciones[i].opcionB}  />
                  <FormControlLabel value= "NS/NC" control={<Radio />} label="NS/NC" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </Box>
      )
    }
    return items;
  }
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
        <Fab color='warning' aria-label="add">
          <AddIcon />
        </Fab>
      </Box>

    </div>
    ) : (
      <div className='homeNotLogged'>
        NO ESTÁS LOGEADO. NO PERTENECES A NINGUNA COMUNIDAD
        <img src="https://tenor.com/es/ver/deal-with-it-peppa-pig-george-daddy-mommy-gif-16388811.gif" alt="peppa" style={{padding: "100px"}}/>
        </div>
        )
        
  );
};

export default Home;
