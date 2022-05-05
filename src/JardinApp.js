import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { AppRouter } from './routers/AppRouter';


export const JardinApp = () => {
  return (
      <AuthProvider>
        <AppRouter />

      </AuthProvider>

  )
}
