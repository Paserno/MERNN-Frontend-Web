import { createContext, useCallback, useState } from 'react';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';



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

    const logout = () => {

        setAuth(initialState);
        console.log(auth.logged);
    }

    const verificarToken = useCallback( async() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setAuth({
                checking: false,
                logged: false,
                uid: null,
                name: null,
                correo: null,
            })
            return false;
        }

        const resp = await fetchConToken('admin/renew');
        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            const { usuario } = resp;
            setAuth({
                checking: false,
                logged: true,
                uid: usuario.uid,
                name: usuario.nombre,
                correo: usuario.correo
            });
            return true;
        }else {
            setAuth({
                checking: false,
                logged: false,
                uid: null,
                name: null,
                correo: null,
            });
            return false
        }


    })


    return (
        <AuthContext.Provider value={{
            auth,
            login,
            logout,
            verificarToken
        }}>
            { children }
        </AuthContext.Provider>
    )

}