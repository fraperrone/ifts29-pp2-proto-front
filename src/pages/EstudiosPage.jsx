// generamos la pagina de estudios de laboratorio
import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
const EstudiosPage = () => {
  return (
    <Container className="m-5 p-5 bg-light rounded shadow ">
      <h1>Estudios de Laboratorio</h1>
      <h2>Menu principal</h2>
      {/* menu principal botones - separado en secciones */}
      {/* seccion turno */}
      {/* Asignar turno a paciente
        Cancelar turno
        Consultar turnos
        Configurar agenda de turnos */}

      {/* lo hacemos tipo card con bootstrap */}
      <Card className='my-5'>
        <Card.Header >Turnos</Card.Header>
        <Card.Body>
          <button className="btn btn-primary m-2">Asignar turno a paciente</button>
          <button className="btn btn-secondary m-2">Cancelar turno</button>
          <button className="btn btn-info m-2">Consultar turnos</button>
          <button className="btn btn-warning m-2">Configurar agenda de turnos</button>
        </Card.Body>
      </Card>


      {/* atencion */}
      {/* 2. Atención
      Registrar paciente
      Acreditar paciente
      Ingresar paciente a sala de espera
      Actualizar estado del paciente */}
      <Card className='my-5'>
        <Card.Header >Atención</Card.Header>
        <Card.Body>
          <button className="btn btn-primary m-2">Registrar paciente</button>
          <button className="btn btn-secondary m-2">Acreditar paciente</button>
          <button className="btn btn-info m-2">Ingresar paciente a sala de espera</button>
          <button className="btn btn-warning m-2">Actualizar estado del paciente</button>
        </Card.Body>
      </Card>


      {/* otro card
      3. Estudios
        Registrar realización del estudio
        Registrar resultado del estudio
        Asociar insumos a estudio
      */}
      <Card className='my-5'>
        <Card.Header >Estudios</Card.Header>
        <Card.Body>
          <button className="btn btn-primary m-2">Registrar realización del estudio</button>
          <button className="btn btn-secondary m-2">Registrar resultado del estudio</button>
          <button className="btn btn-info m-2">Asociar insumos a estudio</button>
        </Card.Body>

      </Card>

      {/* 4. Historia Clínica
        Registrar información clínica
        Consultar historia clínica */}

      <Card className='my-5'>
        <Card.Header >Historia Clínica</Card.Header>
        <Card.Body>
          <button className="btn btn-primary m-2">Registrar información clínica</button>
          <button className="btn btn-secondary m-2">Consultar historia clínica</button>
        </Card.Body>
      </Card>

      {/* 5. Pagos
      Registrar pago
      */}
      <Card className='my-5'>
        <Card.Header >Pagos</Card.Header>
        <Card.Body>
          <button className="btn btn-primary m-2">Registrar pago</button>
        </Card.Body>
      </Card>

      {/* 
      6. Insumos
        Controlar stock de insumos
       */}
      <Card className='my-5'>
        <Card.Header >Insumos</Card.Header>
        <Card.Body>
          <button className="btn btn-primary m-2">Controlar stock de insumos</button>
        </Card.Body>
      </Card>

      {/* hacemos card para registrar paciente */}
      <Card className='my-5'>
        <Card.Header >Registrar Paciente</Card.Header>
        <Card.Body>
          <button className="btn btn-primary m-2">Registrar paciente</button>
        </Card.Body>
      </Card>

    </Container>
  )
}

export default EstudiosPage

