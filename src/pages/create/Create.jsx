import './create.css'
import React from 'react';
import Image from '../../assets/Image.png'
import { URLBACKEND } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
const Create = (props) => {
  const navigate = useNavigate();
  const autor = {
    id: props.id,
    nombre: props.nombre,
    apellidos: props.apellidos,
    email: props.email,
    password: props.password,
    piso: props.piso,
    rol: props.rol,
    comunidades: props.comunidades
  }
  const [titulo, setTitulo] = React.useState('');
  const [cuerpo, setCuerpo] = React.useState('');
  const [tituloVot, setTituloVot] = React.useState('');
  const [opcionA, setOpcionA] = React.useState('');
  const [opcionB, setOpcionB] = React.useState('');

  const handleTitle = (event) => {
    setTitulo(event.target.value);
    console.log(titulo)
  }
  const handleCuerpo = (event) => {
    setCuerpo(event.target.value);
  }
  const handleTituloVot = (event) => {
    setTituloVot(event.target.value);
  }
  const handleOpcionA = (event) => {
    setOpcionA(event.target.value);
  }
  const handleOpcionB = (event) => {
    setOpcionB(event.target.value);
  }
  const formbody = {
    titulo: titulo,
    cuerpo: cuerpo,
    autor: autor
  }

  const handlePost = async () => {
    navigate("/")
    console.log(props.comunityCode)
    console.log(JSON.stringify({ titulo: titulo, cuerpo: cuerpo, autor: autor }));
    const res = await fetch(`${URLBACKEND}/comunidad/${props.comunityCode}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formbody),

    });
  }
  
  const formBodyVot = {
    titulo: tituloVot,
    opcionA: opcionA,
    opcionB: opcionB,
    autor: autor
  }
  const handlePostVot = async () => {
    navigate("/")
    console.log(props.comunityCode)
    console.log(JSON.stringify({ titulo: titulo, cuerpo: cuerpo, autor: autor }));
    const res = await fetch(`${URLBACKEND}/comunidad/${props.comunityCode}/votacion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formBodyVot),

    });

  }
  return (
    props.rol==0 ? (
    
    <div className="container">
      <div className="cont1">
      <div className='create section__padding'>
        <div className="create-container">
          <h1>Crear nuevo Post</h1>
          <form className='writeForm' autoComplete='off'>
            <div className="formGroup">
              <label>Título</label>
              <input type="text" placeholder='Título del post' autoFocus={true} onChange={handleTitle} />
            </div>
            <div className="formGroup">
              <label>Cuerpo</label>
              <textarea type="text" rows={8} placeholder='Descripción del post' onChange={handleCuerpo}></textarea>
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
      <div className="cont2">
      <div className='create section__padding'>
        <div className="create-container">
          <h1>Crear nueva Votación</h1>
          <form className='writeForm' autoComplete='off'>

            <div className="formGroup">
              <label>Título</label>
              <input type="text" placeholder='Título de la votación' autoFocus={true} onChange={handleTituloVot} />
            </div>
            <div className="formGroup">
              <label>Opción A</label>
              <textarea type="text" rows={1} placeholder='' onChange={handleOpcionA}></textarea>
            </div>
            <div className="formGroup">
              <label>Opción B</label>
              <textarea type="text" rows={1} placeholder='' onChange={handleOpcionB}></textarea>
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
    </div>

    ) : (

      <div className='create section__padding'>
        <div className="create-container">
          <h1>Crear nuevo Post</h1>
          <form className='writeForm' autoComplete='off'>

            <div className="formGroup">
              <label>Titulo</label>
              <input type="text" placeholder='Título del post' autoFocus={true} onChange={handleTitle} />
            </div>
            <div className="formGroup">
              <label>Cuerpo</label>
              <textarea type="text" rows={8} placeholder='Descripción del post' onChange={handleCuerpo}></textarea>
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
    )
  )
};

export default Create;
