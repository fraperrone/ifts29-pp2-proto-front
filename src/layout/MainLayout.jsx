// generamos el componente MainLayout para manejar el layout de la aplicacion
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent'
import { Container } from 'react-bootstrap'
const MainLayout = () => {
  return (
    <Container fluid>
      <NavbarComponent />
      <Container>
        <Outlet />
      </Container>
    </Container>
  )
}
export default MainLayout
