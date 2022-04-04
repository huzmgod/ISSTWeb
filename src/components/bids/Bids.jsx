import React, { useContext } from 'react'
import './bids.css'
import { AiFillHeart} from "react-icons/ai";
import piscina from '../../assets/piscina.jpg'
import padel from '../../assets/padel.jpg'
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

const Bids = (props) => {
  const bool = useContext(UserContext).bool;
  const timeDict = {
    100: "1:00",
    200: "2:00",
    300: "3:00",
    400: "4:00",
    500: "5:00",
    600: "6:00",
    700: "7:00",
    800: "8:00",
    900: "9:00",
    1000: "10:00",
    1100: "11:00",
    1200: "12:00",
    1300: "13:00",
    1400: "14:00",
    1500: "15:00",
    1600: "16:00",
    1700: "17:00",
    1800: "18:00",
    1900: "19:00",
    2000: "20:00",
    2100: "21:00",
    2200: "22:00",
    2300: "23:00",
    2400: "00:00",
  }

  const facilityCard = () => {
    let items = [];
    let zonas = {
      piscina: <img src={piscina} alt="piscina" />,
      padel: <img src={padel} alt="padel" />,
    }
    for (let i = 0; i < props.instalaciones.length; i++) {
      console.log(props.instalaciones[i].nombre)
      items.push(
        <React.Fragment key={i}>
          <div className="bids-container-card">
            <div className="card-column" >
              <div className="bids-card">
                <div className="bids-card-top">
                  <Link to={`/instalaciones/${i}`}>
                    {/* <img src={piscina} alt="piscina" /> */}
                    {zonas[props.instalaciones[i].nombre]}
                  </Link>
                  <Link to={`/instalaciones/${i}`}>
                    <h2 className="bids-title">{props.instalaciones[i].nombre}</h2>
                  </Link>
                </div>
                <div className="bids-card-bottom">
                  <p>{props.instalaciones[i].precio} <span>€</span></p>
                  <p> <AiFillHeart /> 92</p>
                </div>
                <div className="bids-card-bottom">
                  <p>Hora de Apertura</p>
                  <p>{timeDict[props.instalaciones[i].horaInicio]} <span>h</span></p>
                </div>
                <div className="bids-card-bottom">
                  <p>Hora de Cierre</p>
                  <p>{timeDict[props.instalaciones[i].horaFin]} <span>h</span></p>
                </div>
                <div className="bids-card-bottom">
                  <p>Duración de la sesión</p>
                  <p>{props.instalaciones[i].intervalo} <span>min</span></p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
    return items;
  }
  return (
    bool ? (
      <div className='bids section__padding'>
        <div className="bids-container">
          <div className="bids-container-text">
            <h1>{props.AiOutlineHearttitle}</h1>
          </div>
          {facilityCard()}
        </div>
      </div>
    ) : (
      <div className='homeNotLogged'>
        NO HAS INICIADO SESIÓN. NO PERTENECES A NINGUNA COMUNIDAD
        <img src="https://tenor.com/es/ver/deal-with-it-peppa-pig-george-daddy-mommy-gif-16388811.gif" alt="peppa" style={{ padding: "100px" }} />
      </div>
    )
  )
}

export default Bids 
