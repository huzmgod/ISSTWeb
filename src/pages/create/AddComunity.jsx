
import './create.css'
import React from 'react';
import Image from '../../assets/Image.png'
import { URLBACKEND } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../../components/UserContext';
import ComunityContext from '../../components/ComunityContext';

const AddComunity = (props) => {
  const navigate = useNavigate();

  const numAdmin = useContext(UserContext).numAdmin;
  const mail = useContext(UserContext).email;
  const comunidades = useContext(UserContext).comunidades;
  const setComunidades = useContext(UserContext).setComunidades;
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [cpostal, setCpostal] = useState('');
  const [comCode, setComCode] = useState('');

  const utf8 = require('utf8');

  const handleCalle = (event) => {
    setCalle(event.target.value);
  }

  const handleNumero = (event) => {
    setNumero(event.target.value);
  }
  const handleComCode = (event) => {
    setComCode(event.target.value);
  }
  const handleCPostal = (event) => {
    setCpostal(event.target.value);
  }

  const handleNewComunity = async () => {
    const formbody = {
      gestor: numAdmin,
      calle: calle,
      numero: numero,
      cpostal: cpostal,
      comunityCode: comCode,
    };
    const res = await fetch(`${URLBACKEND}/comunidad/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formbody),
    });

    const details = {
      email: mail,
      comunidad: comCode,
    };

    let formBody2 = [];
    for (var property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(utf8.encode(details[property]));
      formBody2.push(encodedKey + "=" + encodedValue);
    }

    formBody2 = formBody2.join("&");

    const res2 = await fetch(`${URLBACKEND}/gestor/comunidad?${formBody2}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("hola");
    navigate("/home/admin");
  }

  return (

    <div className="container">
      <div className="cont1">
        <div className='create section__padding'>
          <div className="create-container">
            <h1>Gestionar Nueva Comunidad</h1>
            <form className='writeForm' autoComplete='off'>
              <div className="formGroup">
                <label>Código de gestor</label>
                <input type="text" value={numAdmin} autoFocus={true} readOnly/>
              </div>
              <div className="formGroup">
                <label>Calle</label>
                <input type="text" rows={2} placeholder='Calle' onChange={handleCalle} required></input>
              </div>
              <div className="formGroup">
                <label>Número</label>
                <input type="text" rows={2} placeholder='Número' onChange={handleNumero} required></input>
              </div>
              <div className="formGroup">
                <label>Código Postal</label>
                <input type="text" rows={2} placeholder='Código Postal' onChange={handleCPostal} required></input>
              </div>
              <div className="formGroup">
                <label>Código Comunidad</label>
                <input type="text" rows={2} placeholder='Código de Comunidad' onChange={handleComCode} required></input>
              </div>
              <button className='writeButton' onClick={handleNewComunity}>Añadir Comunidad</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AddComunity;
