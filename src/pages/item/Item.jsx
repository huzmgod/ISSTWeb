import React from 'react';
import './item.css'
import item from '../../assets/item1.png'
import padel from '../../assets/padel.jpg'

const Item = (props) => {

  const [pulsado, setPulsado] = React.useState("");
  const [marked, setMarked] = React.useState(false);

  var classBtn = "primary-btn";

  const handleClick = (event) => {
    setPulsado(event.target.id);
    setMarked(!marked);
  }

 
  console.log(pulsado);
  return (
    <div className='item'>
      <div className='item section__padding'>
        <div className="item-image">
          <img src={padel} alt="item" />
        </div>
        <div className="item-content">
          <div className="item-content-title">
            <h1>Pádel: Pista 1</h1>
            <p>Desde <span>5€/hora</span> </p>
          </div>

          <div className="item-content-detail">
            <p></p>
          </div>
          <div className="item-content-buy">
            <button className={classBtn} id="8" onClick={handleClick}>08:00</button>
            <button className={classBtn} id="9" onClick={handleClick}>09:00</button>
            <button className={classBtn} id="10" onClick={handleClick}>10:00</button>
            <button className={classBtn} id="11" onClick={handleClick}>11:00</button>
            <button className={classBtn} id="12" onClick={handleClick}>12:00</button>
            <button className={classBtn} id="13" onClick={handleClick}>13:00</button>
            <button className={classBtn} id="14" onClick={handleClick}>14:00</button>
            <button className={classBtn} id="15" onClick={handleClick}>15:00</button>
            <button className={classBtn} id="16" onClick={handleClick}>16:00</button>
            <button className={classBtn} id="17" onClick={handleClick}>17:00</button>
            <button className={classBtn} id="18" onClick={handleClick}>18:00</button>
            <button className={classBtn} id="19" onClick={handleClick}>19:00</button>
            <button className={classBtn} id="20" onClick={handleClick}>20:00</button>

            <button className="secondary-btn">Reservar</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Item;
