

// genermaos pagina para acreditar paciente
import React from 'react'
import FormularioAcreditarPaciente from '../components/FormularioAcreditarPaciente'

import { Container } from 'react-bootstrap'
// importamos boton cancelar
import BotonCancelar from '../components/BotonCancelar'

import ModalConfirmacionDatos from '../components/ModalConfirmacionDatos'


//IMPLEMENTAMOS NUEVO FORM
import DynamicForm from '../components/DynamicForm'
import pacienteModel from '../model/pacienteModel'


const AcreditarPaciente = () => {
  const handlePacienteSubmit = (data) => {
    console.log("Paciente cargado:", data);
    // acá podés enviar a Firestore, API, etc.
  };

  return (
    <Container className=''>
      <DynamicForm model={pacienteModel} onSubmit={handlePacienteSubmit} />
      <BotonCancelar />

      {/* agregamos modal de confirmacion */}
    </Container>
  )
}

export default AcreditarPaciente