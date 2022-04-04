import React from "react";
import { Bids } from "../components";
import { useState } from "react";
import UserContext from "../components/UserContext";
import { useContext } from "react";
import ComunityContext from "../components/ComunityContext";
export default function Instalaciones(){
    const comunidades = useContext(UserContext).comunidades;
    const instalaciones = useContext(ComunityContext).instalaciones;
    return (

        <Bids 
        title='Instalaciones' 
        instalaciones={instalaciones}
        >

        </Bids>
    )
}