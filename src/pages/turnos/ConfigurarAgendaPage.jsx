// vams a hacer pagina para configurar agenda de turnos


import React, { useState } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";

const ConfigurarAgendaPage = () => {
  const [dia, setDia] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [estudio, setEstudio] = useState("");
  const [disponibilidades, setDisponibilidades] = useState([]);

  const estudiosDisponibles = ["Laboratorio", "Radiografía", "Ecografía", "Resonancia"];

  const agregarDisponibilidad = () => {
    const nueva = { dia, horaInicio, horaFin, estudio };
    setDisponibilidades([...disponibilidades, nueva]);
    setDia("");
    setHoraInicio("");
    setHoraFin("");
    setEstudio("");
  };

  return (
    <Container className="my-4">
      <h2>Configurar Agenda de Turnos</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Día</Form.Label>
          <Form.Control
            type="date"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Hora inicio</Form.Label>
          <Form.Control
            type="time"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Hora fin</Form.Label>
          <Form.Control
            type="time"
            value={horaFin}
            onChange={(e) => setHoraFin(e.target.value)}
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

        <Button variant="primary" onClick={agregarDisponibilidad}>
          Agregar Disponibilidad
        </Button>
      </Form>

      <h3 className="mt-4">Disponibilidades configuradas</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Día</th>
            <th>Hora inicio</th>
            <th>Hora fin</th>
            <th>Estudio</th>
          </tr>
        </thead>
        <tbody>
          {disponibilidades.map((d, idx) => (
            <tr key={idx}>
              <td>{d.dia}</td>
              <td>{d.horaInicio}</td>
              <td>{d.horaFin}</td>
              <td>{d.estudio}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ConfigurarAgendaPage;
