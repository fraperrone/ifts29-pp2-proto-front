import React, { useState } from "react";
import { Container, Form, Button, Modal, Card } from "react-bootstrap";
import BotonCancelar from "../../components/buttons/BotonCancelar";
import facturaModel from "../../model/facturaModel";

const PagosPage = () => {
  // Valores por defecto directamente en la página
  const defaultValues = {
    id_paciente: 101,
    fecha: "2026-05-26",
    monto: 1500.5,
    medio_pago: "Tarjeta",
    tipo_pago: "Obra Social",
    nro_carnet: "OS-987654",
  };

  const [formData, setFormData] = useState(defaultValues);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showEmitiendoComprobanteModal, setShowEmitiendoComprobanteModal] = useState(false);
  const [showComprobanteModal, setShowComprobanteModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const handleCloseConfirm = () => setShowConfirmModal(false);

  const emitirComprobante = () => {
    setShowConfirmModal(false);
    setShowEmitiendoComprobanteModal(true);
    // simulamos proceso de emisión
    setTimeout(() => {
      setShowEmitiendoComprobanteModal(false);
      setShowComprobanteModal(true);
    }, 2000);
  };

  return (
    <Container className="my-4">
      <Card>
        <Card.Header>
          <h2>Generar Pago</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {Object.entries(facturaModel).map(([key, field]) => {
              if (key === "nro_carnet" && formData.tipo_pago !== "Obra Social") {
                return null;
              }

              if (field.type === "select") {
                return (
                  <Form.Group className="mb-3" key={key}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Select
                      name={key}
                      required={field.required}
                      value={formData[key] || ""}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione...</option>
                      {field.options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                );
              }

              return (
                <Form.Group className="mb-3" key={key}>
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Control
                    type={field.type}
                    name={key}
                    required={field.required}
                    maxLength={field.maxLength}
                    step={field.step}
                    value={formData[key] || ""}
                    onChange={handleChange}
                  />
                </Form.Group>
              );
            })}
            <Button variant="success" type="submit">
              Confirmar Pago
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          <BotonCancelar />
        </Card.Footer>
      </Card>

      {/* Modal de confirmación */}
      <Modal show={showConfirmModal} onHide={handleCloseConfirm} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Datos de Pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Revise los datos antes de confirmar:</p>
          <ul>
            {Object.entries(formData).map(([key, value]) => (
              <li key={key}>
                <strong>{facturaModel[key]?.label || key}:</strong> {value}
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={emitirComprobante}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de emisión de comprobante */}
      <Modal show={showEmitiendoComprobanteModal} centered backdrop="static" keyboard={false}>
        <Modal.Body className="text-center">
          <h5>Emitiendo comprobante...</h5>
        </Modal.Body>
      </Modal>
      {/* // modal de comprobante simulacion con datos */}
      <Modal show={showComprobanteModal} centered backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Comprobante de Pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>ID Paciente:</strong> {formData.id_paciente}</p>
          <p><strong>Fecha:</strong> {formData.fecha}</p>
          <p><strong>Monto:</strong> ${formData.monto}</p>
          <p><strong>Medio de Pago:</strong> {formData.medio_pago}</p>
          <p><strong>Tipo de Pago:</strong> {formData.tipo_pago}</p>
          {formData.tipo_pago === "Obra Social" && (
            <p><strong>Nro de Carnet:</strong> {formData.nro_carnet}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowComprobanteModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>

  );
};

export default PagosPage;
