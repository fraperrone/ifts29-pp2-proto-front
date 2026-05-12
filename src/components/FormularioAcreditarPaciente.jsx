// formulario de acreditar paciente
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Paciente from '../model/pacienteDatos'
const FormularioAcreditarPaciente = () => {
  // generamos el estado del formulario
  const [formData, setFormData] = useState({
        dni: ''  
  })
  return (

        // acreditamos por dni 
    <Form className="m-5 p-5 bg-light rounded shadow">
      <h2>Acreditar paciente</h2>
        <Form.Group className="mb-3" controlId="formDni">
            <Form.Label>DNI</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ingrese el DNI"
                value={formData.dni}
                onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
            Acreditar Paciente
        </Button>
    </Form>
  )
}

export default FormularioAcreditarPaciente