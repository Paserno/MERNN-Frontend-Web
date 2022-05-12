import React, { useContext, useEffect } from 'react'
import { TablaRol } from '../components/TablaRol'
import { UsuarioContext } from '../context/UsuarioContext';

export const CambioRolScreen = () => {

    const {cargarUsuarios} = useContext(UsuarioContext);
    const tiempoEspera =  600000

    useEffect(() => {
        cargarUsuarios();
  }, [])
    
  setTimeout(() => {
    cargarUsuarios();    
  }, tiempoEspera);

  return (
    <div className='container'>
        <center>
            <h1 style={{marginTop: '10px', marginBottom: '50px'}}> Cambio de Rol</h1>
        </center>

        <TablaRol />
    </div>
  )
}
