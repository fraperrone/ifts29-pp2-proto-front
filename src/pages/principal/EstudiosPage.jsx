// generamos la pagina de estudios de laboratorio
import React from 'react'
import NavbarComponent from '../../components/controllers/NavbarComponent'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

// importamos useState
import { useState } from 'react'
// importamos el useNavigate para navegar entre paginas
import { useNavigate } from 'react-router-dom'

const EstudiosPage = () => {
  // generamos el rol
  const [rol, setRol] = useState('superusuario') // por defecto administrativo, medico, superusuario
  const navigate = useNavigate()

  // ir a registrar paciente
  const irARegistrarPaciente = () => {
    navigate('/registrar-paciente')
  }

  const irAAcreditarPaciente = () => {
    navigate('/acreditacion-paciente')
  }

  const irAPagos = () => {
    navigate('/pagos')
  }

  const irAInsumos = () => {
    navigate('/insumos')
  }

  const irAEstadoPaciente = () => {
    navigate('/estado-paciente')
  }

  const irATurnos = () => {
    navigate('/asignar-turno')
  }

  const irACancelarTurno = () =>{
    navigate('/cancelar-turno')
  }

  const irAConfigurarAgenda = () => {
    navigate('/configurar-agenda')
  }

  const irARealizacionEstudio = () => {
    navigate('/realizacion-estudio')
  }

  const irARegistrarResultado = () =>{
    navigate('/registrar-resultado')
  }

  return (
    <Container className="m-5 p-5 bg-light rounded shadow">
      <h1>Estudios de Laboratorio</h1>
      <h2>Menu principal</h2>

      {/* agregamos bloque para seleccionar rol */}
      <div className="mb-3">
        <label htmlFor="rol" className="form-label">Seleccionar rol:</label>
        <select
          className="form-select"
          id="rol"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        >
          <option value="administrativo">Administrativo</option>
          <option value="medico">Médico</option>
          <option value="superusuario">Superusuario</option>
        </select>
      </div>

      {/* generamos bloque para administrativo para las tarjetas */}
      {(rol === 'administrativo' || rol === 'superusuario') && (
        <div>
          <Card className="my-5">
            <Card.Header>Atención</Card.Header>
            <Card.Body>
              <button className="btn btn-primary m-2" onClick={irARegistrarPaciente}>
                Registrar paciente
              </button>
              <button className="btn btn-secondary m-2" onClick={irAAcreditarPaciente}>
                Acreditar paciente
              </button>
              {/* <button className="btn btn-info m-2">
                Ingresar paciente a sala de espera
              </button> */}
              <button className="btn btn-warning m-2" onClick={irAEstadoPaciente}>
                Actualizar estado del paciente
              </button>
            </Card.Body>
          </Card>

          <Card className="my-5">
            <Card.Header>Turnos</Card.Header>
            <Card.Body>
              <button className="btn btn-primary m-2" onClick={irATurnos}>
                Asignar turno a paciente
              </button>
              <button className="btn btn-secondary m-2" onClick={irACancelarTurno}>Cancelar/ Consultar turno</button>
              <button className="btn btn-warning m-2" onClick={irAConfigurarAgenda}>
                Configurar agenda de turnos
              </button>
            </Card.Body>
          </Card>

          {/* 5. Pagos
      Registrar pago
      */}
          <Card className="my-5">
            <Card.Header>Pagos</Card.Header>
            <Card.Body>
              <button className="btn btn-primary m-2" onClick={irAPagos}>
                Registrar pago
              </button>
            </Card.Body>
          </Card>

          {/* 
      6. Insumos
        Controlar stock de insumos
       */}
          <Card className="my-5">
            <Card.Header>Insumos</Card.Header>
            <Card.Body>
              <button className="btn btn-primary m-2" onClick={irAInsumos}>
                Controlar stock de insumos
              </button>
            </Card.Body>
          </Card>
        </div>
      )}
      {/* hacemos el bloque para medico */}
      {(rol === 'medico' || rol === 'superusuario') && (
        <div>
          <Card className="my-5">
            <Card.Header>Estudios</Card.Header>
            <Card.Body>
              <button className="btn btn-primary m-2" onClick={irARealizacionEstudio}>
                Registrar realización del estudio
              </button>
              <button className="btn btn-secondary m-2" onClick={irARegistrarResultado}>
                Registrar resultado del estudio
              </button>
              <button className="btn btn-info m-2">
                Asociar insumos a estudio
              </button>
            </Card.Body>
          </Card>

          {/* 4. Historia Clínica
        Registrar información clínica
        Consultar historia clínica */}

          <Card className="my-5">
            <Card.Header>Historia Clínica</Card.Header>
            <Card.Body>
              <button className="btn btn-primary m-2">
                Registrar información clínica
              </button>
              <button className="btn btn-secondary m-2">
                Consultar historia clínica
              </button>
            </Card.Body>
          </Card>
        </div>
      )}

      {/* otro card
      3. Estudios
        Registrar realización del estudio
        Registrar resultado del estudio
        Asociar insumos a estudio
      */}
    </Container>
  )
}

export default EstudiosPage
