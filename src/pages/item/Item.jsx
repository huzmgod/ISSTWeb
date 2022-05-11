import React from 'react';
import './item.css'
import item from '../../assets/item1.png'
import padel from '../../assets/padel.jpg'

const Item = (props) => {
  const botones = () => {
    let form = [];
    for (let i = 8; i < 21; i++) {
      form.push(<button className="primary-btn" id={"hora" + (i - 8)}>{(i < 10 ? "0" : "") + i + ":00"}</button>)
    }
    return form;
  }


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
            {botones()}
            <button className="secondary-btn">Reservar</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Item;
