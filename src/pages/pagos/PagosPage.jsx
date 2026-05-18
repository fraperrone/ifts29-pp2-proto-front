// generamos pagina para generar pago
import React from 'react'
import { Container } from 'react-bootstrap'
// importamos boton cancelar
import BotonCancelar from '../../components/BotonCancelar'
import FormularioPago from '../../components/forms/FormularioPago'
import DynamicForm from '../../components/forms/DynamicForm'
import facturaModel from '../../model/facturaModel'
const PagosPage = () => {
  const handleSubmit = (data) => {
    alert("Data ingresada: " + data)
  }
  return (
    <Container>
        <DynamicForm model={facturaModel} onSubmit={handleSubmit} />


        <BotonCancelar />
    </Container>
  )
}


export default PagosPage