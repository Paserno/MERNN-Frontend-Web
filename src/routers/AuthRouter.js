import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginScreen } from '../pages/LoginScreen'
import { RegistrarScreen } from '../pages/RegistrarScreen'

import '../css/main.css'

export const AuthRouter = () => {
  
  return (
      
      <div className="limiter">
		  <div className="container-login100">
		    <div className="wrap-login100 p-t-50 p-b-90">
        <Routes>
            <Route path="/register" element={<RegistrarScreen />} />
            <Route path="/login" element={<LoginScreen />} />


            
            <Route path="/" element={<LoginScreen />} />

            {/* <Route
                path="*"
                element={<Navigate to="/" replace />}
            /> */}

        </Routes>
        
      

        </div>
      </div>
    </div>
      
    
  )
}
