// generamos navbar
import React, { use } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavbarComponent = () => {
  const navigate = useNavigate()
  const rol = localStorage.getItem('rol')

  const cerrarSesion = () => {

    //verficamos si el usuario esta logueado
    if (!localStorage.getItem('token') && !localStorage.getItem('rol')) {
      return
    }
    localStorage.removeItem('token')
    localStorage.removeItem('rol')
    navigate('/login')
  }

  return (
    // generamos navbar con bootstrap
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="imagenes/logo.png"   // ruta de tu logo
            alt="Mi Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          Clinica SePrice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/estudios">Estudios de Laboratorio</Nav.Link>
            <Nav.Link href="/consultorios" disabled>Consultorios Externos (no disponible)</Nav.Link>
            <Nav.Link onClick={cerrarSesion}>Cerrar sesión</Nav.Link>
          </Nav>
          {/* Mostrar rol actual */}
          {rol && (
            <span className="text-light ms-3">
              Rol: <strong>{rol}</strong>
            </span>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
