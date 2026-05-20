
// genermaos la pagina para registrar paciente
import React from 'react'
import FormularioRegistrarPaciente from '../../components/forms/FormularioRegistrarPaciente'

import { Container } from 'react-bootstrap'

// importamos boton cancelar
import BotonCancelar from '../../components/buttons/BotonCancelar'

const RegistrarPacientePage = () => {
  return (
    <Container>
        <FormularioRegistrarPaciente />
        <BotonCancelar message={"Cancelar"}/>
    </Container>
  )
}

export default RegistrarPacientePage