

// generamos el modelo de datos
class Paciente {
  constructor(id, nombre, apellido, dni, fechaNacimiento, estado) {
    this.id = id
    this.nombre = nombre
    this.apellido = apellido
    this.dni = dni
    this.fechaNacimiento = fechaNacimiento
  }
}

export default Paciente