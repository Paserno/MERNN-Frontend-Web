import { createContext, useState } from 'react';
import { fetchSinToken } from '../helpers/fetch';



export const AuthContext = createContext();

const initialState = {
    checking: true,
    uid: null,
    name: null,
    correo: null,
    logged: false,


};

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);
    
    const login = async(correo, password) => {
        const resp = await fetchSinToken( 'admin/login', {correo, password}, 'POST');

        if ( resp.ok ){
            localStorage.setItem('token', resp.token);
            const { usuario } = resp;
            console.log(usuario);
            setAuth({
                checking: false,
                logged: true,
                uid: usuario.uid,
                name: usuario.nombre,
                correo: usuario.correo
            })
        }
        return [ resp.ok, resp.msg ];

    }

    return (
        <AuthContext.Provider value={{
            auth,
            login
        }}>
            { children }
        </AuthContext.Provider>
    )

}