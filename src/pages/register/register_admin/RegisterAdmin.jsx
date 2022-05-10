import React from 'react';
import './registerAdmin.css'
import { Link } from 'react-router-dom'
import Image from '../../../assets/Image.png'
import { URLBACKEND } from '../../../constants/constants';
import Alert from '@mui/material/Alert';
import { Sledding } from '@mui/icons-material';
import { StyledEngineProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import utf8 from 'utf8';
import UserContext from '../../../components/UserContext';
import { useContext, useState } from 'react';

const RegisterAdmin = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [numAdmin, setNumAdmin] = useState('');

  const [emailLog, setEmailLog] = React.useState('');
  const [passwordLog, setPasswordLog] = React.useState('');
  const [numAdminLog, setNumAdminLog] = React.useState('');

  const setBoolLogin = useContext(UserContext).setBool;
  const setNumAdminLogin = useContext(UserContext).setNumAdmin;
  const setNombreLogin = useContext(UserContext).setNombre;
  const setApellidosLogin = useContext(UserContext).setApellidos;
  const setEmailLogin = useContext(UserContext).setEmail;
  const setPasswordLogin = useContext(UserContext).setPassword;
  const setComunidades = useContext(UserContext).setComunidades;




  const setIsAdmin = React.useContext(UserContext).setIsAdmin;

  const handleRegister = async () => {
    const formbody = {
      nombre: nombre,
      apellidos: apellidos,
      email: utf8.encode(email),
      password: password,
      numAdmin: numAdmin,
    };
    console.log(formbody)

    const res = await fetch(`${URLBACKEND}/gestor/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formbody),
    });

    if (res.status === 200) {
      alert("Gestor creado correctamente")
    }
  }

  const handleLogin = async () => {
    try {


      const formbody = {
        email: utf8.encode(emailLog),
        numAdmin: numAdminLog,
        password: passwordLog,

      };
      let f = [];
      for (var property in formbody) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(formbody[property]);
        f.push(encodedKey + "=" + encodedValue);
      }
      f = f.join("&");

      const res = await fetch(`${URLBACKEND}/gestor/login?${f}`);
      let gestor = await fetch(`${URLBACKEND}/gestor/${formbody.email}`);
      let gestorData= await gestor.json();
     
      
      console.log(gestorData);
      if (gestorData != null) {

        console.log("nice user")
        sessionStorage.setItem("formBody", f)
        sessionStorage.setItem("member", "gestor")

        setIsAdmin(true);
        setBoolLogin(true);
        setNombreLogin(gestorData.nombre);
        setApellidosLogin(gestorData.apellidos);
        setEmailLogin(gestorData.email);
        setPasswordLogin(gestorData.password);
        setNumAdminLogin(gestorData.numAdmin);
        setComunidades(gestorData.comunidades);
        navigate("/home/admin");
      } else {
        alert("Usuario o contraseña incorrectos")
      }
    } catch (error) {
    console.log(error)
  }
}

// REGISTER FIELDS

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

function handleChangeNumAdmin(event) {
  setNumAdmin(event.target.value);
}

// LOGIN FIELDS
function handleChangeEmailLogin(event) {
  setEmailLog(event.target.value);
}
function handleChangePasswordLogin(event) {
  setPasswordLog(event.target.value);
}

function handleChangeNumAdminLogin(event) {
  setNumAdminLog(event.target.value);
}

return (
  <div className='register section__padding'>
    <div className="register-container">
      <h1>registro gestor</h1>
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
          <label>Contraseña</label>
          <input type="text" placeholder='Password' onChange={handleChangePassword} required />
        </div>
        <div className="register-formGroup">
          <label>Número de administrador</label>
          <input type="text" placeholder='Nº Admin' onChange={handleChangeNumAdmin} required />
        </div>
        <div className="register-button">
          <button className='register-writeButton' onClick={handleRegister}>Register</button>
        </div>

      </form>

    </div>
    <div className="register-container">
      <h1>Login gestor</h1>
      <form className='register-writeForm' autoComplete='off' >
        <div className="register-formGroup">
          <label>Email</label>
          <input type="email" placeholder='Email' onChange={handleChangeEmailLogin} required />
        </div>
        <div className="register-formGroup">
          <label>Número de administrador</label>
          <input type="text" placeholder='Nº Admin' onChange={handleChangeNumAdminLogin} required />
        </div>
        <div className="register-formGroup">
          <label>Contraseña</label>
          <input type="text" placeholder='Password' onChange={handleChangePasswordLogin} required />
        </div>
        <div className="register-button">
          <button className='reg-login-writeButton' onClick={handleLogin}>Login</button>
        </div>

      </form>

    </div>

  </div>
)
};

export default RegisterAdmin;
