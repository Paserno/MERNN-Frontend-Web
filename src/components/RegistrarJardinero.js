import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-modal/lib/components/Modal'
import Swal from 'sweetalert2';
import { UsuarioContext } from '../context/UsuarioContext';

import '../css/modal.css'

const initialState = {
  descripcion: '', 
  especialidad: '',
  activo: false
}


const warningAlert = {
  title: 'Guardar Registro',
  iconColor:'#F99020',
  text: "",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#207CF9',
  cancelButtonColor: '#5C5B5B',
  confirmButtonText: 'Si, Guardar!'
}



export const RegistrarJardinero = () => {
  const {state, uiCloseModalRegister, crearJardinero, actualizarJardinero} = useContext(UsuarioContext);
  const { jardinero, nombre, ok, usuario} = state;
  const { uid } = usuario;
  

  const [dataJardineros , setDataJardineros] = useState({})
  const { descripcion= '', especialidad = '', activo = false} = dataJardineros;


  useEffect(() => {
    if (jardinero){
      setDataJardineros( jardinero );
      
    }

  }, [jardinero])

  useEffect(() => {
    if (ok){
      
    }
  }, [jardinero])
  
  

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

  const closeModal = () => {
    setDataJardineros(initialState);
    uiCloseModalRegister()
  } 

  const handleInputChange = ({ target }) => {
    setDataJardineros({
      ...dataJardineros,
      [target.name]: target.value
    });
  }

  const handleCheckBox = () => {
    setDataJardineros({
      ...dataJardineros,
      activo: !activo
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (ok ){
      const id = jardinero._id;
      const text = '¿Seguro que quiere Guardar los Cambios?';
      warningAlert.text = text
      Swal.fire(warningAlert).then((result) => {
        if (result.isConfirmed) {

          // console.log(id);
          actualizarJardinero( id, activo, descripcion, especialidad);
          closeModal();
          

          Swal.fire(
              'Guardado!',
              'Los datos han sido Guardados.',
              'success'
          )
        }
      })

    }else {
      const usuario = uid
      const text = '¿Seguro que quiere Guardar el Registro?';
      warningAlert.text = text
      Swal.fire(warningAlert).then((result) => {
        if (result.isConfirmed) {

          crearJardinero(
              usuario,  
             especialidad,
             descripcion,
             activo,
          );
          closeModal();

          Swal.fire(
              'Guardado!',
              'Los datos han sido Guardados.',
              'success'
          )
        }
      })

    }
  }

  const todoOk=()=>{
    return (especialidad.length > 1 ) ? true : false;
}

  


  return (
    <Modal
      isOpen={ state.modalOpenR }
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className="modal modal_2"
      style={customStyles}
      closeTimeoutMS={ 200 }
      overlayClassName="modal-fondo"
    >
      {
        (ok)
          ? (<h1>Actualizar Jardinero</h1>)
          : (<h1>Registrar Jardinero</h1>)
      }
      
      <hr />
      
      <form 
        className='container'
        onSubmit={ handleSubmitForm }
      >
        <h4>  Nombre: <span>{ nombre }</span> </h4>
        <br/> 
         

        <div className='form-group'>
          <label>Especialidad</label>
          <input 
            className='form-control' 
            placeholder='Especialidad' 
            name='especialidad'
            value={ especialidad }
            onChange={ handleInputChange }
          />
        </div>

        <div className='form-group'>
          <label>Descripción</label>
          <input 
            className='form-control' 
            placeholder='Descripción' 
            name='descripcion'
            value={ descripcion }
            onChange={ handleInputChange }
          />
        </div>

        

        {/* <div className="form-check"> */}
        <label>Activo</label>
          <label className="switch">
          <input 
            type="checkbox"
            checked={ activo }
            onChange={ handleCheckBox }
          />
          <span className="slider round"></span>
          </label>
        {/* </div> */}

        <button 
          type='submit'
          className='btn btn-block btn-outline-info mt-2'
          disabled={!todoOk()}
        >
          Guardar
        </button>

        <button 
          onClick={closeModal}
          type='button'
          className='btn btn-block btn-outline-danger mt-2'
        >
          Cancelar
        </button>

      </form>

    </Modal>
  )
}
