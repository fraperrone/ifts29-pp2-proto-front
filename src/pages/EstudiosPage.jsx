// generamos la pagina de estudios de laboratorio
import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
const EstudiosPage = () => {
  return (
    <Container className="m-5">
      <h1>Estudios de Laboratorio</h1>
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


    </Container>
  )
}

export default EstudiosPage

