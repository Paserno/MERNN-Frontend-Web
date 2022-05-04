import React from 'react'
import { useForm } from '../hooks/useForm'

export const RegistrarScreen = () => {
    const [valuesInput, handleInputChange] = useForm({
        nombre: '',
        correo: '',
        password: '',
    });
    const {nombre, correo, password} = valuesInput;

  return (
   
    <form className="login100-form validate-form flex-sb flex-w"
    >
        <span className="login100-form-title mb-3">
            Chat - Registro
        </span>

        <div className="wrap-input100 validate-input mb-3">
            <input className="input100" 
                type="text" 
                name="nombre" 
                placeholder="Nombre" 
                value={nombre }
                onChange={ handleInputChange }
            />
            <span className="focus-input100"></span>
        </div>

        
        <div className="wrap-input100 validate-input mb-3">
            <input className="input100" 
                type="email" 
                name="correo" 
                placeholder="Email" 
                value={correo }
                onChange={ handleInputChange }
            />
            <span className="focus-input100"></span>
        </div>
        
        
        <div className="wrap-input100 validate-input mb-3">
            <input className="input100" 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={password }
                onChange={ handleInputChange }
            />
            <span className="focus-input100"></span>
        </div>
        
        <div className="row mb-3">
            <div className="col text-right">
                <a href="login.html" className="txt1">
                    Ya tienes cuenta?
                </a>
            </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
            <button className="login100-form-btn">
                Crear cuenta
            </button>
        </div>

    </form>
    
  )
}
