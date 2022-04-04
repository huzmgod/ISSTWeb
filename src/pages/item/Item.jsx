import React from 'react';
import './item.css'
import item from '../../assets/item1.png'
import padel from '../../assets/padel.jpg'

const Item = (props) => {

  return( 
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
              <button className="primary-btn">08:00</button>
              <button className="primary-btn">09:00</button>
              <button className="primary-btn">10:00</button>
              <button className="primary-btn">11:00</button>
              <button className="primary-btn">12:00</button>
              <button className="primary-btn">13:00</button>
              <button className="primary-btn">14:00</button>
              <button className="primary-btn">15:00</button>
              <button className="primary-btn">16:00</button>
              <button className="primary-btn">17:00</button>
              <button className="primary-btn">18:00</button>
              <button className="primary-btn">19:00</button>
              <button className="primary-btn">20:00</button>
              <button className="secondary-btn">Reservar</button>
            </div>
          </div>
      </div>
    </div>
  )
};

export default Item;
