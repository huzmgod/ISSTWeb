
import './App.css';
import { Navbar } from './components'
import { Home, Profile, Item, Create, Login, Register } from './pages'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Instalaciones from './instalaciones/instalaciones';
import RegisterAdmin from './pages/register/register_admin/RegisterAdmin'
import HomeAdmin from './pages/home/homeAdmin/HomeAdmin';
import AddComunity from './pages/create/AddComunity';
import { useContext } from 'react';
import UserContext from './components/UserContext';
import ComunityContext from './components/ComunityContext';
import NavbarAdmin from './components/navbar/NavbarAdmin';

export default function RouteConfig() {
    const isAdmin = useContext(UserContext).isAdmin;
    const numAdmin = useContext(UserContext).numAdmin;
    const bool = useContext(UserContext).bool;
    const id = useContext(UserContext).id;
    const nombre = useContext(UserContext).nombre;
    const apellidos = useContext(UserContext).apellidos;
    const email = useContext(UserContext).email;
    const password = useContext(UserContext).password;
    const piso = useContext(UserContext).piso;
    const rol = useContext(UserContext).rol;
    const comunidades = useContext(UserContext).comunidades;
    // const idCom = useContext(ComunityContext).idCom;
    // const calle = useContext(ComunityContext).calle;
    // const numero = useContext(ComunityContext).numero;
    // const cpostal = useContext(ComunityContext).cpostal;
    const comunityCode = useContext(ComunityContext).comunityCode;
    const posts = useContext(ComunityContext).posts;
    // const votaciones = useContext(ComunityContext).votaciones;
    const instalaciones = useContext(ComunityContext).instalaciones;
    console.log(isAdmin);

    const routes = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/instalaciones",
            element: <Instalaciones />
        },
        {
            path: "/create",
            element: <Create
                id={id}
                nombre={nombre}
                apellidos={apellidos}
                email={email}
                password={password}
                piso={piso}
                rol={rol}
                comunidades={comunidades}
                comunityCode={comunityCode}
                posts={posts} />
        },
        {
            path: "/profile/:id",
            element: <Profile />
        },
        {
            path: "/login",
            element: <Login bool={bool} />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "instalaciones/:nombre/:id",
            element: <Item
                id={id}
                instalaciones={instalaciones}
            />
        },
        {
            path: "/registerAdmin",
            element: <RegisterAdmin />

        },
        {
            path: "/home/admin",
            element: <HomeAdmin />
        },
        {
            path: "/home/admin/addComunity",
            element: <AddComunity
                id={id}
                nombre={nombre}
                apellidos={apellidos}
                email={email}
                password={password}
                numAdmin={numAdmin}
                comunidades={comunidades}
            />
        },


    ];

    return (
        <Router>
            <>
                {isAdmin == true ?

                    <NavbarAdmin /> : (
                        <Navbar />
                    )
                }
                <Routes>
                    {routes.map((route, i) => (
                        <Route key={i} {...route} />
                    ))}
                </Routes>

            </>
        </Router>
    );
}