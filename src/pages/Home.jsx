// generamos pagina principal
import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="container">
        {/* pagina bienvenida a la clinica SePrise */}
        <h1>Bienvenido a SePrise</h1>
        <p>Tu clínica de confianza para el cuidado de tu salud</p>
      </div>
    </div>
  )
}

export default Home
