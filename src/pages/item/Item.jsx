import React, { useContext } from 'react';
import './item.css'
import item from '../../assets/item1.png'
import padel from '../../assets/padel.jpg'
import piscina from '../../assets/piscina.jpg';
import { URLBACKEND } from '../../constants/constants';
import UserContext from '../../components/UserContext';
import ComunityContext from '../../components/ComunityContext';
const Item = (props) => {

  const instalaciones = useContext(ComunityContext).instalaciones;
  const [hora, sethora] = React.useState("");
  const [marked, setMarked] = React.useState(false);

  var classBtn = "primary-btn";

  const handleClick = (event) => {
    sethora(event.target.id);
    setMarked(!marked);
  }

  const id = useContext(UserContext).id;
  const comunityCode = useContext(ComunityContext).comunityCode;
  console.log(useContext(UserContext).id);
  let url = window.location.pathname;

  const handleReserva = async (hora) => {
    const res = await fetch(`${URLBACKEND}/reserva/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        usuario: id,
        horaInicio: hora,
        comunityCode: comunityCode,
        instalacionId: instalaciones[url.charAt(url.length - 1)].id
      }
      )
    }
    );
    const resData = await res.json();
    console.log(resData);
    if (res.status === 200 && resData == true) {
      alert("Reserva realizada correctamente");
    }else{
      alert("No se pudo realizar la reserva");
    }
    console.log(res);
  }

  console.log(instalaciones[url.charAt(url.length - 1)].nombre);
  var foto = "";
  if (instalaciones[url.charAt(url.length - 1)].nombre == "piscina") {
    foto = piscina;
  } else {
    foto = padel;
  }


  return (
    <div className='item'>
      <div className='item section__padding'>
        <div className="item-image">
          <img src={foto} alt="item" />
        </div>
        <div className="item-content">
          <div className="item-content-title">
            <h1>{instalaciones[url.charAt(url.length - 1)].nombre}</h1>
            <p>Desde <span>{instalaciones[url.charAt(url.length - 1)].precio}€/hora</span> </p>
          </div>

          <div className="item-content-detail">
            <p></p>
          </div>
          <div className="item-content-buy">
            <button className={classBtn} id="800" onClick={handleClick}>08:00</button>
            <button className={classBtn} id="900" onClick={handleClick}>09:00</button>
            <button className={classBtn} id="1000" onClick={handleClick}>10:00</button>
            <button className={classBtn} id="1100" onClick={handleClick}>11:00</button>
            <button className={classBtn} id="1200" onClick={handleClick}>12:00</button>
            <button className={classBtn} id="1300" onClick={handleClick}>13:00</button>
            <button className={classBtn} id="1400" onClick={handleClick}>14:00</button>
            <button className={classBtn} id="1500" onClick={handleClick}>15:00</button>
            <button className={classBtn} id="1600" onClick={handleClick}>16:00</button>
            <button className={classBtn} id="1700" onClick={handleClick}>17:00</button>
            <button className={classBtn} id="1800" onClick={handleClick}>18:00</button>
            <button className={classBtn} id="1900" onClick={handleClick}>19:00</button>
            <button className={classBtn} id="2000" onClick={handleClick}>20:00</button>

            <button className="secondary-btn" onClick={() => { handleReserva(hora) }}>Reservar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
