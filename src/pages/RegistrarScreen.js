import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UsuarioContext } from '../context/UsuarioContext';
import { useForm } from '../hooks/useForm'

export const RegistrarScreen = () => {
    const [valuesInput, handleInputChange] = useForm({
        nombre: '',
        correo: '',
        password: '',
        apellido: '',
        ciudad: '',
        direccion: '',
    });
    const {nombre, correo, password, apellido, ciudad, direccion} = valuesInput;

    const { registrarUsuario } = useContext(UsuarioContext);

    const navigate = useNavigate();

    const onSubmit = async(e) => {
        e.preventDefault();
        const [msg, ok] =  await registrarUsuario(nombre, correo, password, apellido, ciudad, direccion)
        console.log(msg, ok);
        if( !ok ){
            Swal.fire('Error', msg, 'error');
        }else {
            console.log(msg);
            Swal.fire('Registrado', msg, 'success');
            navigate( '/auth/login', {
                replace: true
            });

        }
    }

    const todoOk = () => {
        return (
            correo.length > 1 && 
            password.length > 1 &&
            correo.length > 1 &&
            apellido.length > 1 &&
            ciudad.length > 1 &&
            direccion.length > 1 ) ? true : false

    }

  return (
   
    <form 
        className="login100-form validate-form flex-sb flex-w"
        onSubmit={ onSubmit }
    >
        <span className="login100-form-title mb-3">
             Registro
        </span>

        <div className="wrap-input100 validate-input mb-3">
            <input className="input100" 
                type="text" 
                name="nombre" 
                placeholder="Nombre" 
                value={ nombre }
                onChange={ handleInputChange }
            />
            <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input mb-3">
            <input className="input100" 
                type="text" 
                name="apellido" 
                placeholder="Apellido" 
                value={ apellido }
                onChange={ handleInputChange }
            />
            <span className="focus-input100"></span>
        </div>

        
        <div className="wrap-input100 validate-input mb-3">
            <input className="input100" 
                type="email" 
                name="correo" 
                placeholder="Email" 
                value={ correo }
                onChange={ handleInputChange }
            />
            <span className="focus-input100"></span>
        </div>
        
        
        <div className="wrap-input100 validate-input mb-3">
            <input className="input100" 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={ password }
                onChange={ handleInputChange }
            />
            <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input mb-3">
            <input className="input100" 
                type="text" 
                name="ciudad" 
                placeholder="Ciudad" 
                value={ ciudad }
                onChange={ handleInputChange }
            />
            <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input mb-3">
            <input className="input100" 
                type="text" 
                name="direccion" 
                placeholder="Dirección" 
                value={ direccion }
                onChange={ handleInputChange }
            />
            <span className="focus-input100"></span>
        </div>
        
        <div className="row mb-3">
            <div className="col text-right">
                <Link 
                    className="txt1"
                    to='/auth/login'
                >
                    Ya tienes cuenta?
                </Link>
            </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
            <button 
                className="login100-form-btn"
                type='submit'
                disabled={ !todoOk() }
            >
                Crear cuenta
            </button>
        </div>

    </form>
    
  )
}
