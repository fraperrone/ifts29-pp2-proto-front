import React, { useState } from "react";
import { Container, Form, Button, Table, Modal } from "react-bootstrap";
import BotonCancelar from "../../components/buttons/BotonCancelar";

const CancelarTurnoPage = () => {
  // Turnos de ejemplo en memoria
  const turnosEjemplo = [
    { id: 1, paciente: "Juan Pérez", dni: "12345678", fecha: "2026-05-21 09:00", estudio: "Radiografía" },
    { id: 2, paciente: "María Gómez", dni: "23456789", fecha: "2026-05-22 11:30", estudio: "Ecografía" },
    { id: 3, paciente: "Carlos López", dni: "34567890", fecha: "2026-05-23 15:00", estudio: "Resonancia" },
    { id: 4, paciente: "Ana Fernández", dni: "45678901", fecha: "2026-05-24 08:45", estudio: "Análisis de sangre" },
  ];

  const [dni, setDni] = useState("");
  const [turnos, setTurnos] = useState(turnosEjemplo);
  const [showEliminarModal, setShowEliminarModal] = useState(false);
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);

  const buscarTurnos = () => {
    if (dni.trim() === "") {
      setTurnos(turnosEjemplo); // si no se ingresa DNI, muestra todos
    } else {
      setTurnos(turnosEjemplo.filter(t => t.dni === dni));
    }
  };

  const confirmarEliminar = () => {
    if (turnoSeleccionado) {
      setTurnos(turnos.filter(t => t.id !== turnoSeleccionado.id));
    }
    setShowEliminarModal(false);
    setTurnoSeleccionado(null);
  };

  return (
    <Container className="my-4">
      <h2>Buscar Turnos por DNI</h2>
      <Form className="d-flex mb-3">
        <Form.Control
          type="text"
          placeholder="Ingrese DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        <Button variant="primary" className="ms-2" onClick={buscarTurnos}>
          Buscar
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>DNI</th>
            <th>Fecha</th>
            <th>Estudio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((t) => (
            <tr key={t.id}>
              <td>{t.paciente}</td>
              <td>{t.dni}</td>
              <td>{t.fecha}</td>
              <td>{t.estudio}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    setTurnoSeleccionado(t);
                    setShowEliminarModal(true);
                  }}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de confirmación */}
      <Modal show={showEliminarModal} onHide={() => setShowEliminarModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Seguro que deseas eliminar este turno?</p>
          {turnoSeleccionado && (
            <ul>
              <li><strong>Paciente:</strong> {turnoSeleccionado.paciente}</li>
              <li><strong>DNI:</strong> {turnoSeleccionado.dni}</li>
              <li><strong>Fecha:</strong> {turnoSeleccionado.fecha}</li>
              <li><strong>Estudio:</strong> {turnoSeleccionado.estudio}</li>
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEliminarModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmarEliminar}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>

      <BotonCancelar />
    </Container>
  );
};

export default CancelarTurnoPage;

