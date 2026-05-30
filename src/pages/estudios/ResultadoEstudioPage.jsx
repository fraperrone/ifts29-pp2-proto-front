// ResultadoEstudioPage.jsx
import React, { useState } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";

const ResultadoEstudioPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [estudioSeleccionado, setEstudioSeleccionado] = useState(null);

  // Datos simulados
  const estudios = [
    { id: 1, paciente: "Juan Pérez", estudio: "Radiografía", fecha: "2026-05-20", estado: "Entregado" },
    { id: 2, paciente: "María López", estudio: "Laboratorio", fecha: null, estado: "Pendiente" },
    { id: 3, paciente: "Carlos Gómez", estudio: "Ecografía", fecha: "2026-05-25", estado: "Entregado" },
    { id: 4, paciente: "Ana Torres", estudio: "Resonancia", fecha: null, estado: "Pendiente" },
  ];

  const reenviarEstudio = (estudio) => {
    setEstudioSeleccionado(estudio);
    setShowModal(true);
  };

  return (
    <Container className="my-4">
      <h2>Resultados de Estudios</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Estudio</th>
            <th>Fecha entrega</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estudios.map((e) => (
            <tr key={e.id}>
              <td>{e.paciente}</td>
              <td>{e.estudio}</td>
              <td>{e.fecha ? e.fecha : "-"}</td>
              <td>{e.estado}</td>
              <td>
                {e.estado === "Entregado" && (
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => reenviarEstudio(e)}
                  >
                    Reenviar
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
          <Modal.Title>Reenvío de estudio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {estudioSeleccionado && (
            <p>
              Estudio <strong>{estudioSeleccionado.estudio}</strong> del paciente{" "}
              <strong>{estudioSeleccionado.paciente}</strong> fue reenviado a la
              casilla del mail.
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ResultadoEstudioPage;
