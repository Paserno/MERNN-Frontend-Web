import React, { useContext, useEffect } from 'react'
import { Tablas } from '../components/Tablas'
import { UsuarioContext } from '../context/UsuarioContext'


export const AdminScreen = () => {

  const {cargarUsuarios , state} = useContext(UsuarioContext);

  const { isLoading, usuarios } = state;

  useEffect(() => {
    cargarUsuarios();
  }, [])
  

  const handleClick = (e) => {
    e.preventDefault();
    console.log(usuarios);
    
  } 

  return (
    <div className='container' >
      <h1 style={{marginBottom: '15px'}}>AdminScreen</h1>

    {
      (isLoading) 
          ? (<h2>Esperar...</h2>)
          : <Tablas />
    }
      

      < button
        className='btn btn-danger'
        onClick={ handleClick }
      >
        Cargar
      </button>
    </div>
  )
}
