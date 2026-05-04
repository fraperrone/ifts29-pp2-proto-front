// generamos el componente MainLayout para manejar el layout de la aplicacion
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
export default MainLayout
