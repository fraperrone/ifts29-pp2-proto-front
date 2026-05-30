// InsumosPage.jsx
import React, { useState } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import DynamicForm from '../../components/forms/DynamicForm'
import BotonCancelar from '../../components/buttons/BotonCancelar'

const InsumosPage = () => {
  // Estado inicial con insumos ya cargados
  const [insumos, setInsumos] = useState([
    { nombre: "Guantes", stock: 50, stock_minimo: 10 },
    { nombre: "Mascarillas", stock: 100, stock_minimo: 20 },
    { nombre: "Alcohol en gel", stock: 30, stock_minimo: 5 }
  ])

  // Modelo del formulario (sin ID)
  const insumoModel = {
    nombre: { label: "Nombre", type: "text", maxLength: 100, required: true, defaultValue: "Nuevo insumo" },
    stock: { label: "Stock", type: "number", required: true, defaultValue: 1 },
    stock_minimo: { label: "Stock mínimo", type: "number", required: true, defaultValue: 1 }
  }

  const handleSubmit = (data) => {
    setInsumos([...insumos, data])
  }

  const eliminarInsumo = (index) => {
    setInsumos(insumos.filter((_, i) => i !== index))
  }

  const agregarStock = (index) => {
    const nuevosInsumos = [...insumos]
    nuevosInsumos[index].stock = (parseInt(nuevosInsumos[index].stock) || 0) + 1
    setInsumos(nuevosInsumos)
  }

  return (
    <Container className="m-5 p-5 bg-light rounded shadow">
      <h1>Gestión de Insumos</h1>

      {/* Formulario arriba con valores por defecto */}
      <DynamicForm model={insumoModel} onSubmit={handleSubmit} />

      {/* Tabla abajo */}
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Stock mínimo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {insumos.map((insumo, index) => (
            <tr key={index}>
              <td>{insumo.nombre}</td>
              <td>{insumo.stock}</td>
              <td>{insumo.stock_minimo}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  className="me-2"
                  onClick={() => eliminarInsumo(index)}
                >
                  Eliminar
                </Button>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => agregarStock(index)}
                >
                  Agregar stock
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <BotonCancelar />
    </Container>
  )
}

export default InsumosPage
