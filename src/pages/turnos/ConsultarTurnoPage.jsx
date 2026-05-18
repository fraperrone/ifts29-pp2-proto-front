// simulamos una pagina para buscar turnos por dni, con un formulario para ingresar el dni y un boton para buscar, que abra un modal con la informacion del turno y un boton para cancelar el turno, y otro boton para acreditar el paciente, que abra otro modal para acreditar el paciente, y otro boton para realizar el pago, que abra otro modal para realizar el pago
import React, { useState } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import FormularioAcreditarPaciente from '../components/FormularioAcreditarPaciente'
const ConsultarTurnoPage = () => {
    // generamos el estado del formulario
    const [formData, setFormData] = useState({
        dni: '36400855'
    })
    // usestates del modal
    const [showTurnoModal, setShowTurnoModal] = useState(false)
    const [showAcreditarModal, setShowAcreditarModal] = useState(false)
    const [showPagoModal, setShowPagoModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // simulamos la busqueda del turno, si el dni es 36400855 se muestra el turno, sino se muestra un mensaje de error
        if (formData.dni === '36400855') {
            setShowTurnoModal(true)
        } else {
            alert('Paciente no encontrado')
        }
    }

    return (
        <Container>
            <Form className="m-5 p-5 bg-light rounded shadow">
                <h2>Consultar turno por DNI</h2>
                <Form.Group className="mb-3" controlId="formDni">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el DNI"
                        value={formData.dni}
                        onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                    />
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Buscar turno
                    </Button>
                </Form.Group>
            </Form>
            {/* Modal para mostrar el turno, con un boton para cancelar el turno, y otro boton para acreditar el paciente, que abra otro modal para acreditar el paciente, y otro boton para realizar el pago, que abra otro modal para realizar el pago */}
            <Modal show={showTurnoModal} onHide={() => setShowTurnoModal(false)}>
                <Modal.Header>
                    <Modal.Title>Turno encontrado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Paciente: Juan Perez</p>
                    <p>Fecha: 01/01/2024</p>
                    <p>Hora: 10:00</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShowTurnoModal(false)}>
                        Cancelar turno
                    </Button>
                    <Button variant="secondary" onClick={() => setShowAcreditarModal(true)}>
                        Acreditar paciente
                    </Button>
                    <Button variant="success" onClick={() => setShowPagoModal(true)}>
                        Realizar pago
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Modal para acreditar el paciente */}
        </Container>
    )
}

export default ConsultarTurnoPage