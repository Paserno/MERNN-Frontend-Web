import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'


export const ItemTabla = ({
    uid,
    nombre,
    apellido,
    correo,
    ciudad = '',
    direccion = '',
    rol,
    ids
    
}) => {

  const { cambiarRol } = useContext(UsuarioContext)

    // const contador = ids + 1;
    
    const changeGardin = async() => {
      console.log('jardin: ', uid)
      cambiarRol(uid, 'OTRO_ROLE');

    }
    const changeUsuario = async() => {
      console.log('Usuario: ', uid)
      cambiarRol(uid, 'USER_ROLE');

    }

  return (
    <tr
      
    >
        {/* <th scope="row">{contador}</th> */}
        <td>{ nombre }</td>
        <td>{ apellido }</td>
        <td>{ correo }</td>
        <td>{ ciudad }</td>
        <td>{ direccion }</td>
        <td>{ rol }</td>

        <td>
            {
              ( rol === 'USER_ROLE')
                ? (
                  <button 
                    className='btn btn-info'
                    onClick={changeGardin }
                >
                  Jardinero
                </button>

                )
                : 
                (
                  <button 
                    className='btn btn-danger'
                    onClick={changeUsuario }
                  >
                    Usuario
                  </button>

                )
            }
        </td>
        <td>
            <button 
              className='btn btn-info'
              onClick={() => console.log('adios') }
            >
              Editar
            </button>
        </td>
    </tr>
  )
}
