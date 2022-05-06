import React, { useContext } from 'react'
import Swal from 'sweetalert2'
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

  const { cambiarRol, uiOpenModal } = useContext(UsuarioContext)

    // const contador = ids + 1;
    
    const changeGardin = async() => {
       Swal.fire(warningAlert).then((result) => {
        if (result.isConfirmed) {

          cambiarRol(uid, 'OTRO_ROLE');

          Swal.fire(
              'Guardado!',
              'El Rol ha sido Cambiado.',
              'success'
          )
        }
      })
    }

    const changeUsuario = async() => {
      Swal.fire(warningAlert).then((result) => {
        if (result.isConfirmed) {

          cambiarRol(uid, 'USER_ROLE');

          Swal.fire(
              'Guardado!',
              'El Rol ha sido Cambiado.',
              'success'
          )
        }
      })
    }

    const editarUsuario = (e) => {
      e.preventDefault();
      console.log('abrir modal')
      uiOpenModal();
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
              onClick={editarUsuario }
            >
              Editar
            </button>
        </td>
    </tr>
  )
}
