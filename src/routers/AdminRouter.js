import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { AdminScreen } from '../pages/AdminScreen'
import { CambioRolScreen } from '../pages/CambioRolScreen'

export const AdminRouter = () => {
  return (
    <>
      <Navbar />

        <Routes>
            <Route path="/" element={<AdminScreen />} />
            <Route path="/rol" element={<CambioRolScreen />} />

            
        </Routes>
    </>
  )
}