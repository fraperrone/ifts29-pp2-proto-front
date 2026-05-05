// generamos navbar
import React, { use } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavbarComponent = () => {
  const navigate = useNavigate()

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    // generamos navbar con bootstrap
     <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Clinica SePrice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/estudios">Estudios de Laboratorio</Nav.Link>
            <Nav.Link href="/consultorios" disabled>Consultorios Externos (no disponible)</Nav.Link>
            <Nav.Link onClick={cerrarSesion}>Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
