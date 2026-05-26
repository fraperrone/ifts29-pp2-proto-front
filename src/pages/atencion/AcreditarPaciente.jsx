

// genermaos pagina para acreditar paciente
import React, { useState } from 'react'
import FormularioAcreditarPaciente from '../../components/forms/FormularioAcreditarPaciente'

import { Container } from 'react-bootstrap'
// importamos boton cancelar
import BotonCancelar from '../../components/buttons/BotonCancelar'

import ModalConfirmacionDatos from '../../components/messages/ModalConfirmacionDatos'


//IMPLEMENTAMOS NUEVO FORM
import DynamicForm from '../../components/forms/DynamicForm'
import pacienteModel from '../../model/pacienteModel'
import MessageComponent from '../../components/messages/MessageComponent'

import { Modal } from 'react-bootstrap'

import { Button } from 'react-bootstrap'

import MessageModal from '../../components/messages/MessageModal'

const AcreditarPaciente = () => {
  const handlePacienteSubmit = (data) => {
      setShow(true)
      setDni(data.id_paciente)

  };


  const modelId = {
    id_paciente: {
      value: "36400855",
      label: "ID Paciente",
      type: "number",
      maxLength: 6,
      required: true,
      description: "Identificador único del paciente",
    },
  }

  // configuracion modal
  const [show, setShow] = useState(false)
  const [dni, setDni]= useState([])
  const [messageModal, setMessageModal] = useState(false)

  const handleClose = () => {
    setShow(false)
  }


  

 

  return (
    <Container className=''>

      <DynamicForm model={modelId} onSubmit={handlePacienteSubmit} />
      <BotonCancelar />

      {/* agregamos modal de confirmacion */}
      
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>DNI encontrado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>El DNI <strong>{dni}</strong> fue encontrado correctamente.</p>
            <p>Seleccione una opción para continuar:</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => setMessageModal(true)}>
              Ingresar a sala de espera
            </Button>
            <Button variant="primary" onClick={() => alert("Redirigiendo a pago...")}>
              Realizar pago
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      
      <MessageModal show={messageModal} success={true} handleClose={()=>{setMessageModal(false)}  } message={ "ok"}/>

    </Container>
  )
}

export default AcreditarPaciente