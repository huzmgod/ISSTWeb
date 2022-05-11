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
    mantainSession();
  }, [])


  const mantainSession = async () => {
    var formBody = sessionStorage.getItem("formBody")
    var member = sessionStorage.getItem("member")
    if (formBody != null) {
      async function fetchData() {
        try {
          if (member == "persona") {
            const res = await fetch(`${URLBACKEND}/usuario/login?${formBody}`);
            if (res.status === 200) {
              const resData = await res.json();
              if (resData != null) {
                setBool(true);
                const idGet = await getIdByMail(resData.email);
                setId(idGet);
               
                setNombre(resData.nombre);
                setApellidos(resData.apellidos);
                setEmail(resData.email);
                setPassword(resData.password);
                setPiso(resData.piso);
                setRol(resData.rol);
                setComunidades(resData.comunidades);

                const comunityData = await fetch(`${URLBACKEND}/comunidad/${resData.comunidades[0]}`);
                const comunity = await comunityData.json();
                setIdCom(comunity.id);
                setCalle(comunity.calle);
                setNumero(comunity.numero);
                setCpostal(comunity.cpostal);
                setComunityCode(comunity.comunityCode);
                await setGadgets(comunity.comunityCode);
              }
            }
          } else {
            const res = await fetch(`${URLBACKEND}/gestor/login?${formBody}`);
            if (res.status === 200) {
              const resData = await res.json();
              if (resData != null) {
                setIsAdmin(true);
                setBool(true);
                const idGet = await getIdByMail(resData.email);
                setId(idGet);
                setNombre(resData.nombre);
                setApellidos(resData.apellidos);
                setEmail(resData.email);
                setPassword(resData.password);
                setNumAdmin(resData.numAdmin);
                setComunidades(resData.comunidades);

              }
            }
          }
        } catch (error) {
          return console.error(error);
        }
      }
      fetchData();
    }
  }

  const getIdByMail = async (mail) => {
    const res = await fetch(`${URLBACKEND}/usuario`);
    const usuarios = await res.json();

    for (const item of usuarios) {
      if (item.email == mail) {
        return item.id;
      }
    }
  }

  const setGadgets = async (comunityCode) => {
    const res1 = await fetch(`${URLBACKEND}/post`);
    const res2 = await fetch(`${URLBACKEND}/reunion`);
    const res3 = await fetch(`${URLBACKEND}/instalacion`);
    const res4 = await fetch(`${URLBACKEND}/votacion`);

    const posts = await res1.json();
    const reuniones = await res2.json();
    const instalaciones = await res3.json();
    const votaciones = await res4.json();

    const usefulPosts = [];
    const usefulReuniones = [];
    const usefulInstalaciones = [];
    const usefulVotaciones = [];

    for (const item of posts) {
      if (item.comunityCode == comunityCode) {
        usefulPosts.push(item);
      }
    }

    for (const item of reuniones) {
      if (item.comunityCode == comunityCode) {
        usefulReuniones.push(item);
      }
    }

    for (const item of instalaciones) {

      if (item.comunityCode == comunityCode) {
        usefulInstalaciones.push(item);
      }
    }

    for (const item of votaciones) {
      if (item.comunityCode == comunityCode) {
        usefulVotaciones.push(item);
      }
    }
    setPosts(usefulPosts);
    setReuniones(usefulReuniones);
    setInstalaciones(usefulInstalaciones);
    setVotaciones(usefulVotaciones);


  };

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
        setComunidades: setComunidades,
        mantainSession: mantainSession,
        getIdByMail:getIdByMail
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
          reuniones: reuniones,
          setIdCom: setIdCom,
          setCalle: setCalle,
          setNumero: setNumero,
          setCpostal: setCpostal,
          setComunityCode: setComunityCode,
          setPosts: setPosts,
          setVotaciones: setVotaciones,
          setInstalaciones: setInstalaciones,
          setReuniones: setReuniones,
          setGadgets: setGadgets
        }}>
          <RouteConfig />
          <Footer />
        </ComunityContext.Provider>
      </UserContext.Provider>
    </div>

  );
}

export default App;
