//generamos una page para asignar turno a pacientes con estudios especificos

import React, { useState } from "react";
import { Container, Form, Button, Table, Modal } from "react-bootstrap";

const AsignarTurnoPage = () => {
  const [paciente, setPaciente] = useState("");
  const [fecha, setFecha] = useState("");
  const [estudio, setEstudio] = useState("");
  const [turnos, setTurnos] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

  const estudiosDisponibles = ["Laboratorio", "Radiografía", "Ecografía", "Resonancia"];

  const handleAsignar = () => {
    setShowConfirm(true);
  };

  const confirmarTurno = () => {
    const nuevoTurno = { paciente, fecha, estudio };
    setTurnos([...turnos, nuevoTurno]);
    setShowConfirm(false);
    setPaciente("");
    setFecha("");
    setEstudio("");
  };

  return (
    <Container className="my-4">
      <h2>Asignar Turno a Paciente</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Paciente</Form.Label>
          <Form.Control
            type="text"
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
            placeholder="Nombre del paciente"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Estudio</Form.Label>
          <Form.Select
            value={estudio}
            onChange={(e) => setEstudio(e.target.value)}
          >
            <option value="">Seleccione un estudio</option>
            {estudiosDisponibles.map((est, i) => (
              <option key={i} value={est}>{est}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={handleAsignar}>
          Asignar Turno
        </Button>
      </Form>

      {/* Tabla de turnos asignados */}
      <h3 className="mt-4">Turnos Asignados</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Estudio</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((t, idx) => (
            <tr key={idx}>
              <td>{t.paciente}</td>
              <td>{t.fecha}</td>
              <td>{t.estudio}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de confirmación */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Confirma asignar el siguiente turno?</p>
          <ul>
            <li><strong>Paciente:</strong> {paciente}</li>
            <li><strong>Fecha:</strong> {fecha}</li>
            <li><strong>Estudio:</strong> {estudio}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmarTurno}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AsignarTurnoPage;
