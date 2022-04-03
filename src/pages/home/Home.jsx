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
import ComunityContext from '../../components/ComunityContext';
import { useContext } from 'react';
import UserContext from '../../components/UserContext';

const Home = () => {
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
              <FormControlLabel control={<Checkbox size="small" />} label={votaciones[i].opcionA} />
              <FormControlLabel control={<Checkbox size="small" />} label={votaciones[i].opcionB} />
            </Box>
          </Box>
        </Box>
      )
    }
    return items;
  }
  return (
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
          <AddIcon/>
        </Fab>
      </Box>

    </div>
  );
};

export default Home;
