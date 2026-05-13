// generamos una pagina donde busque por dni y traiga los turnos de este dni y en cada fila una opcion para eliminar en caso de tocar abre un modal para confirmar eliminacion

import React, { useState } from "react";
import { Container, Form, Button, Table, Modal } from "react-bootstrap";
import BotonCancelar from "../components/BotonCancelar";

const CancelarTurnoPage = ({ obtenerTurnosPorDni, eliminarTurno }) => {
  const [dni, setDni] = useState("");
  const [turnos, setTurnos] = useState([]);
  const [showEliminarModal, setShowEliminarModal] = useState(false);
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);

  const buscarTurnos = async () => {
    const resultados = await obtenerTurnosPorDni(dni); // función que trae turnos desde backend
    setTurnos(resultados);
  };

  const confirmarEliminar = () => {
    if (turnoSeleccionado) {
      eliminarTurno(turnoSeleccionado.id); // función que elimina en backend
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
            <th>Fecha</th>
            <th>Estudio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((t) => (
            <tr key={t.id}>
              <td>{t.paciente}</td>
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
      <BotonCancelar></BotonCancelar>
    </Container>
  );
};

export default CancelarTurnoPage;
