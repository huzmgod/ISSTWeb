import React from "react"
export default React.createContext({
    bool: false,
    id: 0,
    nombre: "",
    apellidos: [],
    email: "",
    password: "",
    piso: null,
    rol: 0,
    comunidades: [],
    setBool: null,
    setId: null,
    setNombre: null,
    setApellidos: null,
    setEmail: null,
    setPassword: null,
    setPiso: null,
    setRol: null,
    setComunidades: null
})