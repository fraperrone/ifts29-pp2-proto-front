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
     <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="mb-5">
      <Container>
        <Navbar.Brand href="/">MiPortfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Sobre mí</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
            <Nav.Link onClick={cerrarSesion}>Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
