

// genermaos pagina para acreditar paciente
import React from 'react'
import FormularioAcreditarPaciente from '../components/FormularioAcreditarPaciente'

import { Container } from 'react-bootstrap'
// importamos boton cancelar
import BotonCancelar from '../components/BotonCancelar'

import ModalConfirmacionDatos from '../components/ModalConfirmacionDatos'
const AcreditarPaciente = () => {
  return (
    <Container>
        <FormularioAcreditarPaciente />
        <BotonCancelar />

        {/* agregamos modal de confirmacion */}
    </Container>
  )
}

export default AcreditarPaciente