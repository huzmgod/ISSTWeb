import './create.css'
import React from 'react';
import Image from '../../assets/Image.png'
import { URLBACKEND } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../../components/UserContext';

const Create_Post = (props) => {
    const navigate = useNavigate();
    const autor = props.autor;
    const [titulo, setTitulo] = React.useState('');
    const [cuerpo, setCuerpo] = React.useState('');

    const handleTitle = (event) => {
        setTitulo(event.target.value);
    }
    const handleCuerpo = (event) => {
        setCuerpo(event.target.value);
    }

    const formbody = {
        titulo: titulo,
        cuerpo: cuerpo,
        autor: autor.id,
        comunityCode: props.comunityCode,
        subPost:[]
    }

    const handlePost = async () => {
        if (!(titulo == '' || cuerpo == '')){
            navigate("/")
            console.log(props.comunityCode)
            const res = await fetch(`${URLBACKEND}/post/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formbody),

            });
        }

    }

    return (
        <div className="cont1">
            <div className='create section__padding'>
                <div className="create-container">
                    <h1>Crear nuevo Post</h1>
                    <form className='writeForm' autoComplete='off'>
                        <div className="formGroup">
                            <label>Título</label>
                            <input type="text" placeholder='Título del post' autoFocus={true} onChange={handleTitle} required />
                        </div>
                        <div className="formGroup">
                            <label>Cuerpo</label>
                            <textarea type="text" rows={8} placeholder='Descripción del post' onChange={handleCuerpo} required></textarea>
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
                        <button className='writeButton' onClick={handlePost}>Crear Post</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Create_Post;