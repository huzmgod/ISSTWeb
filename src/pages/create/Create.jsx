import './create.css'
import React from 'react';
import Image from '../../assets/Image.png'
import { useNavigate } from 'react-router-dom';
import Create_Post from './Create_Post.jsx';
import Create_Votation from './Create_Votation.jsx';
import Create_Meeting from './Create_Meeting';
import Select from 'react-select';
import { useState } from 'react';

const options = [
  { value: 'Post', label: 'Post' },
  { value: 'Votación', label: 'Votación' },
  { value: 'Reunión', label: 'Reunión' },
];



const Create = (props) => {
  const [selectedOption, setSelectedOption] = useState('Post');
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
          <select value={selection} onChange={handleLangChange} style={{ border:'1px solid #000', fontFamily: 'PT Sans'  }}>
            <option value="Post" className='selectPP' style={{ fontFamily: 'PT Sans'}}> Post </option >
            <option value="Votation" className='selectPP'> Votación </option>
            <option value="Meeting" className='selectPP'> Reunión </option>
          </select >
          {/* <Select
            defaultValue={selectedOption}
            value={selectedOption}
            onChange={handleLangChange}
            options={options}
            isClearable={true}
            // theme={(theme) => ({
            //   ...theme,
            //   colors: {
            //     ...theme.colors,
            //     primary: '#24252D',
            //     primary25: '#24252D',
            //     primary50: '#24252D',
            //     primary75: '#24252D',
            //     neutral0: '#24252D',
            //     neutral10: '#24252D',
            //     neutral20: '#24252D',
            //     neutral30: '#24252D',
            //     neutral40: '#24252D',
            //     neutral50: '#24252D',
            //     neutral60: '#24252D',
                          
            //   },
            // })}
            
            styles={{
              control: (provided) => ({
                ...provided,
                border: true ,
                borderRadius: '3px',
                backgroundColor: '#24252D',
                color: '#fff',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                fontFamily: 'PT Sans',
                padding: '0px',
                margin: '0px',
                height: '40px',
                width: '100%',
                '&:hover': {
                  backgroundColor: '#24252D',
                  color: '#fff',
                }
              }

              ),
            }
          } */}
            

          
          {viewObject()}
        </div >

      </>
    ) : (
      <>
        {viewObject()}
      </>
    )




  )
};

export default Create;

