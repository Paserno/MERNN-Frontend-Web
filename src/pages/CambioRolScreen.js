import React, { useContext, useEffect } from 'react'
import { TablaRol } from '../components/TablaRol'
import { UsuarioContext } from '../context/UsuarioContext';

export const CambioRolScreen = () => {

    const {cargarUsuarios , state} = useContext(UsuarioContext);
    const { usuarios } = state;


    useEffect(() => {
    cargarUsuarios();
  }, [usuarios])
    

  return (
    <div className='container'>
        <center>
            <h1 style={{marginTop: '10px', marginBottom: '50px'}}> Cambio de Rol</h1>
        </center>

        <TablaRol />
    </div>
  )
}
