import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminRouter } from './AdminRouter'

import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<AdminRouter />} />
            <Route path="/auth/*" element={<AuthRouter />} />

            
        </Routes>
    </BrowserRouter>
  )
}
