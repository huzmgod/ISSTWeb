
import React from "react"
export default React.createContext({
    idCom: 0,
    calle: "",
    numero: 0,  
    cpostal: "",
    comunityCode: "",
    posts: [],
    votaciones: [],
    instalaciones: [],
    setIdCom: null,
    setCalle: null,
    setNumero: null,
    setCpostal: null,
    setComunityCode: null,
    setPosts: null,
    setVotaciones: null,
    setInstalaciones: null
})