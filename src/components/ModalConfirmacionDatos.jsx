// generamos modal para confirmar datos de genericos
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'
const ModalConfirmacionDatos = ({ show, handleClose, datos }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmación de datos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* modal para confirmar datos genericos */}
                <p>¿Confirma que los siguientes datos son correctos?</p>
                <ul>
                    {Object.entries(datos).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalConfirmacionDatos