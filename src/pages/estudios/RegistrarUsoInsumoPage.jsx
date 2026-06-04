import React, { useState } from "react";
import { Container, Card, Form, Button, Table } from "react-bootstrap";

const RegistrarUsoInsumoPage = () => {
  // Estado con insumos ya registrados de ejemplo
  const [insumos, setInsumos] = useState([
    { id_insumo: 200, nombre: "Alcohol en gel", cantidad: 1, fecha: "2026-06-03" },
  ]);

  // Valores por defecto en el formulario
  const [formData, setFormData] = useState({
    id_insumo: 201,
    nombre: "Barbijos quirúrgicos",
    cantidad: 10,
    fecha: "2026-06-03",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInsumos([...insumos, formData]);
    alert("Insumo registrado correctamente");
    // Podés resetear o dejar valores por defecto
    setFormData({ id_insumo: 202, nombre: "Guantes descartables", cantidad: 5, fecha: "2026-06-03" });
  };

  return (
    <Container className="my-4">
      <h2>Registrar Uso de Insumos</h2>

      {/* Formulario */}
      <Card className="shadow-lg border-0 mb-4">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>ID Insumo</Form.Label>
              <Form.Control
                type="number"
                name="id_insumo"
                value={formData.id_insumo}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre del Insumo</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cantidad Utilizada</Form.Label>
              <Form.Control
                type="number"
                name="cantidad"
                value={formData.cantidad}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fecha de Uso</Form.Label>
              <Form.Control
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Registrar Insumo
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Tabla de insumos registrados */}
      <h4>Historial de Insumos Registrados</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {insumos.map((i, idx) => (
            <tr key={idx}>
              <td>{i.id_insumo}</td>
              <td>{i.nombre}</td>
              <td>{i.cantidad}</td>
              <td>{i.fecha}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RegistrarUsoInsumoPage;
