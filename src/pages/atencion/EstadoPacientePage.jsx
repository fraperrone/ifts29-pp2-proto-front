import React, { useState } from 'react'
import { Container, Table, Button, Modal, Form } from 'react-bootstrap'
import BotonCancelar from '../../components/buttons/BotonCancelar'

const EstadoPacientePage = () => {
    const [showActualizarEstadoModal, setShowActualizarEstadoModal] = useState(false)
    const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null)
    const [nuevoEstado, setNuevoEstado] = useState("")
    const [pacientes, setPacientes] = useState([
        {
            nombre: 'Juan',
            apellido: 'Perez',
            dni: '36400855',
            estado: 'En espera',
            tipoEstudio: 'Radiografía'
        },
        {
            nombre: 'María',
            apellido: 'González',
            dni: '37123456',
            estado: 'En espera',
            tipoEstudio: 'Laboratorio'
        }
    ])

    // simulamos datos de pacientes en sala de espera


    return (
        <Container className="m-5 p-5 bg-light rounded shadow">
            <h1>Pacientes en sala de espera</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Estado</th>
                        <th>Tipo de estudio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map((p, idx) => (
                        <tr key={idx}>
                            <td>{p.nombre}</td>
                            <td>{p.apellido}</td>
                            <td>{p.dni}</td>
                            <td>{p.estado}</td>
                            <td>{p.tipoEstudio}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    onClick={() => {
                                        setPacienteSeleccionado(p)
                                        setShowActualizarEstadoModal(true)
                                    }}
                                >
                                    Actualizar estado
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal Actualizar Estado */}
            <Modal show={showActualizarEstadoModal} onHide={() => setShowActualizarEstadoModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar estado del paciente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {pacienteSeleccionado && (
                        <p>
                            Actualizar estado de <strong>{pacienteSeleccionado.nombre} {pacienteSeleccionado.apellido}</strong> (DNI {pacienteSeleccionado.dni})
                        </p>
                    )}
                    <Form.Select value={nuevoEstado} onChange={(e) => setNuevoEstado(e.target.value)}>
                        <option value="">Seleccione nuevo estado</option>
                        <option value="En espera">En espera</option>
                        <option value="En atención">En atención</option>
                        <option value="Finalizado">Finalizado</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowActualizarEstadoModal(false)}>Cancelar</Button>
                    <Button variant="primary" onClick={() => {
                        // Aquí iría la lógica para actualizar el estado en backend
                        pacienteSeleccionado.estado = nuevoEstado // Simulamos actualización
                        alert(`Estado actualizado a "${nuevoEstado}" para ${pacienteSeleccionado?.nombre}`)
                        setShowActualizarEstadoModal(false)
                    }}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

            <BotonCancelar />
        </Container>
    )
}

export default EstadoPacientePage
