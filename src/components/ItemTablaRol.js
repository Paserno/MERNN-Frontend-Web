import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import { UsuarioContext } from '../context/UsuarioContext'

const warningAlert = {
    title: 'Cambiar Rol',
    iconColor:'#F99020',
    text: "¿Seguro que quieres Cambiar el Rol?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#207CF9',
    cancelButtonColor: '#5C5B5B',
    confirmButtonText: 'Si, Cambiar!'
  }

export const ItemTablaRol = ({ uid, nombre, rol }) => {

    const { cambiarRol } = useContext(UsuarioContext)

    const handleChangeRoleAdmin = () => {
        Swal.fire(warningAlert).then((result) => {
            if (result.isConfirmed) {
    
            cambiarRol(uid, 'ADMIN_ROLE')
              
    
              Swal.fire(
                  'Guardado!',
                  'El Rol ha sido Cambiado.',
                  'success'
              )
            }
          })
    }
    const handleChangeRoleJardinero = () => {
        Swal.fire(warningAlert).then((result) => {
            if (result.isConfirmed) {
                cambiarRol(uid, 'OTRO_ROLE')
    
                  Swal.fire(
                  'Guardado!',
                  'El Rol ha sido Cambiado.',
                  'success'
              )
            }
          })
    }
    const handleChangeRoleUsuario = () => {
        Swal.fire(warningAlert).then((result) => {
            if (result.isConfirmed) {
                cambiarRol(uid, 'USER_ROLE')
    
                  Swal.fire(
                  'Guardado!',
                  'El Rol ha sido Cambiado.',
                  'success'
              )
            }
          })
    }

    return (
        <tr
          
        >
            {/* <th scope="row">{contador}</th> */}
            <td>{ nombre }</td>
            <td>{ rol }</td>
            <td>
                <button 
                    className={ (rol === 'OTRO_ROLE') ? 'btn btn-light' : 'btn btn-info'}
                    onClick={handleChangeRoleJardinero }
                    disabled={ (rol === 'OTRO_ROLE') ? true : false }
                >
                    Jardinero
                </button>
            </td>
    
            <td>
                <button 
                    className={ (rol === 'USER_ROLE') ? 'btn btn-light' : 'btn btn-info'}
                    onClick={ handleChangeRoleUsuario }
                    disabled={ (rol === 'USER_ROLE') ? true : false }
                >
                    Usuario
                </button>
            </td>

            <td>
                <button 
                    className={ (rol === 'ADMIN_ROLE') ? 'btn btn-light' : 'btn btn-info'}
                    onClick={ handleChangeRoleAdmin }
                    disabled={ (rol === 'ADMIN_ROLE') ? true : false }
                >
                    Administrador
                </button>
            </td>
            
            
        </tr>
      )
    
}
