
// generamos la pagina para gestion de insumos
import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
// importamos useState
import { useState } from 'react'
// importamos el useNavigate para navegar entre paginas
import { useNavigate } from 'react-router-dom'

import InsumosController from '../components/InsumosController'
const InsumosPage = () => {
  // generamos el rol
  return (
    <Container className="m-5 p-5 bg-light rounded shadow">
      <h1>Gestión de Insumos</h1>
        <InsumosController />
    </Container>
  )
}

export default InsumosPage
 