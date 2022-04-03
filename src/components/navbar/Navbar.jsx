import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Logo.svg'
import { Link } from "react-router-dom";
import UserContext from '../UserContext';
import { useContext } from 'react';
import Settings from '@mui/icons-material/Settings';
const Menu = () => (
  <>
    <Link to="/"><p className='home'>Home </p> </Link>
    <Link to="/instalaciones"><p className='home'>Instalaciones</p></Link>

  </>
)

const Navbar = () => {
  const bool = useContext(UserContext).bool;
  const setBool = useContext(UserContext).setBool;
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleLogout = () => {
    setBool(false);
    sessionStorage.removeItem("formBody");
  }

  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" style={{ width: '60px' }} />
          <Link to="/">
            <h1>TuComunidad</h1>
          </Link>
        </div>
        <div className="navbar-links_container">
          {/* <input type="text" placeholder='Search Item Here' autoFocus={true} /> */}
          <Menu />

        </div>
      </div>
      <div className="navbar-sign">
        {bool ? (
          <>
            {bool && <Link to="/"><button type="button" className="primary-btn" onClick={handleLogout}>Logout</button></Link>}
          </>
        ) : (
          <>
            <Link to="/login">
              <button type='button' className='primary-btn' >Sign In</button>
            </Link>
            <Link to="/register">
              <button type='button' className='secondary-btn'>Sign Up</button>
            </Link>
          </>
        )}
      </div>
      <div className="navbar-menu">
        {toggleMenu ?
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center" >
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
            <div className="navbar-menu_container-links-sign">
              {bool ? (
                <>
                  <Link to="/create">
                    <button type='button' className='primary-btn' >Create</button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button type='button' className='primary-btn'>Sign In</button>
                  </Link>
                  <Link to="/register">
                    <button type='button' className='secondary-btn'>Sign Up</button>
                  </Link>
                </>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

