import React from 'react'
import './bids.css'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import bids1 from '../../assets/bids1.png'
import bids2 from '../../assets/bids2.png'
import bids3 from '../../assets/bids3.png'
import bids4 from '../../assets/bids4.png'
import bids5 from '../../assets/bids5.png'
import bids6 from '../../assets/bids6.png'
import bids7 from '../../assets/bids7.png'
import bids8 from '../../assets/bids8.png'
import { Link } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const Bids = ({ title }) => {
  return (
    <div className='bids section__padding'>
      <div className="bids-container">
        <div className="bids-container-text">
          <h1>{title}</h1>
        </div>
        <div className="bids-container-card">
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids1} alt="" />
                <Link to={`/post/123`}>
                  <h2 className="bids-title">Padel</h2>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <div className='time-row'>
                  <ScrollMenu >
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>
                    <button className='time-button'>09:30</button>

                  </ScrollMenu>

                </div>
                <p>1.25 <span>ETH</span></p>
                <p> <AiFillHeart /> 92</p>
              </div>
            </div>
          </div>

          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids3} alt="" />
                <Link to={`/post/123`}>
                  <h2 className="bids-title">Padel</h2>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.55 <span>ETH</span></p>
                <p> <AiFillHeart /> 55</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids5} alt="" />
                <Link to={`/post/123`}>
                  <h2 className="bids-title">Piscina</h2>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.09 <span>ETH</span></p>
                <p> <AiFillHeart /> 22</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids6} alt="" />
                <Link to={`/post/123`}>
                  <h2 className="bids-title">Piscina</h2>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.90 <span>ETH</span></p>
                <p> <AiFillHeart /> 71</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids7} alt="" />
                <Link to={`/post/123`}>
                  <h2 className="bids-title">Piscina</h2>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <p>0.52 <span>ETH</span></p>
                <p> <AiFillHeart /> 63</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="load-more">
        <button>Load More</button>
      </div>
    </div>
  )
}

export default Bids 
