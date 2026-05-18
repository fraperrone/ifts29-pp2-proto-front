// generamos formulario de pago
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import BotonCancelar from '../BotonCancelar'
import { useState } from 'react'



// formulario de pago
const FormularioPago = () => {



    return (
        <Form className="m-5 p-5 bg-light rounded shadow">
            <h2>Generar pago</h2>
            <Form.Group className="mb-3" controlId="formPaciente">
                <Form.Label>Paciente</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre del paciente"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMonto">
                <Form.Label>Monto</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Ingrese el monto del pago"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Generar Pago
            </Button>
            <BotonCancelar />
        </Form>
    )
}


export default FormularioPago