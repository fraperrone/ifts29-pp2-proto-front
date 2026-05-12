// generamos pagina principal
import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { BrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const HomePage = () => {
  return (
    <Container className="m-5 p-5 bg-light rounded shadow d-flex flex-column align-items-center">
      <h1>Bienvenido a SePrise</h1>
      <p>Tu clínica de confianza para el cuidado de tu salud</p>
    </Container>
  )
}

export default HomePage
