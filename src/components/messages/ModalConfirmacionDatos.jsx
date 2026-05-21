// generamos modal para confirmar datos de genericos
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'

import MessageModal from './MessageModal'

// importamos spinner
import LoadingSpinner from '../spinner/LoadingSpinner'

const ModalConfirmacionDatos = ({ show, handleClose, datos }) => {

    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState("success"); // "success" | "error" | "cancel"
    const [message, setMessage] = useState("");

    // configuramos spinner
    const [loading, setLoading] = useState(false)
    const [modalGeneric, setModalGeneric] = useState(true)

    const fakeRequest = (shouldSucceed = true) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldSucceed) {
                    resolve("Operación exitosa");
                } else {
                    reject(new Error("Hubo un error en la operación"));
                }
            }, 1500); // simula 1.5 segundos de espera
        });
    };

    const handleModal = async () => {
        try {
            setLoading(true)

            const result = await fakeRequest(false)
            setStatus(true); // o "error" / "cancel"
            setMessage("Operación exitosa");
            setShowModal(true);

        } catch (error) {
            setStatus(false)
            setMessage(error.message)
            setShowModal(true)
        } finally {
            handleClose();
            setLoading(false)

        }
    };

    return (
        <>
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


                    {/* actualizamos spinner */}
                    {loading ? (

                        <LoadingSpinner />

                    ) : (
                        <>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="primary" onClick={handleModal}>
                                Confirmar
                            </Button>
                        </>

                    )

                    }
                </Modal.Footer>


            </Modal>

            <MessageModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                success={status}
                message={message}

            />


        </>
    )
}

export default ModalConfirmacionDatos