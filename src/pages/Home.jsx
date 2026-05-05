// generamos pagina principal
import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { BrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className="mt-5">
      <h1>Bienvenido a SePrise</h1>
      <p>Tu clínica de confianza para el cuidado de tu salud</p>
    </Container>
  )
}

export default Home
