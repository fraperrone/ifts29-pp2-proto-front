// hacemos la page para realizacion de estudio page
import React, { useState } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";

const RealizacionEstudioPage = () => {
  const [estudiosPendientes, setEstudiosPendientes] = useState([
    { id: 1, paciente: "Juan Pérez", estudio: "Radiografía", fecha: "2026-05-15", realizado: false },
    { id: 2, paciente: "María López", estudio: "Laboratorio", fecha: "2026-05-16", realizado: false },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [estudioSeleccionado, setEstudioSeleccionado] = useState(null);

  const abrirModal = (estudio) => {
    setEstudioSeleccionado(estudio);
    setShowModal(true);
  };

  const confirmarRealizacion = () => {
    setEstudiosPendientes(estudiosPendientes.map(e =>
      e.id === estudioSeleccionado.id ? { ...e, realizado: true } : e
    ));
    setShowModal(false);
    setEstudioSeleccionado(null);
  };

  return (
    <Container className="my-4">
      <h2>Realización de Estudios</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Estudio</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estudiosPendientes.map((e) => (
            <tr key={e.id}>
              <td>{e.paciente}</td>
              <td>{e.estudio}</td>
              <td>{e.fecha}</td>
              <td>{e.realizado ? "Realizado" : "Pendiente"}</td>
              <td>
                {!e.realizado && (
                  <Button variant="success" size="sm" onClick={() => abrirModal(e)}>
                    Marcar como realizado
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de confirmación */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar realización</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {estudioSeleccionado && (
            <>
              <p>¿Confirma que se realizó el siguiente estudio?</p>
              <ul>
                <li><strong>Paciente:</strong> {estudioSeleccionado.paciente}</li>
                <li><strong>Estudio:</strong> {estudioSeleccionado.estudio}</li>
                <li><strong>Fecha:</strong> {estudioSeleccionado.fecha}</li>
              </ul>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmarRealizacion}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default RealizacionEstudioPage;
