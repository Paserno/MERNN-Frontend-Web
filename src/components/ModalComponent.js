import React, { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal';


import '../css/modal.css'

export const ModalComponent = () => {

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

    } 

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log('hola form')
    } 


  return (
    
    <Modal
        isOpen={ false }
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
                <label>Nombre</label>
                <input className='form-control' placeholder='Nombre'/>
            </div>
            <div className='form-group'>
                <label>Nombre</label>
                <input className='form-control' placeholder='Nombre'/>
            </div>
            <div className='form-group'>
                <label>Nombre</label>
                <input className='form-control' placeholder='Nombre'/>
            </div>
            <select className="form-control mb-3" aria-label="Default select example">
                <option value="default" >Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <button 
                type='submit'
                className='btn btn-block btn-outline-primary'
            >
                Guardar
            </button>


        </form>

      </Modal>
  )
}
