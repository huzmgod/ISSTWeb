import './App.css';
import { Footer } from './components'
import { useState, useEffect } from 'react';
import UserContext from './components/UserContext';
import RouteConfig from './RouteConfig';
import ComunityContext from './components/ComunityContext';
import { URLBACKEND } from './constants/constants';


function App() {
  const [numAdmin, setNumAdmin] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [bool, setBool] = useState(false);
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [piso, setPiso] = useState(null);
  const [rol, setRol] = useState(0);
  const [comunidades, setComunidades] = useState([]);

  const [idCom, setIdCom] = useState(0);
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState(0);
  const [cpostal, setCpostal] = useState("");
  const [comunityCode, setComunityCode] = useState("");
  const [posts, setPosts] = useState([]);
  const [votaciones, setVotaciones] = useState([]);
  const [instalaciones, setInstalaciones] = useState([]);
  const [reuniones, setReuniones] = useState([]);

  useEffect(() => {
    var formBody = sessionStorage.getItem("formBody")
    var member = sessionStorage.getItem("member")
    if (formBody != null) {
      async function fetchData() {
        try {
          if (member == "persona") {
            const res = await fetch(`${URLBACKEND}/usuario/login?${formBody}`);
            // if (res.status === 200) {
            //   const resData = await res.json();
            //   if (resData != null) {


            //     setBool(true);
            //     setId(resData.id);
            //     setNombre(resData.nombre);
            //     setApellidos(resData.apellidos);
            //     setEmail(resData.email);
            //     setPassword(resData.password);
            //     setPiso(resData.piso);
            //     setRol(resData.rol);
            //     setComunidades(resData.comunidades);

            //     const comunityData = await fetch(`${URLBACKEND}/comunidad/${resData.comunidades[0]}`);
            //     console.log(comunityData)
            //     const comunity = await comunityData.json();
            //     console.log(comunity)
            //     setIdCom(comunity.id);
            //     setCalle(comunity.calle);
            //     setNumero(comunity.numero);
            //     setCpostal(comunity.cpostal);
            //     setComunityCode(comunity.comunityCode);
            //     setPosts(comunity.posts);
            //     setVotaciones(comunity.votaciones);
            //     setInstalaciones(comunity.instalaciones);
            //   }
            // }
          } else {
            // const res = await fetch(`${URLBACKEND}/gestor/login?${formBody}`);
            // if (res.status === 200) {
            //   const resData = await res.json();
            //   if (resData != null) {
            //     setIsAdmin(true);
            //     setBool(true);
            //     setId(resData.id);
            //     setNombre(resData.nombre);
            //     setApellidos(resData.apellidos);
            //     setEmail(resData.email);
            //     setPassword(resData.password);
            //     setNumAdmin(resData.numAdmin);
            //     setComunidades(resData.comunidades);

            //   }
            // }
          }
        } catch (error) {
          return console.error(error);
        }
      }
      fetchData();
    }
  }, [])

  return (

    <div>
      <UserContext.Provider value={{
        numAdmin: numAdmin,
        setNumAdmin: setNumAdmin,
        isAdmin: bool,
        setIsAdmin: setIsAdmin,
        bool: bool,
        setBool: setBool,
        id: id,
        setId: setId,
        nombre: nombre,
        setNombre: setNombre,
        apellidos: apellidos,
        setApellidos: setApellidos,
        email: email,
        setEmail: setEmail,
        password: password,
        setPassword: setPassword,
        piso: piso,
        setPiso: setPiso,
        rol: rol,
        setRol: setRol,
        comunidades: comunidades,
        setComunidades: setComunidades
      }}>
        <ComunityContext.Provider value={{
          idCom: idCom,
          calle: calle,
          numero: numero,
          cpostal: cpostal,
          comunityCode: comunityCode,
          posts: posts,
          votaciones: votaciones,
          instalaciones: instalaciones,
          reuniones:reuniones,
          setIdCom: setIdCom,
          setCalle: setCalle,
          setNumero: setNumero,
          setCpostal: setCpostal,
          setComunityCode: setComunityCode,
          setPosts: setPosts,
          setVotaciones: setVotaciones,
          setInstalaciones: setInstalaciones,
          setReuniones:reuniones
        }}>
          <RouteConfig />
          <Footer />
        </ComunityContext.Provider>
      </UserContext.Provider>
    </div>

  );
}

export default App;
