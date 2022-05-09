import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { SearchProvider } from './context/SearchContext';
import { UsuarioProvider } from './context/UsuarioContext';
import { AppRouter } from './routers/AppRouter';


export const JardinApp = () => {
  return (
      <AuthProvider>
        <UsuarioProvider>
          <SearchProvider>
            <AppRouter />
          </SearchProvider>
        </UsuarioProvider>
      </AuthProvider>

  )
}
