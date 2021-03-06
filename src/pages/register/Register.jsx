import React from 'react';
import './register.css'
import { Link } from 'react-router-dom'
import Image from '../../assets/Image.png'
import { URLBACKEND } from '../../constants/constants';
import Alert from '@mui/material/Alert';
import { Sledding } from '@mui/icons-material';
import { StyledEngineProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import utf8 from 'utf8';

const Register = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = React.useState('');
  const [apellidos, setApellidos] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [piso, setPiso] = React.useState('');
  const [comunidades, setComunidades] = React.useState([]);

  const handleRegister = async () => {

    const formbody = {
      nombre: nombre,
      apellidos: apellidos,
      email: utf8.encode(email),
      password: password,
      piso: piso,
      comunidades: comunidades
    };
    console.log(formbody)
    // const comFormBody = {
    //   email: formbody.email,
    //   password: formbody.password,
    //   comunitycode: comunidad,
    // };
    // console.log(comFormBody)
    const res = await fetch(`${URLBACKEND}/usuario/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formbody),
    });
    // const comunityRes = await fetch(`${URLBACKEND}/usuario/comunidad`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(comFormBody),
    // });
    navigate("/login");
  }


  function handleChangeNombre(event) {
    setNombre(event.target.value);
  }
  function handleChangeApellidos(event) {
    setApellidos(event.target.value);
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleChangePassword(event) {
    setPassword(event.target.value);
  }
  function handleChangePiso(event) {
    setPiso(event.target.value);
  }
  function handleChangeComunidades(event) {
    setComunidades((event.target.value).split(", "));
  }

  return (
    <div className='register section__padding'>
      <div className="register-container">
        <h1>register</h1>
        <form className='register-writeForm' autoComplete='off' >
          <div className="register-formGroup">
            <label>Nombre</label>
            <input type="text" placeholder='Nombre' onChange={handleChangeNombre} required />
          </div>
          <div className="register-formGroup">
            <label>Apellidos</label>
            <input type="text" placeholder='Apellidos' onChange={handleChangeApellidos} required />
          </div>
          <div className="register-formGroup">
            <label>Email</label>
            <input type="email" placeholder='Email' onChange={handleChangeEmail} required />
          </div>
          <div className="register-formGroup">
            <label>Contrase??a</label>
            <input type="text" placeholder='Password' onChange={handleChangePassword} required />
          </div>
          <div className="register-formGroup">
            <label>Piso</label>
            <input type="text" placeholder='PisoLetra' onChange={handleChangePiso} required />
          </div>
          <div className="register-formGroup">
            <label>Comunidad</label>
            <input type="text" placeholder='C??digo de tu Comunidad' onChange={handleChangeComunidades} required />
          </div>
          <div className="register-button">
            <button className='register-writeButton' onClick={handleRegister}>Register</button>
            <Link to="/login">
              <button className='reg-login-writeButton' >Login</button>
            </Link>
          </div>
          
        </form>

      </div>
    </div>
  )
};

export default Register;
