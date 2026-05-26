import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function DynamicForm({ model, onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        onSubmit(data);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} className="m-5 p-5 bg-light rounded shadow">
                {Object.entries(model).map(([field, config]) => (
                    <Form.Group className="mb-3" controlId={field} key={field}>
                        <Form.Label>{config.label}</Form.Label>
                        <Form.Control
                            defaultValue={config.value}
                            type={config.type}
                            name={field}
                            maxLength={config.maxLength}
                            pattern={config.pattern}
                            required={config.required}
                            placeholder={config.label}
                        />
                        <Form.Text className="text-muted">{config.description}</Form.Text>
                    </Form.Group>
                ))}
                <Button variant="primary" type="submit">
                    Aceptar
                </Button>
            </Form>
        </Container>
    );
}

export default DynamicForm;
