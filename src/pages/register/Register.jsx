import React from 'react';
import './register.css'
import { Link } from 'react-router-dom'
import Image from '../../assets/Image.png'
import { URLBACKEND } from '../../constants/constants';

const Register = () => {
  const [nombre, setNombre] = React.useState('');
  const [apellidos, setApellidos] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [comunidad, setComunidad] = React.useState('');

  const handleRegister = async () => {
    const formbody = {};
    formbody.nombre = nombre;
    formbody.apellidos = apellidos.split(' ');
    formbody.email = email;
    formbody.password = password;
    formbody.comunidad = comunidad;
    console.log(formbody)
    const res = await fetch(`${URLBACKEND}/usuario/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formbody,
    });
    
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
  function handleChangeComunidad(event) {
    setComunidad(event.target.value);
  }

  return (
    <div className='register section__padding'>
      <div className="register-container">
        <h1>register</h1>
        <p className='upload-file'>Upload Profile pic</p>
        <div className="upload-img-show">
          <img src={Image} alt="banner" />
          <p>browse media on your device</p>
        </div>
        <form className='register-writeForm' autoComplete='off' >
          <div className="register-formGroup">
            <label>Upload</label>
            <input type="file" className='custom-file-input'
            />
          </div>
          <div className="register-formGroup">
            <label>Nombre</label>
            <input type="text" placeholder='Nombre' onChange={handleChangeNombre} required/>
          </div>
          <div className="register-formGroup">
            <label>Apellidos</label>
            <input type="text" placeholder='Apellidos' onChange={handleChangeApellidos} required/>
          </div>
          <div className="register-formGroup">
            <label>Email</label>
            <input type="email" placeholder='Email' onChange={handleChangeEmail} required/>
          </div>
          <div className="register-formGroup">
            <label>Contraseña</label>
            <input type="text" placeholder='Password' onChange={handleChangePassword} required/>
          </div>
          <div className="register-formGroup">
            <label>Comunidad</label>
            <input type="text" placeholder='Comunidad' onChange={handleChangeComunidad} required/>
          </div>
          <div className="register-button">
            <button className='register-writeButton' onClick={handleRegister}>register</button>
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
