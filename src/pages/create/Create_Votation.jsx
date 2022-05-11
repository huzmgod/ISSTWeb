import './create.css'
import React from 'react';
import Image from '../../assets/Image.png'
import { URLBACKEND } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../../components/UserContext';

const Create_Votation = (props) => {
    const navigate = useNavigate();
    const [tituloVot, setTituloVot] = React.useState('');
    const [opcionA, setOpcionA] = React.useState('');
    const [opcionB, setOpcionB] = React.useState('');
    const autor = props.autor;

    const handleTituloVot = (event) => {
        setTituloVot(event.target.value);
    }
    const handleOpcionA = (event) => {
        setOpcionA(event.target.value);
    }
    const handleOpcionB = (event) => {
        setOpcionB(event.target.value);
    }

    const formBodyVot = {
        titulo: tituloVot,
        opcionA: opcionA,
        opcionB: opcionB,
        autor: autor.id,
        comunityCode: props.comunityCode
    }

    const handlePostVot = async () => {
        if (!(tituloVot == '' || opcionA == '' || opcionB == '')) {
            navigate("/")
            const res = await fetch(`${URLBACKEND}/votacion/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formBodyVot),

            });
        }
    }
    return (
        <div className="cont2">
            <div className='create section__padding'>
                <div className="create-container">
                    <h1>Crear nueva Votación</h1>
                    <form className='writeForm' autoComplete='off'>

                        <div className="formGroup">
                            <label>Título</label>
                            <input type="text" placeholder='Título de la votación' autoFocus={true} onChange={handleTituloVot} required />
                        </div>
                        <div className="formGroup">
                            <label>Opción A</label>
                            <textarea type="text" rows={1} placeholder='' onChange={handleOpcionA} required></textarea>
                        </div>
                        <div className="formGroup">
                            <label>Opción B</label>
                            <textarea type="text" rows={1} placeholder='' onChange={handleOpcionB} required></textarea>
                        </div>
                        <div className="formGroup">
                            <label>Categoría</label>
                            <select >
                                <option>Instalación</option>
                                <option>Junta de vecinos</option>
                                <option>Mantenimiento</option>
                                <option>Otros</option>
                            </select>
                        </div>
                        <button className='writeButton' onClick={handlePostVot}>Crear Votación</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Create_Votation;