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

  const handleTitle = (event) => {
    setTitulo(event.target.value);
    console.log(titulo)
  }
  const handleCuerpo = (event) => {
    setCuerpo(event.target.value);
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
  return (
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
};

export default Create;
