import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext';
import { ItemTablaRol } from './ItemTablaRol';

export const TablaRol = () => {

    const {cargarUsuarios , state} = useContext(UsuarioContext);
    const { usuarios } = state;



  return (
    <div>
        <table className="table table-striped table-dark table-hover" style={{ height: 450 }}>
                <thead>
                    <tr>
                        {/* <th style={{ width: 25}} scope="col">ID</th> */}
                        <th style={{ width: 80}} scope="col">Nombre</th>
                        <th style={{ width: 80}} scope="col">Rol</th>
                        <th style={{ width: 120}} scope="col">Rol Jardinero</th>
                        <th style={{ width: 120}} scope="col">Rol Usuario</th>
                        <th style={{ width: 120}} scope="col">Rol Administrador</th>
                    </tr>
                </thead>
                <tbody >
                    {

                        usuarios.map( (usuario, index) => (
                            <ItemTablaRol 
                                key= { usuario.uid }
                                ids= {index}
                                { ...usuario } 
                            />
                        ) )
                    }                    
                </tbody>
            </table>
            <br/>
            
    </div>
    
  )
}
