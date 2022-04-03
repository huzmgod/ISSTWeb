
import './App.css';
import { Navbar, Footer } from './components'
import { Home, Profile, Item, Create, Login, Register } from './pages'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import NavbarLogged from './components/navbarLogged/NavbarLogged';
import Instalaciones from './instalaciones/instalaciones';
import { useContext, useState } from 'react';
import UserContext from './components/UserContext';

export default function RouteConfig() {
    const bool = useContext(UserContext).bool;
   
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
            element: <Create />
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
            path: ":item/:id",
            element: <Item />
        },

    ];

    return (
        <Router>
            <>
                <Navbar />
                <Routes>
                    {routes.map((route, i) => (
                        <Route key={i} {...route} />
                    ))}
                </Routes>

            </>
        </Router>
    );
}