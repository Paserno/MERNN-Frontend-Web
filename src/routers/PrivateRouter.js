import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const PrivateRouter = ({ children }) => {
    const { auth, verificarToken} = useContext(AuthContext);

    useEffect(() => {
        verificarToken();
    }, [])

    if ( auth.checking) {
        return <h1> Esperar...</h1>
    }

  return auth.logged
        ?   children
        :   <Navigate to="/auth/login" /> 
}
