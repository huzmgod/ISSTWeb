import './create.css'
import React from 'react';
import Image from '../../assets/Image.png'
import { URLBACKEND } from '../../constants/constants';

const Create = (props) => {

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
  // const formbody = {
  //   titulo: titulo,
  //   cuerpo: cuerpo,
  //   autor: autor
  // }

  const handlePost =  () => {
    var requestOpt = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"titulo":"Viva a la pepa", "cuerpo": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", "autor":{"id":0,"nombre":"Pedro","apellidos":["Perez","Garcia"],"email":"p.pgarcia@alumnos.upm.com","password":"1234","piso":"2A","rol":0,"comunidades":["1957"]}}),
    };
    fetch('http://159.89.11.206:8080/api/v1/comunidad/1957/post', requestOpt)
        .then(response => response.json())
        .then(data => console.log(data));
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
          <button className='writeButton' onClick={() => handlePost()}>Crear Post</button>
        </form>
      </div>
    </div>

  )
};

export default Create;
