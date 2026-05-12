

// genermaos pagina para acreditar paciente
import React from 'react'
import FormularioAcreditarPaciente from '../components/FormularioAcreditarPaciente'

import { Container } from 'react-bootstrap'
// importamos boton cancelar
import BotonCancelar from '../components/BotonCancelar'
const AcreditarPaciente = () => {
  return (
    <Container>
        <FormularioAcreditarPaciente />
        <BotonCancelar />
    </Container>
  )
}

export default AcreditarPaciente