import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { UsuarioProvider } from './context/UsuarioContext';
import { AppRouter } from './routers/AppRouter';


export const JardinApp = () => {
  return (
      <AuthProvider>
        <UsuarioProvider>
          <AppRouter />
        </UsuarioProvider>
      </AuthProvider>

  )
}
