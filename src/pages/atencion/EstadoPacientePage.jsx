

// vamos a hacer una pagina para mostrar el estado del paciente, con un boton para actualizar el estado del paciente, que abra un modal para actualizar el estado del paciente, y otro boton para ingresar el paciente a la sala de espera, que abra otro modal para ingresar el paciente a la sala de espera, y otro boton para acreditar el paciente, que abra otro modal para acreditar el paciente
import React from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import BotonCancelar from '../../components/BotonCancelar'
// import FormularioActualizarEstado from '../components/FormularioActualizarEstado'
// import FormularioIngresarSalaEspera from '../components/FormularioIngresarSalaEspera'
// import FormularioAcreditarPaciente from '../components/FormularioAcreditarPaciente'
const EstadoPacientePage = () => {
    // generamos los useState para controlar los modales
    const [showActualizarEstadoModal, setShowActualizarEstadoModal] = useState(false)
    const [showIngresarSalaEsperaModal, setShowIngresarSalaEsperaModal] = useState(false)
    const [showAcreditarPacienteModal, setShowAcreditarPacienteModal] = useState(false)


    // simulamos datos de varios pacientes, con los siguientes campos: nombre, apellido, dni, estado, sala de espera, acreditado
    const pacientes = [
        {
            nombre: 'Juan',
            apellido: 'Perez',
            dni: '36400855',
            estado: 'En espera',
            salaEspera: 'Sala 1',
            acreditado: false
        },
        {
            nombre: 'María',
            apellido: 'González',
            dni: '37123456',
            estado: 'En tratamiento',
            salaEspera: 'Sala 2',
            acreditado: true
        }
    ]


    return (
        <Container className="m-5 p-5 bg-light rounded shadow">
            <h1>Estado del paciente</h1>
            {/* mostramos una tabla con el estado del paciente, con los siguientes campos: nombre, apellido, dni, estado, sala de espera, acreditado */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Estado</th>
                        <th>Sala de espera</th>
                        <th>Acreditado</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map((paciente, index) => (
                        <tr key={index}>
                            <td>{paciente.nombre}</td>
                            <td>{paciente.apellido}</td>
                            <td>{paciente.dni}</td>
                            <td>{paciente.estado}</td>
                            <td>{paciente.salaEspera}</td>
                            <td>{paciente.acreditado ? 'Sí' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {/* <Button variant="warning" onClick={() => setShowActualizarEstadoModal(true)}>
                Actualizar estado del paciente
            </Button>
            <Button variant="info" onClick={() => setShowIngresarSalaEsperaModal(true)}>
                Ingresar paciente a sala de espera
            </Button>
            <Button variant="primary" onClick={() => setShowAcreditarPacienteModal(true)}>
                Acreditar paciente
            </Button> */}
            {/* <Modal show={showActualizarEstadoModal} onHide={() => setShowActualizarEstadoModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar estado del paciente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormularioActualizarEstado />
                </Modal.Body>
            </Modal>
            <Modal show={showIngresarSalaEsperaModal} onHide={() => setShowIngresarSalaEsperaModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingresar paciente a sala de espera</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormularioIngresarSalaEspera />
                </Modal.Body>
            </Modal>
            <Modal show={showAcreditarPacienteModal} onHide={() => setShowAcreditarPacienteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Acreditar paciente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormularioAcreditarPaciente />
                </Modal.Body>
            </Modal> */}

            {/* boton cancelar */}
            <BotonCancelar />
        </Container>
    )
}

export default EstadoPacientePage
