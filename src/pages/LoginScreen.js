import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AuthContext } from '../context/AuthContext';

export const LoginScreen = () => {

    const {login} = useContext(AuthContext);

    const [form, setForm] = useState({
        correo: '',
        password: '',
        rememberme: false
    })


    useEffect(() => {
        const email = localStorage.getItem('correo');
        if (email) {
            setForm((form)=> ({
                ...form,
                correo: email,
                rememberme: true,
            }))
        }
    }, [])

    const onChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });

    }

    const toggleCheck = () => {
        setForm({
            ...form,
            rememberme: !form.rememberme
        });
    }
    

    const handleLogin = async(e) => {
        e.preventDefault();

        (form.rememberme)
            ? localStorage.setItem('correo', form.correo)
            : localStorage.removeItem('correo');
        
        const { correo, password } = form;
        const [ ok, msg = 'No se pudo establecer conexión con el Servidor' ] = await login(correo, password);

        if( !ok ){

            Swal.fire('Error', msg, 'error');
        }
    }

    const todoOk=()=>{
        return (form.correo.length > 1 && form.password.length > 1) ? true : false;
    }
        
  return (
    
    <form 
        className="login100-form validate-form flex-sb flex-w"
        onSubmit={ handleLogin }
        
    >
        <span className="login100-form-title mb-3">
            Login
        </span>
        
        <div className="wrap-input100 validate-input mb-3">
            <input className="input100" 
                type="email"
                name="correo" 
                placeholder="Email" 
                value={ form.correo }
                onChange={ onChange }
            />
            <span className="focus-input100"></span>
        </div>
        
        
        <div className="wrap-input100 validate-input mb-3">
            <input className="input100" 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={ form.password }
                onChange={ onChange }
            />
            <span className="focus-input100"></span>
        </div>
        
        <div className="row mb-3">
            <div 
                className="col"
                onClick={() => toggleCheck()}
            >
                <input className="input-checkbox100" 
                    id="ckb1" 
                    type="checkbox" 
                    name="rememberme" 
                    checked={form.rememberme}
                    readOnly
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
                type='submit'
                disabled={!todoOk()}
            >
                Ingresar
            </button>
        </div>

    </form>
        
  )
}
