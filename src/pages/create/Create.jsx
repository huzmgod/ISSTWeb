import './create.css'
import React from 'react';
import Image from '../../assets/Image.png'
import { useNavigate } from 'react-router-dom';
import Create_Post from './Create_Post.jsx';
import Create_Votation from './Create_Votation.jsx';
import Create_Meeting from './Create_Meeting';



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

  const [selection, setSelection] = React.useState('Post');

  const handleLangChange = (event) => {
    setSelection(event.target.value)
  }

  const viewObject = () => {
    switch (selection) {
      case "Votation":
        return <Create_Votation autor={autor} comunityCode={props.comunityCode} ></Create_Votation>
      case "Post":
        return <Create_Post autor={autor} comunityCode={props.comunityCode} ></Create_Post>
      case "Meeting":
        return <Create_Meeting comunityCode={props.comunityCode} ></Create_Meeting>
    }
  }



  return (props.rol == 0 ?
    (
    <>
      <div className="formGroup">
        <select value={selection} onChange={handleLangChange}>
          <option value="Post" > Post </option >
          <option value="Votation" > Votación </option>
          <option value="Meeting"> Reunión </option>
        </select >
        {viewObject()}
      </div >
      
    </>
    ) : (
      <>
      {/* <div className="formGroup">
        <select value={selection} onChange={handleLangChange}>
          <option value="Post" > Post </option >
        </select >
      </div > */}
      {viewObject()}
    </>
    )
      



  )
};

export default Create;
