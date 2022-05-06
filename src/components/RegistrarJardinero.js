import React, { useContext } from 'react'
import Modal from 'react-modal/lib/components/Modal'
import { UsuarioContext } from '../context/UsuarioContext';

import '../css/modal.css'

export const RegistrarJardinero = () => {
  const {state, uiCloseModalRegister} = useContext(UsuarioContext);
  const { usuario } = state;


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
    uiCloseModalRegister()
  } 


  return (
    <Modal
        isOpen={ state.modalOpenR }
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal"
        closeTimeoutMS={ 200 }
        overlayClassName="modal-fondo"
      >
    <h1>Registrar Jardinero</h1>
    <hr />

    </Modal>
  )
}
