import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginScreen } from '../pages/LoginScreen'
import { RegistrarScreen } from '../pages/RegistrarScreen'

import '../css/main.css'

export const AuthRouter = () => {
  // FIXME: RUTAS Login y Register
  return (
      
      <div className="limiter">
		  <div className="container-login100">
		    <div className="wrap-login100 p-t-50 p-b-90">
        <h1>Welcome to React Router!</h1>
       
        <Routes>
            <Route path="auth/register" element={<RegistrarScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/*" element={<LoginScreen />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />

        </Routes>
        
      

        </div>
      </div>
    </div>
      
    
  )
}
