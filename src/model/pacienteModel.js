

// generamos el modelo de datos
const pacienteModel = {
  id_paciente: {
    label: "ID Paciente",
    type: "number",
    maxLength: 6,
    required: true,
    description: "Identificador único del paciente",
  },
  nombre: {
    label: "Nombre",
    type: "text",
    maxLength: 50,
    required: true,
    description: "Nombre del paciente",
  },
  apellido: {
    label: "Apellido",
    type: "text",
    maxLength: 50,
    required: true,
    description: "Apellido del paciente",
  },
  fecha_nacimiento: {
    label: "Fecha de nacimiento",
    type: "date", // 👈 genera el calendar picker nativo
    required: true,
    description: "Fecha de nacimiento del paciente (dd/mm/aa)",
  },
  telefono: {
    label: "Teléfono",
    type: "text",
    pattern: "\\+54-[0-9]{3}-[0-9]{7}",
    required: true,
    description: "Teléfono de contacto",
  },
};

export default pacienteModel;


