
// genermaos el formulario
import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import Paciente from '../model/pacienteDatos'
import ModalConfirmacionDatos from './ModalConfirmacionDatos'

const FormularioRegistrarPaciente = () => {
    // generamos el estado del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        fechaNacimiento: ''
    })

    const [showConfirmacionModal, setShowConfirmacionModal] = useState(false)

    return (
        <Container>
            <Form className="m-5 p-5 bg-light rounded shadow">
                <h2>Registrar paciente</h2>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el apellido"
                        value={formData.apellido}
                        onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDni">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el DNI"
                        value={formData.dni}
                        onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFechaNacimiento">
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control
                        type="date"
                        value={formData.fechaNacimiento}
                        onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={(e) => {
                    e.preventDefault()
                    setShowConfirmacionModal(true)
                }}>
                    Registrar Paciente
                </Button>
            </Form>
            {/* Modal de confirmacion de datos */}
            <ModalConfirmacionDatos
                show={showConfirmacionModal}
                handleClose={() => setShowConfirmacionModal(false)}
                datos={formData}
            />

        </Container>

    )
}

export default FormularioRegistrarPaciente
