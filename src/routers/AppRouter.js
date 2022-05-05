import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminRouter } from './AdminRouter'

import { AuthRouter } from './AuthRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route
              path="/*"
              element={
                <PrivateRouter >
                  <AdminRouter />
                </PrivateRouter>
              } />

            <Route
              path="/auth/*" 
              element={
                <PublicRouter >
                  <AuthRouter />
                </PublicRouter>
              } />

            
        </Routes>
    </BrowserRouter>
  )
}
