import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm'

export const LoginScreen = () => {

    const {login} = useContext(AuthContext)

    const navigate = useNavigate();

    const [ valuesInput, handleInputChange ] = useForm({
        correo: '',
        password: '',
    });
    const { correo, password } = valuesInput;

    const handleLogin = async(e) => {
        e.preventDefault()
        
        const [ ok, msg ] = await login(correo, password);

        if( !ok ){
            Swal.fire('Error', msg, 'error');
        }
    }

        
  return (
    
    <form className="login100-form validate-form flex-sb flex-w"
    >
        <span className="login100-form-title mb-3">
            Login
        </span>
        
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
        
        <div className="row mb-3">
            <div className="col">
                <input className="input-checkbox100" 
                    id="ckb1" 
                    type="checkbox" 
                    name="remember-me" 
                />
                <label className="label-checkbox100">
                    Recordarme
                </label>
            </div>

            <div className="col text-right">
                <Link 
                    className="txt1"
                    to='/auth/register' 
                >
                    Nueva cuenta?
                </Link>
            </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
            <button 
                className="login100-form-btn"
                onClick={ handleLogin }
            >
                Ingresar
            </button>
        </div>

    </form>
        
  )
}
