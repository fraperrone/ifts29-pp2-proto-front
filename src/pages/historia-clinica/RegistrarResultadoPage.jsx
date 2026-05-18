// registramos resultado de estudio 
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DynamicForm from "../../components/DynamicForm";
import resultadoEstudioModel from "../../model/resultadoEstudioModel";
function ResultadoEstudioPage() {
  const handleResultadoSubmit = (data) => {
    console.log("Resultado de estudio registrado:", data);
    // acá podés enviar a Firestore, API, etc.
  };

  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title className="mb-4 text-center fw-bold">
                Registrar Resultado de Estudio
              </Card.Title>
              <DynamicForm
                model={resultadoEstudioModel}
                onSubmit={handleResultadoSubmit}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ResultadoEstudioPage;
