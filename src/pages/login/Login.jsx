import React, { useContext } from 'react';
import './login.css'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { makeStyles } from '@mui/styles';
import UserContext from '../../components/UserContext';
import {
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import ComunityContext from '../../components/ComunityContext';
// Constants
import { URLBACKEND } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({
  input: {
    color: "white",
    fontSize: 10
  }
});

export const Login = () => {
  const navigate = useNavigate();
  // const bool = useContext(UserContext).bool;
  // const id = useContext(UserContext).id;
  // const nombre = useContext(UserContext).nombre;
  // const apellidos = useContext(UserContext).apellidos;
  // const email = useContext(UserContext).email;
  // const password = useContext(UserContext).password;
  // const piso = useContext(UserContext).piso;
  // const rol = useContext(UserContext).rol;
  // const comunidades = useContext(UserContext).comunidades;
  const setBool = useContext(UserContext).setBool;
  const setId = useContext(UserContext).setId;
  const setNombre = useContext(UserContext).setNombre;
  const setApellidos = useContext(UserContext).setApellidos;
  const setEmail = useContext(UserContext).setEmail;
  const setPassword = useContext(UserContext).setPassword;
  const setPiso = useContext(UserContext).setPiso;
  const setRol = useContext(UserContext).setRol;
  const setComunidades = useContext(UserContext).setComunidades;
  const getIdByMail = useContext(UserContext).getIdByMail;

  // const idCom = useContext(ComunityContext).idCom;
  // const calle = useContext(ComunityContext).calle;
  // const numero = useContext(ComunityContext).numero;
  // const cpostal = useContext(ComunityContext).cpostal;
  // const comunityCode = useContext(ComunityContext).comunityCode;
  // const posts = useContext(ComunityContext).posts;
  // const votaciones = useContext(ComunityContext).votaciones;
  // const instalaciones = useContext(ComunityContext).instalaciones;
  const setIdCom = useContext(ComunityContext).setIdCom;
  const setCalle = useContext(ComunityContext).setCalle;
  const setNumero = useContext(ComunityContext).setNumero;
  const setCpostal = useContext(ComunityContext).setCpostal;
  const setComunityCode = useContext(ComunityContext).setComunityCode;
  const setPosts = useContext(ComunityContext).setPosts;
  const setVotaciones = useContext(ComunityContext).setVotaciones;
  const setInstalaciones = useContext(ComunityContext).setInstalaciones;
  const setReuniones = useContext(ComunityContext).setReuniones;
  const setGadgets = useContext(ComunityContext).setGadgets;

  // const styleClasses = useStyle();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  // const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);


  const LoginSchema = Yup.object().shape({
    usernameOrEmail: Yup
      .string("Introduce tu email")
      .required("Email requerido")
      .test('Username check', "Email inválido", async (value) => {
        if (value) {
          if (value.replace(/[A-Z]|[a-z]|[0-9]|[@]|[.]/g, "") === "") {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      }),
    password: Yup
      .string("Introduce tu contraseña")
      .required("Contraseña requerida")
  });


  const formik = useFormik({
    initialValues: {
      usernameOrEmail: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const details = {
        email: values.usernameOrEmail,
        password: values.password,
      };
      let formBody = [];
      for (var property in details) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      const res = await fetch(`${URLBACKEND}/usuario/login?${formBody}`);

      if (res.status === 200) {
        const resData = await res.json();
        console.log(resData)
        if (resData != null) {
          console.log("nice user")
          sessionStorage.setItem("formBody", formBody)
          sessionStorage.setItem("member", "persona")
          console.log(resData);
          setBool(true);
          const IdGet = await getIdByMail(resData.email);
          setId(IdGet);
          setNombre(resData.nombre);
          setApellidos(resData.apellidos);
          setEmail(resData.email);
          setPassword(resData.password);
          setPiso(resData.piso);
          setRol(resData.rol);
          setComunidades(resData.comunidades);
          console.log(resData.comunidades[0]);

          const comunityData = await fetch(`${URLBACKEND}/comunidad/${resData.comunidades[0]}`);
          const comunity = await comunityData.json();
          setIdCom(comunity.id);
          setCalle(comunity.calle);
          setNumero(comunity.numero);
          setCpostal(comunity.cpostal);
          setComunityCode(comunity.comunityCode);
          setGadgets(comunity.comunityCode)
          navigate("/");
        }
      } else {
        alert("Usuario o contraseña incorrectos")
      }

    }
  }
  );




  const { errors, touched, handleSubmit, getFieldProps } = formik;
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (

    <>

      <div className='login section__padding'>
        <div className="login-container">
          <FormikProvider value={formik}>
            <h1>Login</h1>
            <form className='login-writeForm' autoComplete='off' onSubmit={handleSubmit}>
              <div className="login-formGroup">
                <label>Email</label>
                <TextField
                  fullWidth
                  autoComplete="email"
                  type="text"
                  {...getFieldProps('usernameOrEmail')}
                  error={Boolean(touched.usernameOrEmail && errors.usernameOrEmail) || loginError}
                  helperText={touched.usernameOrEmail && errors.usernameOrEmail}

                />
              </div>
              <div className="login-formGroup">
                <label>Password</label>
                <TextField
                  fullWidth
                  autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  {...getFieldProps('password')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  error={Boolean(touched.password && errors.password) || loginError}
                  helperText={loginError ? 'Username or password incorrect' : (touched.password && errors.password)}
                />
              </div>

              <div className="login-button">
                <Link to="/home">
                  <button className='login-writeButton' type='submit' onClick={handleSubmit}>Login</button>
                </Link>
                <Link to="/register">
                  <button className='login-reg-writeButton' type='submit'>Register</button>
                </Link>

              </div>
            </form>
          </FormikProvider>


        </div>
      </div>

    </>

  )
};

export default Login;
