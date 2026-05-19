// generamos el componente MainLayout para manejar el layout de la aplicacion
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/controllers/NavbarComponent'
import { Container } from 'react-bootstrap'
const MainLayout = () => {
  return (
    <Container fluid className="p-0">
      <NavbarComponent />
      <Container>
        <Outlet />
      </Container>
    </Container>
  )
}
export default MainLayout
