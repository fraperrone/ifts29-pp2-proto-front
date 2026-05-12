// generamos pagina para generar pago
import React from 'react'
import { Container } from 'react-bootstrap'
// importamos boton cancelar
import BotonCancelar from '../components/BotonCancelar'
import FormularioPago from '../components/FormularioPago'
const PagosPage = () => {
  return (
    <Container>
        <FormularioPago />
        <BotonCancelar />
    </Container>
  )
}


export default PagosPage