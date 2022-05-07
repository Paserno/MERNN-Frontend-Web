import React, { useContext, useEffect } from 'react'
import { ModalComponent } from '../components/ModalComponent';
import { RegistrarJardinero } from '../components/RegistrarJardinero';
import { Tablas } from '../components/Tablas'
import { UsuarioContext } from '../context/UsuarioContext'


export const AdminScreen = () => {

  const {cargarUsuarios , state} = useContext(UsuarioContext);

  const { isLoading, usuarios } = state;

  useEffect(() => {
    cargarUsuarios();
  }, [])
  

  

  return (
    <div className='container' >
      <h1 style={{marginBottom: '15px'}}>Admin</h1>

    {
      (isLoading) 
          ? (<h2 className='container'>Cargando...</h2>)
          : <Tablas />
    }
      
      <ModalComponent />
      <RegistrarJardinero />
     
    </div>
  )
}
