const resultadoEstudioModel = {
  id_estudio: {
    label: "ID Estudio",
    type: "number",
    maxLength: 8,
    required: true,
    description: "Identificador único del estudio",
  },
  id_paciente: {
    label: "ID Paciente",
    type: "number",
    maxLength: 6,
    required: true,
    description: "Paciente asociado al estudio",
  },
  tipo_estudio: {
    label: "Tipo de Estudio",
    type: "text",
    maxLength: 50,
    required: true,
    description: "Ej: Radiografía, Análisis de sangre",
  },
  resultado: {
    label: "Resultado",
    type: "textarea", // 👈 para texto largo
    required: true,
    description: "Detalle del resultado del estudio",
  },
  fecha_realizacion: {
    label: "Fecha de realización",
    type: "date", // 👈 calendar picker
    required: true,
    description: "Fecha en que se realizó el estudio (YYYY-MM-DD)",
  },
};

export default resultadoEstudioModel;
