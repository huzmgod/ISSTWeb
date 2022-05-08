
import './create.css'
import React from 'react';
import Image from '../../assets/Image.png'
import { URLBACKEND } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../../components/UserContext';

const AddComunity = (props) => {
  const navigate = useNavigate();

  const numAdmin = useContext(UserContext).numAdmin;
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [cpostal, setCpostal] = useState('');
  const [comCode, setComCode] = useState('');

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
      gestorCode: numAdmin,
      calle: calle,
      numero: numero,
      cpostal: cpostal,
      comCode: comCode

    };
  
    const res = await fetch(`${URLBACKEND}/comunidad/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formbody),
    });
    alert(res)
    if(res == "Comunidad registrada con éxito"){
      navigate("/home/admin");    
    }
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
                <input type="text" value={numAdmin} autoFocus={true} />
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
