import './create.css'
import React from 'react';
import Image from '../../assets/Image.png'
import { URLBACKEND } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../../components/UserContext';

const Create_Meeting = (props) => {
    const navigate = useNavigate();
    const [motivo, setMotivo] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [presencial, setPresencial] = useState(Boolean(true));
    const [localizacion, setLocalizacion] = useState("");

    const handleMotivo = (event) => {
        setMotivo(event.target.value);
    }
    const handleFecha = (event) => {
        setFecha(event.target.value);
        
    }
    const handleHora= (event) => {
        setHora(event.target.value);
        console.log(hora);
    }
    const handlePresencial = (event) => {
        const valor = JSON.parse(event.target.value);
        setPresencial(valor);
    }
    const handleLocalizacion = (event) => {
        setLocalizacion(event.target.value);
    }

    const formBodyMeet = {
        motivo: motivo,
        fecha: `${fecha}, ${hora}`,
        presencial: presencial,
        localizacion: localizacion,
        comunityCode:props.comunityCode
    }

    const handlePostMeet = async () => {
        if(!(motivo == '' || fecha == '' || localizacion == ''))
        navigate("/")
        const res = await fetch(`${URLBACKEND}/reunion/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formBodyMeet),

        });

    }

    return (
        <div className="cont2">
            <div className='create section__padding'>
                <div className="create-container">
                    <h1>Crear nueva Reunión</h1>
                    <form className='writeForm' autoComplete='off'>

                        <div className="formGroup">
                            <label>Motivo</label>
                            <input type="text" placeholder='Motivo de la reunión' autoFocus={true} onChange={handleMotivo} required />
                        </div>
                        <div className="formGroup">
                            <label>Fecha</label>
                            <input type="date" placeholder='Fecha de la reunión' onChange={handleFecha} required></input>
                        </div>
                        <div className="formGroup">
                            <label>Hora</label>
                            <input type="time" placeholder='Hora de la reunión' onChange={handleHora} required ></input>
                        </div>
                        <div className="formGroup">
                            <label>¿Es presencial?</label>
                            <select value={presencial} onChange={handlePresencial}>
                                <option value={true}>Sí</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        <div className="formGroup">
                            <label>{presencial ? "Localización" : "URL"}</label>
                            <textarea type="text" rows={1} placeholder={presencial ? "Localización" : "URL"} onChange={handleLocalizacion} required></textarea>
                        </div>
                        <button className='writeButton' onClick={handlePostMeet}>Crear Reunión</button>
                    </form>
                </div>
            </div>
        </div>
    )



}
export default Create_Meeting;