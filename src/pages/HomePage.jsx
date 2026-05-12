// generamos pagina principal
import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { BrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import EstudiosPage from './EstudiosPage'

// importamos nav
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const irAlMenuPrincipal = () => {
    navigate('/estudios')
  }


  return (
    <Container className="m-5 text-center">
      
      {/* agregamos imagen clinica */}

      <h1>Bienvenido a SePrise</h1>
      <p>Tu clínica de confianza para el cuidado de tu salud</p>

      {/* boton para ir al menu principal */}
      <button className="btn btn-primary" onClick={irAlMenuPrincipal}>
        Ir al menú principal
      </button>
    </Container>
  )
}

export default HomePage
