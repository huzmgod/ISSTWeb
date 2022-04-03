import './App.css';
import { Navbar, Footer } from './components'
import { Home, Profile, Item, Create, Login, Register } from './pages'
import NavbarLogged from './components/navbarLogged/NavbarLogged';
import Instalaciones from './instalaciones/instalaciones';
import { useState } from 'react';
import UserContext from './components/UserContext';
import RouteConfig from './RouteConfig';

function App() {
  const [bool, setBool] = useState(false);
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [piso, setPiso] = useState(null);
  const [rol, setRol] = useState(0);
  const [comunidades, setComunidades] = useState([]);

  return (

    <div>
      <UserContext.Provider value={{
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
        <RouteConfig />
        <Footer />
      </UserContext.Provider>
    </div>

  );
}

export default App;
