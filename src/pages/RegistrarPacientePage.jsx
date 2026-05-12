
// genermaos la pagina para registrar paciente
import React from 'react'
import FormularioRegistrarPaciente from '../components/FormularioRegistrarPaciente'

import { Container } from 'react-bootstrap'

// importamos boton cancelar
import BotonCancelar from '../components/BotonCancelar'

const RegistrarPacientePage = () => {
  return (
    <Container>
        <FormularioRegistrarPaciente />
        <BotonCancelar />
    </Container>
  )
}

export default RegistrarPacientePage