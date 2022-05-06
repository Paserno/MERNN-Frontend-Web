import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-modal/lib/components/Modal';
import { UsuarioContext } from '../context/UsuarioContext';


import '../css/modal.css'

const initialState ={ 
    nombre: '',
    apellido: '',
    correo: '',
    ciudad: '',
    direccion: '',
    rol: ''
}

export const ModalComponent = () => {

    const {state, uiCloseModal, uiOpenModalRegister} = useContext(UsuarioContext);
    const { usuario } = state;
    // const initialState = usuario;
    const [dataUsuario, setDataUsuario] = useState({})
    const {
        nombre = '',
        apellido = '',
        correo = '',
        ciudad = '',
        direccion = '',
        rol = ''
    } = dataUsuario;
  
    useEffect(() => {
        setDataUsuario(usuario);
    }, [usuario])
    
    
    

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
        setTimeout(() => {
            setDataUsuario(initialState);
        }, 200);
    } 

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(usuario);
        uiCloseModal();
        uiOpenModalRegister();
       
    } 
    const handleInputChange = ({ target }) => {
        setDataUsuario({
          ...dataUsuario,
          [target.name]: target.value
        });
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
        <h1>Datos del Usuario</h1>
        <hr />

        <form 
            className='container'
            onSubmit={ handleSubmitForm }
        >
            <div className='form-group'>
                <label>Nombre</label>
                <input className='form-control' placeholder='Nombre' value={nombre} onChange={handleInputChange} disabled/>
            </div>
            <div className='form-group'>
                <label>Apellido</label>
                <input className='form-control' placeholder='Apellido' value={apellido} onChange={ handleInputChange} disabled/>
            </div>
            <div className='form-group'>
                <label>Correo</label>
                <input className='form-control' placeholder='Correo' value={correo} onChange={ handleInputChange} disabled/>
            </div>
            <div className='form-group'>
                <label>Ciudad</label>
                <input className='form-control' placeholder='Ciudad' value={ciudad} onChange={ handleInputChange} disabled/>
            </div>
            <div className='form-group'>
                <label>Direacción</label>
                <input className='form-control' placeholder='Direccion' value={direccion} onChange={ handleInputChange} disabled/>
            </div>
            <div className='form-group'>
                <label>Rol</label>
                <input className='form-control' placeholder='Rol' value={rol} onChange={ handleInputChange} disabled/>
            </div>
            
            {
                (rol !== 'OTRO_ROLE')
                        ? (<div className="alert alert-danger" role="alert">
                            Por favor cambiar Rol para el siguiente paso.
                            </div>)
                        : (<div className="alert alert-info" role="alert">
                        En el siguiente punto puede Registrar al Jardinero.
                        </div>)
            }


            <button 
                type='submit'
                className='btn btn-block btn-outline-info '
                disabled={(rol !== 'OTRO_ROLE') ? true : false}
            >
                Siguiente
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
