// formulario de acreditar paciente
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Paciente from '../model/pacienteDatos'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'

import FormularioPago from './FormularioPago'
import { useNavigate } from 'react-router-dom'
import ModalConfirmacionDatos from './ModalConfirmacionDatos'

const FormularioAcreditarPaciente = () => {
    // generamos el estado del formulario
    const [formData, setFormData] = useState({
        dni: '36400855'
    })
    // generamos el navigate para navegar entre paginas
    const navigate = useNavigate()

    //   simulamos un dni para paciente que existe para abrir un modal para acreditar o realizar pago y sino un modal que diga paciente no registrado desea registrarlo con otro modal

    // usestates del modal
    const [showAcreditarModal, setShowAcreditarModal] = useState(false)
    const [showNoRegistradoModal, setShowNoRegistradoModal] = useState(false)
    const [showFormularioPago, setShowFormularioPago] = useState(false)


    // funciones

    const handleSubmit = (e) => {
        e.preventDefault()
        // simulamos la acreditacion del paciente, si el dni es 36400855 se acredita, sino se muestra un mensaje de error
        if (formData.dni === '36400855') {
            setShowAcreditarModal(true)
        } else {
            setShowNoRegistradoModal(true)
        }
    }


    return (

        // acreditamos por dni 
        <Container>
            <Form className="m-5 p-5 bg-light rounded shadow">
                <h2>Acreditar paciente</h2>
                <Form.Group className="mb-3" controlId="formDni">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el DNI"
                        value={formData.dni}
                        onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Acreditar Paciente
                </Button>
            </Form>
            {/* Modal para acreditar paciente, si el dni es 36400855 se acredita, sino se muestra un mensaje de error */}
            <Modal show={showAcreditarModal} onHide={() => setShowAcreditarModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Paciente acreditado</Modal.Title>
                </Modal.Header>
                <Modal.Body>El paciente ha sido acreditado exitosamente.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShowAcreditarModal(false)}>
                        Aceptar
                    </Button>
                    {/* boton realizar pago nos re dirige a la pagina de pago */}
                    <Button variant="secondary" onClick={() => { navigate('/pagos') }}>
                        Realizar pago
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* agregamos modal de confirmacion de datos */}
            <ModalConfirmacionDatos
                show={showFormularioPago}
                handleClose={() => setShowFormularioPago(false)}
                datos={formData}
            />


        </Container>



    )
}

export default FormularioAcreditarPaciente