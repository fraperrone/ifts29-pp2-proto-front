
// generamos la pagina para gestion de insumos
import React from 'react'
import NavbarComponent from '../../components/NavbarComponent'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
// importamos useState
import { useState } from 'react'
// importamos el useNavigate para navegar entre paginas
import { useNavigate } from 'react-router-dom'

// nuevmo formulario dinamico
import DynamicForm from '../../components/forms/DynamicForm'
import InsumosController from '../../components/InsumosController'
import BotonCancelar from '../../components/BotonCancelar'

import insumoModel from '../../model/insumosModel'
const InsumosPage = () => {
  // generamos el rol

  const handleSubmit = (data) => {
    alert("Datos agregados: " + data)
  }

  return (
    <Container className="m-5 p-5 bg-light rounded shadow">
      <h1>Gestión de Insumos</h1>
        <InsumosController />
        <DynamicForm model={insumoModel} onSubmit={handleSubmit}></DynamicForm>
        <BotonCancelar></BotonCancelar>
    </Container>
  )
}

export default InsumosPage
 