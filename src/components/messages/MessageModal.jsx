import React from "react";
import { Modal, Button, Alert } from "react-bootstrap";

function MessageModal({ show, handleClose, success, message }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {success ? "Operación Exitosa" : "Error"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant={success ? "success" : "danger"}>
          {message}
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MessageModal;
