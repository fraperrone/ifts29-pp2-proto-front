// generamos un componente para controlar los insumos un panel de control
import React from 'react'

// importamos useState
import { useState } from 'react'
// importamos el useNavigate para navegar entre paginas
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
const InsumosController = () => {


    //   simulamos lista de insumos con cantidad y nombre
    const [insumos, setInsumos] = useState([
        { id: 1, nombre: 'Reactivo A', cantidad: 100 },
        { id: 2, nombre: 'Reactivo B', cantidad: 50 },
        { id: 3, nombre: 'Reactivo C', cantidad: 200 },
    ])


    // generamos los useSate para controlar los modales de agregar y eliminar insumos
    const [showAgregarModal, setShowAgregarModal] = useState(false)
    const [showEliminarModal, setShowEliminarModal] = useState(false)
    const [insumoAEliminar, setInsumoAEliminar] = useState(null)

    // funciones para agregar y eliminar insumos, que modifiquen el estado de los insumos
    const agregarInsumo = (nombre, cantidad) => {
        const nuevoInsumo = {
            id: insumos.length + 1,
            nombre,
            cantidad,
        }
        setInsumos([...insumos, nuevoInsumo])
    }
    const eliminarInsumo = (id) => {
        const nuevosInsumos = insumos.filter((insumo) => insumo.id !== id)
        setInsumos(nuevosInsumos)
    }

    const botonCancelar = () => {
        setShowAgregarModal(false)
        setShowEliminarModal(false)
    }

    const eliminarInsumoConfirmado = (id) => {
        eliminarInsumo(id)
        setShowEliminarModal(false)
    }

    return (
        // simulamos un gestor para controlar los insumos, con una tabla que muestre el nombre y la cantidad, y un boton para agregar insumos con boton de agregar insumos que abra un modal para agregar insumos, y un boton para eliminar insumos que abra un modal para eliminar insumos
        <Container>
            <Card>
                <Card.Header>Gestión de Insumos</Card.Header>
                <Card.Body>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {insumos.map((insumo) => (
                                <tr key={insumo.id}>
                                    <td>{insumo.nombre}</td>
                                    <td>{insumo.cantidad}</td>
                                    <td>
                                        <Button variant="danger" size="sm" onClick={() => {
                                            setInsumoAEliminar(insumo)
                                            setShowEliminarModal(true)
                                        }}>
                                            Eliminar
                                        </Button>
                                        <Button variant="primary" size="sm" className="ms-2" onClick={() => setShowAgregarModal(true)}>
                                            Agregar
                                        </Button>
                                        
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
            <Modal show={showAgregarModal} onHide={() => setShowAgregarModal(false)}>
                <Modal.Header>
                    <Modal.Title>Agregar Insumo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre del insumo</label>
                            <input type="text" className="form-control" id="nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cantidad" className="form-label">Cantidad</label>
                            <input type="number" className="form-control" id="cantidad" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={botonCancelar}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => {
                        const nombre = document.getElementById("nombre").value
                        const cantidad = document.getElementById("cantidad").value
                        agregarInsumo(nombre, cantidad)
                        setShowAgregarModal(false)
                    }}>
                        Agregar
                    </Button>
                </Modal.Footer>
            </Modal>
             <Modal show={showEliminarModal} onHide={() => setShowEliminarModal(false)}>
                <Modal.Header>
                    <Modal.Title>Eliminar Insumo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¿Estás seguro que deseas eliminar este insumo?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={botonCancelar}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={() => {
                        // Lógica para eliminar el insumo
                        eliminarInsumoConfirmado(insumoAEliminar.id)
                    }}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

      
export default InsumosController

