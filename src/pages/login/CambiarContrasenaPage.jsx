import { useState } from "react";
import { Button, Form, Modal, Container } from "react-bootstrap";

export default function CambiarContrasenaPage() {

  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const cambiarContrasena = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  };

  const guardar = async () => {
    await cambiarContrasena();
    setShow(true);
  };

  return (
    <Container className="m-5 p-5 bg-light rounded shadow">
      <h2>Cambiar Contraseña</h2>

      <Form.Group className="mb-3">
        <Form.Label>Nueva contraseña</Form.Label>

        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button onClick={guardar}>
        Guardar
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Operación Exitosa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Contraseña modificada correctamente.
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => setShow(false)}
          >
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}