import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { RegistrarJardinero } from '../components/RegistrarJardinero'
import { AdminScreen } from '../pages/AdminScreen'

export const AdminRouter = () => {
  return (
    <>
      <Navbar />

        <Routes>
            <Route path="/jardin" element={<RegistrarJardinero />} />
            <Route path="/" element={<AdminScreen />} />

            
        </Routes>
    </>
  )
}