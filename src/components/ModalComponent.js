import React, { useContext, useState } from 'react'
import Modal from 'react-modal/lib/components/Modal';
import { UsuarioContext } from '../context/UsuarioContext';


import '../css/modal.css'

export const ModalComponent = () => {

    const {state, uiCloseModal} = useContext(UsuarioContext)

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
        uiCloseModal()
    } 

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log('hola form')
    } 


  return (
    
    <Modal
        isOpen={ state.modalOpen }
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal"
        closeTimeoutMS={ 200 }
        overlayClassName="modal-fondo"
      >
        <h1>Registrar Jardinero</h1>
        <hr />
        <form 
            className='container'
            onSubmit={ handleSubmitForm }
        >
            <div className='form-group'>
                <label>Nombre</label>
                <input className='form-control' placeholder='Nombre'/>
            </div>
            <div className='form-group'>
                <label>Apellido</label>
                <input className='form-control' placeholder='Apellido'/>
            </div>
            <div className='form-group'>
                <label>Correo</label>
                <input className='form-control' placeholder='Correo'/>
            </div>
            <div className='form-group'>
                <label>Ciudad</label>
                <input className='form-control' placeholder='Ciudad'/>
            </div>
            <div className='form-group'>
                <label>Direacción</label>
                <input className='form-control' placeholder='Direccion'/>
            </div>
            <div className='form-group'>
                <label>Rol</label>
                <input className='form-control' placeholder='Rol'/>
            </div>
            
            <button 
                type='submit'
                className='btn btn-block btn-outline-primary mt-5'
            >
                Guardar
            </button>
            


        </form>

      </Modal>
  )
}
