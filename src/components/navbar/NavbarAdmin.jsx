import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Logo.svg'
import { Link } from "react-router-dom";
import UserContext from '../UserContext';
import { useContext } from 'react';
const Menu = () => (
  <>
    <Link to="/home/admin"><p className='home2'>Home </p> </Link>
  </>
)

const NavbarAdmin = () => {
  const bool = useContext(UserContext).bool;
  const setBool = useContext(UserContext).setBool;
  const setIsAdmin = useContext(UserContext).setIsAdmin;
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleLogout = () => {
    setBool(false);
    setIsAdmin(false);

    sessionStorage.removeItem("formBody");
    sessionStorage.removeItem("member");
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
              <button type='button' className='primary-btn'>Sign In</button>
            </Link>
            <Link to="/register">
              <button type='button' className='secondary-btn'>Sign Up</button>
            </Link>
            <Link to="/registerAdmin">
              <button type='button' className='secondary-btn'>Acceso Administradores</button>
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
                    <button type='button' className='primary-btn'>Create</button>
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
                  <Link to="/registerAdmin">
                    <button type='button' className='secondary-btn'>Sign Up As Admin</button>
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

export default NavbarAdmin

