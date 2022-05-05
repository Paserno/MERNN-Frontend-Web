import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminScreen } from '../pages/AdminScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AdminScreen />} />
            <Route path="/auth" element={<AuthRouter />} />

            
        </Routes>
    </BrowserRouter>
  )
}
