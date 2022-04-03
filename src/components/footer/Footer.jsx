import React from 'react'
import './footer.css'
import nftlogo from '../../assets/logo.png'
import { AiOutlineInstagram, AiOutlineTwitter, } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../../assets/Logo.svg";
import { useContext } from 'react';
import UserContext from '../UserContext';

const Footer = () => {
  const bool = useContext(UserContext).bool;
  const id = useContext(UserContext).id;
  const nombre = useContext(UserContext).nombre;
  const email = useContext(UserContext).email;
  const password = useContext(UserContext).password;
  const piso = useContext(UserContext).piso;
  const rol = useContext(UserContext).rol;
  const comunidades = useContext(UserContext).comunidades;

  return (
    <div className='footer section__padding'>
      <div className="footer-links">
        <div className="footer-links_logo">
          {bool ? (
            <div className="footer-data">
              <p>{nombre}</p>
              <p>{email}</p>
              </div>
          ) : (
            <>
            </>
          )}
          <div style={{ justifyContent: 'center' }}>
            <img src={logo} alt="logo" style={{ width: '60px' }} />
            <p>TuComunidad</p>
          </div>
          

        </div>

      </div>
      <div className="footer-copyright">
        <div>
          <p> © {(new Date().getFullYear())} TuComunidad</p>
        </div>
        <div>
          <AiOutlineTwitter size={25} color='white' className='footer-icon' />
          <RiDiscordFill size={25} color='white' className='footer-icon' />
          <FaTelegramPlane size={25} color='white' className='footer-icon' />
        </div>

      </div>
    </div>
  )
}

export default Footer
